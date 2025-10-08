import React, { useState, useEffect } from 'react';
import { ClassData } from '../types';

interface ClassSetupProps {
  classes: ClassData[];
  onSelectClass: (id: string) => void;
  onCreateClass: (name: string) => void;
}

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


const ClassSetup: React.FC<ClassSetupProps> = ({ classes, onSelectClass, onCreateClass }) => {
  const [newClassName, setNewClassName] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');
  
  useEffect(() => {
    // Reseta a seleção se a lista de turmas mudar (ex: uma turma é criada)
    setSelectedClassId('');
  }, [classes]);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newClassName.trim()) {
      onCreateClass(newClassName.trim());
      setNewClassName(''); // Limpa o campo após criar
    }
  };

  const handleSelect = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedClassId) {
      onSelectClass(selectedClassId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600">Roleta de Questões</h1>
        <p className="text-lg text-gray-600 mt-2">Uma atividade divertida para testar conhecimentos!</p>
      </header>

      <div className="w-full max-w-xl mx-auto space-y-8">
        {/* Create New Class */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Criar Nova Turma</h2>
          <form onSubmit={handleCreate} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              placeholder="Ex: 6º Ano A"
              className="w-full px-4 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 flex-grow"
              aria-label="Nome da nova turma"
            />
            <button
              type="submit"
              disabled={!newClassName.trim()}
              className="px-6 py-3 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-400 transition-transform transform hover:scale-105"
            >
              Criar e Continuar
            </button>
          </form>
        </div>
        
        <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
                <span className="bg-gray-100 px-2 text-sm text-gray-500">OU</span>
            </div>
        </div>


        {/* Load Existing Class */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Selecionar Turma Existente</h2>
          <form onSubmit={handleSelect} className="flex flex-col gap-4">
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              disabled={classes.length === 0}
              className="w-full px-4 py-3 text-lg text-gray-800 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white disabled:bg-gray-200"
              aria-label="Selecionar turma existente"
            >
              <option value="" disabled>Selecione uma turma</option> {/* Opção vazia padrão */}
              {classes.length === 0 ? (
                <option disabled>Nenhuma turma criada</option>
              ) : (
                classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
              )}
            </select>
            {/* Desabilita se nada for selecionado */}
            <button
              type="submit"
              disabled={!selectedClassId}
              className="w-full px-6 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 disabled:bg-gray-400 transition-transform transform hover:scale-105"
            >
              Carregar Turma
            </button>
          </form>
        </div>
      </div>
       <footer className="text-center mt-12 text-gray-500 text-sm">
        <p>Desenvolvido para atividades educacionais dinâmicas.</p>
      </footer>
    </div>
  );
};

export default ClassSetup;