# Foundation React

A modern, lightweight React starter template built with Vite, TypeScript, Tailwind CSS, ESLint, and Prettier — designed for rapid development with best practices out of the box.

---

Here’s your updated **Features** section including current and planned features:

---

## Features

- ⚡️ **Blazing-fast development** with [Vite](https://vitejs.dev/)
- 💪 **TypeScript** with strict mode for safer, scalable code
- 🎨 **Tailwind CSS** for utility-first, responsive styling
- 🧹 **ESLint** + **Prettier** for clean, consistent code formatting
- 📦 Fast and disk-efficient dependency management via **pnpm**
- ✅ **Husky** + **lint-staged** for Git pre-commit quality checks
- 📁 Opinionated and scalable folder structure
- 🛣️ **React Router DOM** for client-side routing
- 🐳 Dockerized production setup using **multi-stage build**
- 🗜️ Optional **Brotli** and **Gzip** compression support via Nginx
- 🌈 Optimized for **developer experience** and **performance**
- 🔁 **CI/CD pipeline** with GitHub Actions
- 🌍 **Internationalization (i18n)** support with `react-i18next`
- 🧪 **Vitest + Playwright** for unit/integration tests
- 🧱 UI component system with **shadcn/ui**
- 🧠 State management using **Redux Toolkit** and **Redux Persist**
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

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `pnpm dev`          | Start the development server                 |
| `pnpm build`        | Build the project for production             |
| `pnpm preview`      | Preview the production build                 |
| `pnpm lint`         | Run ESLint to check code style errors        |
| `pnpm lint:fix`     | Auto-fix ESLint errors                       |
| `pnpm format`       | Format code using Prettier                   |
| `pnpm format:check` | Check code formatting without fixing         |
| `pnpm type-check`   | Run TypeScript type checking                 |
| `pnpm upgrade`      | Upgrade dependencies using npm-check-updates |

---

## Folder Structure

```
├── public/                # Static assets (favicons, manifest, images)
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components and routes
│   ├── styles/            # Global and Tailwind CSS configs
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Root React component
│   ├── main.tsx           # Entry point
│   └── ...
├── .eslintrc.js           # ESLint config
├── .prettierrc            # Prettier config
├── tailwind.config.js     # Tailwind config
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
└── package.json
```

---

## Recommendations

- Customize Tailwind configuration as needed.
- Add testing framework and write tests.
- Extend ESLint rules or add plugins if desired.
- Integrate state management or API libraries depending on project needs.

---

## License

MIT License © Diwash Bhattarai
