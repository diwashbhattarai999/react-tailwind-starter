import { fixupPluginRules } from '@eslint/compat';
import eslintJS from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

const patchedReactHooksPlugin = fixupPluginRules(eslintPluginReactHooks);
const patchedImportPlugin = fixupPluginRules(eslintPluginImport);

// Ignore files configuration
const eslintIgnoreConfig = {
  name: 'ignore',
  ignores: [
    'node_modules/*',
    'tests/',
    'dist/',
    'build/',
    '**/.cache/**',
    '**/.temp/**',
    '**/.vscode/**',
    '**/.idea/**',
    '**/.git/**',
    '**/*.min.js',
    '**/*.d.ts',
    '**/.env*',
    '**/package-lock.json',
    '**/yarn.lock',
    '**/pnpm-lock.yaml',
  ],
};

const baseESLintConfig = {
  name: 'eslint',
  extends: [eslintJS.configs.recommended],
  rules: {
    'no-await-in-loop': 'error', // Disallow await inside loops
    'no-constant-binary-expression': 'error', // Disallow constant expressions in conditions
    'no-duplicate-imports': 'error', // Disallow duplicate imports
    'no-new-native-nonconstructor': 'error', // Disallow new operators with the String, Number, and Boolean objects
    'no-promise-executor-return': 'error', // Disallow returning values from Promise executor functions
    'no-self-compare': 'error', // Disallow self-comparison
    'no-template-curly-in-string': 'error', // Disallow template literals in strings
    'no-unmodified-loop-condition': 'error', // Disallow unmodified loop conditions
    'no-unreachable-loop': 'error', // Disallow unreachable loops
    'no-unused-private-class-members': 'error', // Disallow unused private class members
    'no-use-before-define': 'error', // Disallow usage before definition
    'no-console': 'warn', // Warn about console.log usage
    'no-debugger': 'error', // Disallow debugger statements
    'no-alert': 'error', // Disallow alert, confirm, and prompt
    'no-var': 'error', // Disallow var (use let/const instead)
    'require-atomic-updates': 'error', // Enforce atomic updates in async functions
    'arrow-body-style': ['warn', 'as-needed'], // Remove unnecessary curly braces in arrow functions
    'prefer-arrow-callback': 'warn', // Encourage arrow functions for callbacks,
  },
};

const typescriptConfig = {
  name: 'typescript',
  extends: [...typescriptEslint.configs.recommendedTypeChecked],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: { modules: true },
      ecmaVersion: 'latest',
      project: './tsconfig.json',
    },
    globals: {
      ...globals.builtin,
      ...globals.browser,
      ...globals.es2025,
    },
  },
  linterOptions: { reportUnusedDisableDirectives: 'error' },
  plugins: { import: patchedImportPlugin },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/no-explicit-any': 'warn', // Warn against using 'any'
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow inferred types for modules
    '@typescript-eslint/no-unsafe-call': 'off', // Allow unsafe calls
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_', // Ignore unused arguments starting with '_'
        varsIgnorePattern: '^_', // Ignore unused variables starting with '_'
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off', // Allow non-null assertions
    '@typescript-eslint/no-unsafe-return': 'off', // Allow unsafe return types
    '@typescript-eslint/no-unsafe-assignment': 'off', // Allow unsafe assignments
    '@typescript-eslint/no-unsafe-member-access': 'off', // Allow unsafe member access
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};

const reactConfig = {
  name: 'react',
  extends: [eslintPluginReact.configs.flat['jsx-runtime']],
  plugins: {
    'react-hooks': patchedReactHooksPlugin,
    'react-refresh': eslintPluginReactRefresh,
  },
  settings: { react: { version: 'detect' } },
  rules: {
    'import/no-anonymous-default-export': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-no-target-blank': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
        multiline: 'last',
      },
    ],
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': 'off',
    'react/jsx-no-duplicate-props': 'error', // Prevent duplicate props in JSX
    'react/jsx-key': 'error', // Ensure 'key' is present in lists
    'react/jsx-no-undef': 'error', // Prevent undefined JSX elements
    'react/no-unknown-property': 'error', // Enforce correct property names in JSX
    'react/no-unused-prop-types': 'warn', // Warn about unused prop types
    'react-hooks/rules-of-hooks': 'error', // Enforce correct usage of hooks
    'react-hooks/exhaustive-deps': 'warn', // Ensure dependencies in useEffect are complete
    ...patchedReactHooksPlugin.configs.recommended.rules,
  },
};

const jsxA11yConfig = {
  name: 'jsxA11y',
  ...jsxA11yPlugin.flatConfigs.recommended,
  plugins: {
    'jsx-a11y': jsxA11yPlugin,
  },
  rules: {
    'jsx-a11y/alt-text': ['error', { elements: ['img'] }],
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
  },
};

const importSortConfig = {
  name: 'import-sort',
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          /* React imports */
          ['^react', '^@react'],

          /* Third-party libraries */
          ['^\\w'],

          /* Imports starting with @ */
          ['^@'],

          /* Custom imports */
          [
            '^@components',
            '^@constants',
            '^@contexts',
            '^@hooks',
            '^@misc',
            '^@pages',
            '^@plugins',
            '^@public',
            '^@services',
            '^@stores',
            '^@typesDef',
            '^@utils',
          ],

          /* Parent imports. Put .. last */
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          /* Other relative imports. Put same-folder imports and . last */
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

          /* Style imports */
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/order': 'off', // Avoid conflicts with `simple-import-sort` plugin
    'sort-imports': 'off', // Avoid conflicts with `simple-import-sort` plugin
  },
};

// Test files configuration
const testConfig = {
  // Rules specific to test files
  files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
  rules: {
    'max-len': 'off', // Allow long lines in test files
    '@typescript-eslint/no-explicit-any': 'off', // Allow 'any' in test files
    'no-console': 'off', // Allow console logs in tests
  },
};

const eslintConfig = typescriptEslint.config(
  eslintIgnoreConfig,
  baseESLintConfig,
  typescriptConfig,
  eslintConfigPrettier,
  reactConfig,
  jsxA11yConfig,
  importSortConfig,
  testConfig
);

eslintConfig.map(config => {
  config.files = ['src/**/*.ts', 'src/**/*.tsx'];
});

export default eslintConfig;
