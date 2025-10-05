import React, { useState } from 'react';
import { ClassData } from '../types';

interface ClassSetupProps {
  classes: ClassData[];
  onSelectClass: (id: string) => void;
  onCreateClass: (name: string) => void;
}

const ClassSetup: React.FC<ClassSetupProps> = ({ classes, onSelectClass, onCreateClass }) => {
  const [newClassName, setNewClassName] = useState('');
  const [selectedClassId, setSelectedClassId] = useState(classes[0]?.id || '');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newClassName.trim()) {
      onCreateClass(newClassName.trim());
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

      <div className="w-full max-w-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Create New Class */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nova Turma</h2>
          <form onSubmit={handleCreate} className="flex flex-col gap-4">
            <input
              type="text"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              placeholder="Ex: 6º Ano A"
              className="w-full px-4 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              aria-label="Nome da nova turma"
            />
            <button
              type="submit"
              disabled={!newClassName.trim()}
              className="w-full px-6 py-3 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-400 transition-transform transform hover:scale-105"
            >
              Criar e Continuar
            </button>
          </form>
        </div>

        {/* Load Existing Class */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Carregar Turma</h2>
          <form onSubmit={handleSelect} className="flex flex-col gap-4">
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              disabled={classes.length === 0}
              className="w-full px-4 py-3 text-lg text-gray-800 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white disabled:bg-gray-200"
              aria-label="Selecionar turma existente"
            >
              {classes.length === 0 ? (
                <option>Nenhuma turma criada</option>
              ) : (
                classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
              )}
            </select>
            <button
              type="submit"
              disabled={classes.length === 0}
              className="w-full px-6 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 disabled:bg-gray-400 transition-transform transform hover:scale-105"
            >
              Carregar
            </button>
          </form>
        </div>
      </div>
       <footer className="text-center mt-12 text-gray-500 text-sm absolute bottom-8">
        <p>Desenvolvido para atividades educacionais dinâmicas.</p>
      </footer>
    </div>
  );
};

export default ClassSetup;