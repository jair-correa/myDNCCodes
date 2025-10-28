# DNC ARQ Jair

Este projeto é uma aplicação React desenvolvida como portfólio de arquitetura, apresentando projetos, informações profissionais e formulário de contato com suporte a múltiplos idiomas.

This React application serves as an architecture portfolio, showcasing projects, professional information, and a contact form with multi-language support.

## Funcionalidades / Features

- 📱 Design responsivo / Responsive design
- 🏠 Galeria de projetos com favoritos / Project showcase with favorites
- 🖼️ Sistema de fallback de imagens / Image fallback system
- 🌐 Suporte a múltiplos idiomas (PT/EN) / Multi-language support (PT/EN)
- 📝 Seção Sobre / About section
- 📬 Formulário de contato / Contact form
- 🔄 Transições suaves / Smooth transitions
- ⚡ Carregamento rápido com Vite / Fast loading with Vite
- 💾 Persistência de favoritos com sessionStorage / Favorites persistence with sessionStorage
- 🎨 Componentes reutilizáveis / Reusable components

## Tecnologias Utilizadas / Technologies Used

### Frontend

- React 18.3
- React Router DOM 6.27
- Vite 7.1
- CSS3

### Ferramentas de Desenvolvimento / Development Tools

- ESLint
- Git
- npm

## Estrutura do Projeto / Project Structure

```
src/
├── components/              # Componentes reutilizáveis / Reusable components
│   ├── AboutText/          # Texto da seção sobre / About section text
│   ├── Banner/             # Banner de cabeçalho das páginas / Page header banner
│   ├── Button/             # Componente de botão customizável / Customizable button
│   ├── ContactForm/        # Formulário de contato / Contact form
│   ├── Footer/             # Rodapé / Footer
│   ├── Header/             # Cabeçalho com navegação / Header with navigation
│   ├── Hero/               # Seção hero da homepage / Homepage hero section
│   ├── LoadingSpinner/     # Indicador de carregamento / Loading indicator
│   ├── ProjectCard/        # Card individual de projeto / Individual project card
│   ├── ProjectsList/       # Lista de projetos / Projects list
│   └── SafeImage/          # Componente de imagem com fallback / Image with fallback
├── pages/                   # Páginas principais / Main pages
│   ├── Home.jsx            # Página inicial / Home page
│   ├── About.jsx           # Página sobre / About page
│   ├── Projects.jsx        # Página de projetos / Projects page
│   └── Contact.jsx         # Página de contato / Contact page
├── contexts/                # Contextos React / React contexts
│   └── AppContext.jsx      # Contexto global da aplicação / Global app context
├── services/                # Serviços e APIs / Services and APIs
│   └── js/
│       └── apiServices.js  # Serviço de chamadas à API / API calls service
├── utils/                   # Funções utilitárias / Utility functions
│   ├── ScrollTop.jsx       # Scroll automático ao topo / Auto scroll to top
│   └── localImages.js      # Mapeamento de imagens locais / Local images mapping
└── assets/                  # Arquivos estáticos / Static assets
```

## Arquitetura / Architecture

### Componentes Principais / Main Components

#### ProjectCard
Componente responsável por renderizar cada card de projeto com:
- Imagem com sistema de fallback (SafeImage)
- Título e subtítulo
- Botão de favoritar

Component responsible for rendering each project card with:
- Image with fallback system (SafeImage)
- Title and subtitle
- Favorite button

#### SafeImage
Componente de imagem resiliente que implementa fallback em três níveis:
1. Imagem da API remota
2. Imagem local do mapeamento (localImages)
3. Imagem de fallback padrão

Resilient image component implementing three-level fallback:
1. Remote API image
2. Local mapped image (localImages)
3. Default fallback image

#### AppContext
Contexto global que gerencia:
- Idioma da aplicação (PT/BR ou EN)
- Textos internacionalizados
- Estado de carregamento

Global context managing:
- Application language (PT/BR or EN)
- Internationalized texts
- Loading state

### Fluxo de Dados / Data Flow

1. **API Integration**: Dados são carregados da API DNC React / Data is loaded from DNC React API
2. **Context Management**: Estado global gerenciado via Context API / Global state managed via Context API
3. **Local Storage**: Idioma e favoritos persistidos localmente / Language and favorites persisted locally
4. **Session Storage**: Favoritos salvos durante a sessão / Favorites saved during session

## Instalação / Installation

1. Clone o repositório / Clone the repository:

   ```bash
   git clone https://github.com/jair-correa/myDNCCodes.git
   cd dnc-arq-jair
   ```

2. Instale as dependências / Install dependencies:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento / Start development server:

   ```bash
   npm run dev
   ```

4. Build para produção / Build for production:

   ```bash
   npm run build
   ```

5. Visualize o build de produção / Preview production build:
   ```bash
   npm run preview
   ```

## Testes / Testing

### Testes Manuais / Manual Testing

1. **Teste de responsividade / Responsive Testing**:
   - Teste em diferentes navegadores (Chrome, Firefox, Safari, Edge) / Test in different browsers
   - Teste em diferentes tamanhos de tela (mobile, tablet, desktop) / Test different screen sizes
   - Teste em dispositivos móveis reais / Test on real mobile devices

2. **Teste de funcionalidades / Functionality Testing**:
   - Verifique todos os links de navegação / Check all navigation links
   - Teste o formulário de contato / Test contact form
   - Verifique o carregamento dos projetos / Verify project loading
   - Teste o scroll suave / Test smooth scrolling
   - Teste a troca de idiomas / Test language switching
   - Teste o sistema de favoritos / Test favorites system
   - Verifique o fallback de imagens / Check image fallback system

3. **Teste de Performance / Performance Testing**:
   - Verifique o tempo de carregamento inicial / Check initial load time
   - Teste o lazy loading de imagens / Test image lazy loading
   - Verifique a responsividade das transições / Check transitions responsiveness

## Scripts Disponíveis / Available Scripts

```bash
npm run dev      # Inicia servidor de desenvolvimento / Start development server
npm run build    # Cria build de produção / Create production build
npm run preview  # Visualiza build de produção / Preview production build
```

## API Endpoints

O projeto consome dados da API DNC React:
- **Base URL**: `https://dnc-react-api.vercel.app/files/`
- **Endpoints**:
  - `/webtext` - Textos internacionalizados / Internationalized texts
  - `/projects` - Lista de projetos / Projects list

The project consumes data from DNC React API

## Contribuição / Contributing

Contribuições são bem-vindas! Siga o padrão de commits convencionais / Contributions are welcome! Follow conventional commits pattern.

### Conventional Commits Pattern

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Tipos / Types**:
- `feat`: Nova funcionalidade / New feature
- `fix`: Correção de bug / Bug fix
- `refactor`: Refatoração de código / Code refactoring
- `docs`: Documentação / Documentation
- `style`: Formatação / Formatting
- `test`: Testes / Tests
- `chore`: Tarefas de manutenção / Maintenance tasks

### Fluxo de Contribuição / Contribution Flow

1. Crie uma nova branch / Create a new branch:

   ```bash
   git checkout -b feat/sua-feature
   ```

2. Faça commit das alterações seguindo o padrão / Commit changes following the pattern:

   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```

3. Faça push para a branch / Push to branch:

   ```bash
   git push origin feat/sua-feature
   ```

4. Abra um Pull Request / Open a Pull Request

## Boas Práticas / Best Practices

- ✅ Sempre use componentes funcionais com Hooks / Always use functional components with Hooks
- ✅ Implemente tratamento de erros adequado / Implement proper error handling
- ✅ Use PropTypes ou TypeScript para tipagem / Use PropTypes or TypeScript for typing
- ✅ Mantenha componentes pequenos e focados / Keep components small and focused
- ✅ Escreva código limpo e comentários quando necessário / Write clean code and comments when needed
- ✅ Teste em múltiplos dispositivos e navegadores / Test on multiple devices and browsers

## Licença / License

Este projeto é privado / This project is private.

## Autor / Author

**Jair Correa**
- GitHub: [@jair-correa](https://github.com/jair-correa)

## Agradecimentos / Acknowledgments

- DNC (Digital Innovation One) pela API de dados / for the data API
- Comunidade React / React Community

---

📝 **Última atualização / Last update**: Outubro 2024

🚀 **Status**: Em produção / In production

⭐ Se este projeto te ajudou, considere dar uma estrela! / If this project helped you, consider giving it a star!
