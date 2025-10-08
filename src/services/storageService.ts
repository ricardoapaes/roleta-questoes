import { ClassData } from '../../types'; // Caminho corrigido
import { getClassesFromFirestore, saveClassesToFirestore } from './firebaseService';

export const getClasses = async (): Promise<ClassData[]> => {
  return await getClassesFromFirestore();
};

export const saveClasses = async (classes: ClassData[]): Promise<void> => {
  await saveClassesToFirestore(classes);
};