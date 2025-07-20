import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and twMerge.
 *
 * This utility function merges multiple class names into a single string,
 * ensuring that Tailwind CSS classes are properly merged and deduplicated.
 *
 * @param inputs - The class names to combine.
 * @returns The merged class names.
 */
export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}
