// Import all themes
import * as themes from '@/themes'

// Create ui utility object
export const ui = new Proxy(themes, {
  get(target, prop) {
    const theme = target[prop as keyof typeof target]
    if (typeof theme === 'function') {
      return theme
    }
    throw new Error(`Theme "${String(prop)}" not found`)
  }
})

// Export individual themes for direct use if needed
export * from '@/themes'