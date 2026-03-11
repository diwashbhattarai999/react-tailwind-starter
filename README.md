# Foundation React

A modern, lightweight React starter template built with Vite, TypeScript, Tailwind CSS, Biome, and Lefthook — designed for rapid development with best practices out of the box.

---

Here’s your updated **Features** section including current and planned features:

---

## Features

- ⚡️ **Blazing-fast development** with [Vite](https://vitejs.dev/)
- 💪 **TypeScript** with strict mode for safer, scalable code
- 🎨 **Tailwind CSS** for utility-first, responsive styling
- 🧹 **Biome** for clean, consistent code formatting
- 📦 Fast and disk-efficient dependency management via **pnpm**
- ✅ **Lefthook** + **lint-staged** for Git pre-commit quality checks
- 📁 Opinionated and scalable folder structure
- 🛣️ **React Router DOM** for client-side routing
- 🐳 Dockerized production setup using **multi-stage build**
- 🗜️ Optional **Brotli** and **Gzip** compression support via Nginx
- 🌈 Optimized for **developer experience** and **performance**
- 🔁 **CI/CD pipeline** with GitHub Actions
- 🌍 **Internationalization (i18n)** support with `react-i18next`
- 🧪 **Vitest + Playwright** for unit/integration tests
- 🧱 UI component system with **shadcn/ui**
- 🧠 State management using **Zustand**
- 🔁 **Tanstack Query** (React Query) for data fetching and caching
- 📲 **PWA Support** using manifest and service worker
- 🔀 **Code splitting** and **lazy loading** for improved performance
- 🌘 **Theme switching** capabilities for dark/light mode
- 🧩 **Blocks** for reusable UI pages, components and hooks.

### Blocks

##### Pages

- **Login** page
- **Register** page
- **Forgot Password** page

#### Hooks

- **use-local-storage** hook
- **use-mobile** hook

---

## 🛠️ Upcoming Features

- 📈 Analytics integration (e.g., Google Analytics, Plausible)
- 📚 Storybook for component-driven development
- 🚨 Performance monitoring (e.g., Sentry, LogRocket)
- 🗺️ sitemap.xml and 🤖 robots.txt generation
- 🧳 Monorepo support (e.g., Turborepo or Nx) – maybe (not sure yet)

---

## Getting Started

### Prerequisites

- Node.js >= 18.20.3
- pnpm >= 10 (or npm/yarn, adjust scripts accordingly)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

---

## Scripts

| Script                    | Description                                  |
| ------------------------- | -------------------------------------------- |
| `pnpm dev`                | Start the development server                 |
| `pnpm build`              | Build the project for production             |
| `pnpm preview`            | Preview the production build                 |
| `pnpm lint:check`         | Run Biome to check code style errors         |
| `pnpm lint:fix`           | Auto-fix Biome errors                        |
| `pnpm type-check`         | Run TypeScript type checking                 |
| `pnpm upgrade`            | Upgrade dependencies using npm-check-updates |
| `pnpm prepare`            | Prepare the project (install Lefthook hooks) |
| `pnpm commit`             | Commit changes with commitizen               |
| `pnpm test`               | Run unit tests with Vitest & Playwright      |
| `pnpm test:unit`          | Run unit tests only with Vitest              |
| `pnpm test:unit:coverage` | Run unit tests with coverage report          |
| `pnpm test:e2e`           | Run end-to-end tests with Playwright         |
| `pnpm test:e2e:report`    | Show Playwright test report                  |
| `pnpm docker:build`       | Build Docker image for production            |
| `pnpm docker:run`         | Run Docker container for production          |

---

## Folder Structure

```

├── .github/               # GitHub Actions CI/CD workflows
├── .vscode/               # VSCode settings and extensions recommendations
├── public/                # Static assets (favicons, manifest, images)
├── src/
│   ├── app/               # Application logic, provider wrappers and router setup
│   ├── assets/            # Static assets (images, fonts, etc.)
│   ├── components/        # Reusable React components
│   ├── configs/           # Configuration files (env, routes, site etc.)
│   ├── constants/         # Constants used throughout the app
│   ├── features/          # Feature-specific components and logic
│   ├── hooks/             # Custom React hooks
│   ├── i18n/              # Internationalization files
│   ├── lib/               # Shared libraries and utilities
│   ├── services/          # API services and data fetching logic
│   ├── store/             # Zustand stores
│   ├── styles/            # Global and Tailwind CSS configs
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── main.tsx           # Entry point
│   └── vite-env.d.ts      # Vite environment types
├── tests/                 # Test files
├── .dockerignore          # Docker ignore file
├── .env.development       # Development environment variables
├── .env.example           # Example environment variables
├── .env.production        # Production environment variables
├── .gitignore             # Git ignore file
├── biome.json             # Biome configuration
├── .prettierignore        # Prettier ignore file
├── .prettierrc            # Prettier config
├── commitlint.config.ts   # Commitlint configuration
├── components.json        # shadcn/ui components configuration
├── CONTRIBUTING.md        # Contribution guidelines
├── Dockerfile             # Dockerfile for production
├── index.html             # Main HTML file
├── lefthook.yml           # Lefthook configuration
├── LICENSE                # Project license
├── nginx.conf             # Nginx configuration for production
├── package.json           # Project dependencies and scripts
├── playwright.config.ts   # Playwright configuration
├── pnpm-lock.yaml         # pnpm lock file
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
└── vitest.setup.ts        # Vitest setup file
```

---

## Recommendations

- Customize Tailwind configuration as needed.
- Add testing framework and write tests.
- Extend Biome rules or add plugins if desired.
- Integrate state management or API libraries depending on project needs.

---

## License

MIT License © Diwash Bhattarai
