import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './src/context/AuthContext';
import AuthWrapper from './src/components/AuthWrapper';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </AuthProvider>
  </React.StrictMode>
);