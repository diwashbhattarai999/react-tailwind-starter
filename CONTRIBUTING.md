# 🤝 Contributing to Foundation React Template

Thank you for your interest in contributing to the **Foundation React Template**! This guide outlines everything you need to contribute effectively — from setting up your environment to submitting high-quality pull requests. Please read it thoroughly before making changes.

---

## Getting Started

### Initial Setup

To start developing with this template, run the following commands **in order**:

```bash
pnpm prepare     # One-time setup to install Git hooks via Husky
pnpm install     # Install project dependencies
pnpm dev         # Start the development server
```

### Recommended Tools

- **Node.js**: Use the latest LTS version.
- **Editor**: We recommend [VS Code](https://code.visualstudio.com/) with the following extensions:

  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - GitLens (optional but helpful for Git insights)

---

## Package Manager Guidelines

This project uses [**pnpm**](https://pnpm.io/) as the **exclusive package manager** for its speed, efficiency, and workspace support.

### ✅ Do:

- Use `pnpm` for all installs and scripts.
- Commit **only** the `pnpm-lock.yaml` file.

### ⚠️ You _may_ use `npm` or `yarn` locally, but:

- **Do not** commit or push their lock files:

  - `package-lock.json`
  - `yarn.lock`

If generated accidentally:

```bash
rm package-lock.json yarn.lock
pnpm install
```

---

## Folder Structure

Please adhere to the existing project structure for consistency and maintainability.

```
src/
├─ app/           # Entry point and routing setup
├─ assets/        # Static files (images, icons, etc.)
├─ components/    # Shared reusable UI components
├─ configs/       # Configuration files
├─ constants/     # App-wide constants
├─ contexts/      # React Context providers
├─ features/      # Feature-specific modules (domain-driven)
├─ hooks/         # Custom React hooks
├─ i18n/          # Internationalization setup
├─ lib/           # Utilities or third-party wrappers
├─ services/      # API service layer
├─ store/         # Global state management (e.g., Redux/Zustand)
├─ styles/        # Global and Tailwind CSS styles
├─ types/         # Global TypeScript types
├─ utils/         # Helper and utility functions
```

> Unsure where to place your file? Ask a core maintainer or check similar features for reference.

---

## Code Quality & Standards

### TypeScript Best Practices

- Use **strict types** throughout.
- Avoid `any`. Prefer `unknown` and apply proper type narrowing.
- Name variables, functions, and components descriptively.
  - ✅ Good: `getUserProfile`
  - ❌ Bad: `getData`
- Use **interfaces** for object shapes and **types** for unions or function signatures.

---

## Testing

We encourage writing tests for all non-trivial features.

- **End-to-End (E2E)** tests → place inside a `tests` folder (root-level).
- **Unit tests** → colocate within the component/utility's folder.

---

## Git & Commit Conventions

### Conventional Commits

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format to ensure clarity in commit history:

```bash
<type>(<scope>): <description>
```

Examples:

```bash
feat(auth): add login with OTP
fix(ui): resolve sidebar scroll bug
chore: update dependencies
docs: improve contribution guide
```

> Use `pnpm run commit` to launch Commitizen and guide your commit message formatting.

### Branch Naming

Use descriptive, kebab-case branch names:

```bash
feature/signup-form
fix/image-loader-bug
chore/update-eslint-rules
```

---

## Pull Request (PR) Process

When submitting a PR:

- Ensure it is **focused and atomic** (smallest meaningful unit of work).
- Include a meaningful title and description.
- Link to any related issue(s) if applicable.
- Request a review from a maintainer or team member.
- **Do not merge** without at least one approval (unless you're the maintainer).

---

## UI/UX & Styling Guidelines

- Follow Figma designs **strictly** if provided.
- Build **reusable**, **accessible**, and **modular** components.
- Use [**class-variance-authority**](https://cva.style/docs/introduction) (CVA) for styling variants.
- Use **Tailwind CSS** for all styling, adhering to the project’s utility-first design system.
- **Never hardcode** UI strings; use the i18n translation functions.

---

## Adding Dependencies

- Before introducing new packages, ensure:

  - It serves a clear purpose.
  - No existing solution already covers it.
  - You’ve received approval from a maintainer.

---

## Final Notes

- Ask before you assume. Early clarification avoids wasted effort.
- Contribute respectfully. We value clean code and clear communication.
- Review your code thoroughly before pushing or opening PRs.

---

### Still have questions?

Open a discussion or reach out to a maintainer. We're here to help.

---

Thank you for contributing to Foundation React Template — your effort helps us build clean, modern, and scalable applications. 🎉
