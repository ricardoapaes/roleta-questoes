import React from 'react';
import { useAuth } from '../context/AuthContext';

const LoginScreen: React.FC = () => {
  const { signIn, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">Bem-vindo!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Faça login para acessar suas turmas e iniciar o jogo.
        </p>
        <button
          onClick={signIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold text-xl rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.764-1.823 4.21-6.806 4.21-4.107 0-7.439-3.332-7.439-7.439s3.332-7.439 7.439-7.439c2.327 0 3.965.98 4.888 1.881l3.26-3.26C18.785 1.189 16.234 0 12.24 0 5.463 0 0 5.463 0 12.24s5.463 12.24 12.24 12.24c6.821 0 11.854-4.735 11.854-11.584 0-.731-.096-1.29-.165-1.845H12.24z" />
              </svg>
              Entrar com Google
            </>
          )}
        </button>
      </div>
      <footer className="text-center mt-12 text-gray-500 text-sm">
        <p>Desenvolvido para atividades educacionais dinâmicas.</p>
      </footer>
    </div>
  );
};

export default LoginScreen;