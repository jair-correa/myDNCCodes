# Introdução ao TypeScript

Projeto de estudos de TypeScript com React, Vite.

## 🚀 Stack Tecnológico

- **TypeScript 5.9.3** - Superset JavaScript com tipagem estática
- **React 19.1.1** - Biblioteca UI
- **Vite 7.1.7** - Build tool e dev server
- **ESLint 9.36.0** - Linter para qualidade de código

## 📁 Estrutura do Projeto

```
introducao-typescript/
├── src/
│   ├── App.tsx        # Componente principal React
│   └── main.tsx       # Entry point
├── build/             # Arquivos compilados TypeScript
├── public/            # Assets estáticos
└── Intro a Typescript - Lista de Exercícios.pdf
```

## 🛠️ Instalação

```bash
npm install
```

## 📜 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento (localhost:5173)
npm run build    # Build de produção
npm run lint     # Executa ESLint
npm run preview  # Preview do build de produção
```

## 🏃 Como Executar

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## 📝 Configuração TypeScript

O projeto utiliza múltiplas configurações:

- `tsconfig.json` - Configuração base
- `tsconfig.app.json` - Config para código da aplicação
- `tsconfig.node.json` - Config para scripts Node.js (Vite)

## 🔧 ESLint

Configuração com regras para React e TypeScript. Para executar:

```bash
npm run lint
```

## 📚 Recursos

- [TypeScript Docs](https://www.typescriptlang.org/)
- [React 19 Docs](https://react.dev/)
- [Vite Guide](https://vite.dev/guide/)

---

**Versão:** 0.0.0  
**Licença:** Private
