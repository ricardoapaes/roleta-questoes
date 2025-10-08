import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, writeBatch, setDoc, deleteDoc } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';
import { ClassData } from '../../types'; // Caminho corrigido

// Inicializa o Firebase e exporta a instância do app
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const classesCollectionRef = collection(db, 'classes');

/**
 * Busca todas as turmas do Firestore.
 */
export const getClassesFromFirestore = async (): Promise<ClassData[]> => {
  try {
    const querySnapshot = await getDocs(classesCollectionRef);
    const classes: ClassData[] = [];
    querySnapshot.forEach((doc) => {
      // O ID do documento é a propriedade `id` da turma
      classes.push({ id: doc.id, ...doc.data() } as ClassData);
    });
    return classes;
  } catch (error) {
    console.error("Erro ao buscar turmas do Firestore: ", error);
    alert("Não foi possível carregar os dados das turmas. Verifique sua conexão e se as credenciais do Firebase em 'firebaseConfig.ts' estão corretas.");
    return [];
  }
};

/**
 * Salva o estado completo de todas as turmas no Firestore.
 * Esta abordagem de "substituir tudo" é simples e eficaz para este aplicativo.
 * Ela garante que o estado local e o remoto estejam sempre sincronizados após uma gravação.
 */
export const saveClassesToFirestore = async (classes: ClassData[]): Promise<void> => {
  try {
    const batch = writeBatch(db);
    const localClassIds = new Set(classes.map(c => c.id));

    // Primeiro, busca todos os documentos existentes no Firestore
    const querySnapshot = await getDocs(classesCollectionRef);
    
    // Deleta os documentos no Firestore que não existem mais no estado local
    querySnapshot.forEach((document) => {
      if (!localClassIds.has(document.id)) {
        batch.delete(document.ref);
      }
    });

    // Em seguida, adiciona/atualiza todos os documentos do estado local
    classes.forEach((classData) => {
      const { id, ...data } = classData;
      const docRef = doc(db, 'classes', id); // Usa o ID existente para criar a referência
      batch.set(docRef, data); // setDoc irá criar ou sobrescrever o documento
    });

    await batch.commit();
  } catch (error) {
    console.error("Erro ao salvar turmas no Firestore: ", error);
    alert("Ocorreu um erro ao salvar os dados. Suas alterações podem não ter sido persistidas.");
  }
};