import { useEffect, useState } from 'react';

/**
 * Custom hook to manage localStorage state.
 * It initializes the state with a value from localStorage or a default value,
 * and updates localStorage whenever the state changes.
 *
 * @param key - The key under which the value is stored in localStorage.
 * @param initialValue - The initial value to use if no value is found in localStorage.
 * @returns A tuple containing the current value and a function to update it.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Lazy initialization with fallback
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage whenever value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
