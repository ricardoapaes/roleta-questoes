# Roleta de Questões

Uma aplicação web interativa para sorteio e gerenciamento de questões educacionais.

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages.

### Deploy Automático

O deploy acontece automaticamente quando você faz push para a branch `main`. O GitHub Actions irá:

1. Fazer build da aplicação
2. Publicar no GitHub Pages
3. Disponibilizar em: `https://ricardoapaes.github.io/roleta-questoes/`

### Deploy Manual

Você também pode fazer deploy manual:

```bash
npm run deploy
```

## 🛠️ Desenvolvimento Local

**Pré-requisitos:** Node.js

1. Clone o repositório:
   ```bash
   git clone https://github.com/ricardoapaes/roleta-questoes.git
   cd roleta-questoes
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o Firebase:
   - Obtenha as credenciais web no [Console Firebase](https://console.firebase.google.com)
   - Atualize `services/firebaseConfig.ts` com suas credenciais
   - Configure as regras do Firestore

4. Execute em modo desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse: `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
├── services/           # Serviços (Firebase, etc.)
├── types.ts           # Definições de tipos TypeScript
└── App.tsx           # Componente principal
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run deploy` - Deploy manual para GitHub Pages

## 🔥 Firebase

O projeto usa Firestore para persistência de dados. Certifique-se de:

1. Criar um projeto no [Firebase Console](https://console.firebase.google.com)
2. Habilitar o Firestore
3. Configurar as regras de segurança
4. Atualizar as credenciais em `firebaseConfig.ts`

## 📋 Funcionalidades

- ✅ Criação e gerenciamento de turmas
- ✅ Banco de questões por disciplina
- ✅ Roleta interativa para sorteio
- ✅ Sistema de pontuação
- ✅ Persistência de dados no Firebase
- ✅ Interface responsiva

View your app in AI Studio: https://ai.studio/apps/drive/1HLRXfVriXU7IwpOvvvJKKp_OVFiSvf0S
