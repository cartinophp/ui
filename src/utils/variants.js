import { tv as createTv } from 'tailwind-variants'

/**
 * Create tailwind-variants instance with default configuration
 */
export const variants = createTv({
  twMerge: true,
  twMergeConfig: {
    classGroups: {
      'font-size': ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl'],
    },
  },
})

/**
 * Merge multiple class values
 */
export function mergeStyles(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Omit keys from an object
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj }
  keys.forEach((key) => delete result[key])
  return result
}
