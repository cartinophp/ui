import { createTV } from 'tailwind-variants'

// Standalone TV instance for Cartino UI
// Can be configured via the config system if needed
export const tv = /* @__PURE__ */ createTV({
  twMerge: true,
  twMergeConfig: {
    classGroups: {
      'font-size': [{ text: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] }]
    }
  }
})
