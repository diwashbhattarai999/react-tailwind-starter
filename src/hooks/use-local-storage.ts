import { useEffect, useState } from "react";

/**
 * React hook for persisting state in `localStorage`.
 *
 * This hook behaves similarly to `useState`, but synchronizes the state
 * with the browser's `localStorage`. When the value changes, it is
 * automatically serialized and saved. On initialization, it attempts
 * to read the stored value from `localStorage`.
 *
 * @template T
 *
 * @param {string} key - The unique key used to store the value in `localStorage`.
 * @param {T} initialValue - The default value used if no stored value exists.
 *
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]}
 * A tuple containing:
 * - The current stored value
 * - A state setter function (same API as `useState`)
 *
 * @example
 * ```tsx
 * const [theme, setTheme] = useLocalStorage("theme", "light");
 *
 * function toggleTheme() {
 *   setTheme((prev) => (prev === "light" ? "dark" : "light"));
 * }
 * ```
 *
 * @example
 * ```tsx
 * const [user, setUser] = useLocalStorage("user", {
 *   name: "",
 *   email: "",
 * });
 * ```
 *
 * @remarks
 * - Uses **lazy initialization** to read from `localStorage` only once.
 * - Handles **SSR environments** by checking for `window`.
 * - Automatically serializes/deserializes values using `JSON`.
 * - Errors during read/write are caught and logged to prevent runtime crashes.
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
    /**
     * Internal state synchronized with localStorage.
     */
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === "undefined") return initialValue;

        try {
            const item = window.localStorage.getItem(key);
            return item !== null ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    /**
     * Sync state changes with localStorage.
     */
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
}
