// biome-ignore lint/style/noExportedImports: This file initializes i18n and does not export React components.
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

/**
 * Supported application languages.
 *
 * `as const` ensures the array is treated as readonly and
 * enables deriving a strict union type for language codes.
 */
export const LANGUAGES = ["en", "ne"] as const;

/**
 * Union type representing all supported language codes.
 *
 * @example
 * ```ts
 * const lang: Language = "en";
 * ```
 */
export type Language = (typeof LANGUAGES)[number];

/**
 * Initializes the application's internationalization system using `i18next`.
 *
 * Responsibilities:
 * - Detects the user's preferred language using `i18next-browser-languagedetector`.
 * - Integrates `i18next` with React via `react-i18next`.
 * - Dynamically loads translation resources using `i18next-resources-to-backend`.
 *
 * Translation files are loaded from:
 *
 * ```
 * ./locales/{language}/{namespace}.json
 * ```
 *
 * Example:
 * ```
 * ./locales/en/common.json
 * ./locales/ne/common.json
 * ```
 *
 * @remarks
 * - `fallbackLng` ensures the application falls back to English if
 *   the detected language is unavailable.
 * - Dynamic imports allow **code-splitting and lazy loading** of translation files.
 * - The `"dev"` language sometimes appears internally in i18next and is ignored here.
 */

// biome-ignore lint/complexity/noVoid: Initialization is a side-effect.
void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(
        resourcesToBackend((language: string, namespace: string) => {
            /**
             * Ignore the internal `dev` language sometimes used by i18next.
             */
            if (language === "dev") return;

            /**
             * Dynamically load translation resources.
             */
            return import(`./locales/${language}/${namespace}.json`);
        })
    )
    .init({
        /**
         * Enables verbose logging for debugging translation issues.
         */
        debug: true,

        /**
         * Default fallback language used when a translation
         * for the detected language is unavailable.
         */
        fallbackLng: "en",
    });

/**
 * Export the configured i18n instance for use across the application.
 */
export default i18n;
