# Theme Customization Guide

Complete guide to customizing CartinoPHP UI themes - similar to Nuxt UI's theming system.

## Overview

CartinoPHP UI provides a powerful, flexible theming system that allows you to:

- 🎨 Override default component styles
- 🔧 Create custom variants
- 📦 Use pre-built theme presets
- 🎯 Configure components globally or individually
- 🌈 Customize colors, icons, and more

## Quick Start

### 1. Create a Theme Configuration File

Create a `cartino-ui.config.js` file in your project root:

```typescript
// cartino-ui.config.js
import { defineTheme } from '@cartino/ui'

export default defineTheme({
  colors: {
    primary: 'blue',
    secondary: 'purple'
  },
  components: {
    button: {
      variants: {
        color: {
          brand: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
        }
      }
    }
  }
})
```

### 2. Use ThemeProvider in Your App

```vue
<script setup>
import { ThemeProvider } from '@cartino/ui'
import theme from './cartino-ui.config'
</script>

<template>
  <ThemeProvider :theme="theme">
    <YourApp />
  </ThemeProvider>
</template>
```

### 3. Use Components with Custom Theme

```vue
<template>
  <ui-button color="brand">Gradient Button</ui-button>
</template>
```

## Theme Configuration Structure

### Complete Configuration Example

```typescript
import { defineTheme } from '@cartino/ui'

export default defineTheme({
  // Global Settings
  prefix: 'ui-',
  transitions: true,

  // Color Mapping
  colors: {
    primary: 'blue',
    secondary: 'violet',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
    error: 'red',
    neutral: 'slate'
  },

  // Icon Configuration
  icons: {
    loading: 'i-heroicons-arrow-path',
    check: 'i-heroicons-check',
    close: 'i-heroicons-x-mark',
    // ... more icons
  },

  // Component Overrides
  components: {
    button: {
      slots: {
        base: ['custom-button-class'],
        label: ['font-bold']
      },
      variants: {
        color: {
          brand: 'bg-brand-500 text-white hover:bg-brand-600'
        },
        size: {
          xxl: {
            base: 'px-8 py-4 text-2xl gap-3',
            leadingIcon: 'size-8',
            trailingIcon: 'size-8'
          }
        }
      },
      compoundVariants: [
        {
          color: 'brand',
          variant: 'outline',
          class: 'ring-2 ring-brand-500 text-brand-600'
        }
      ],
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
      }
    },
    input: {
      // Input customization
    }
    // ... more components
  },

  // Tailwind Merge Config
  twMerge: {
    prefix: 'ui-',
    classGroups: {
      'font-size': [{ text: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] }]
    }
  }
})
```

## Using Theme Presets

CartinoPHP UI comes with built-in theme presets:

### Default Preset

```typescript
import { defaultPreset } from '@cartino/ui'

export default defineTheme(defaultPreset)
```

### Minimal Preset

Clean, minimalist design with subtle colors:

```typescript
import { minimalPreset } from '@cartino/ui'

export default defineTheme(minimalPreset)
```

### Modern Preset

Vibrant, modern theme with bold colors:

```typescript
import { modernPreset } from '@cartino/ui'

export default defineTheme(modernPreset)
```

### Extending a Preset

```typescript
import { defineTheme, modernPreset } from '@cartino/ui'

export default defineTheme({
  ...modernPreset,
  colors: {
    ...modernPreset.colors,
    primary: 'indigo', // Override primary color
    brand: 'purple' // Add custom color
  },
  components: {
    button: {
      variants: {
        color: {
          // Add custom variant
          neon: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'
        }
      }
    }
  }
})
```

## Component-Level Customization

### Button Component

```typescript
export default defineTheme({
  components: {
    button: {
      // Customize slots
      slots: {
        base: ['shadow-md', 'hover:shadow-lg'],
        label: ['font-semibold'],
        leadingIcon: ['mr-2'],
        trailingIcon: ['ml-2']
      },

      // Add/override variants
      variants: {
        color: {
          sunset: 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
        },
        size: {
          '2xl': {
            base: 'px-10 py-5 text-3xl gap-4',
            leadingIcon: 'size-10',
            trailingIcon: 'size-10'
          }
        },
        rounded: {
          full: 'rounded-full',
          none: 'rounded-none'
        }
      },

      // Compound variants (combinations)
      compoundVariants: [
        {
          color: 'sunset',
          size: 'lg',
          class: 'shadow-2xl shadow-orange-500/50'
        }
      ],

      // Default values
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
      }
    }
  }
})
```

### Input Component

```typescript
export default defineTheme({
  components: {
    input: {
      slots: {
        base: ['transition-all', 'duration-200'],
        wrapper: ['relative'],
        leadingIcon: ['text-gray-400']
      },
      variants: {
        size: {
          '2xl': {
            base: 'text-2xl px-6 py-4'
          }
        }
      },
      defaultVariants: {
        variant: 'outline',
        size: 'md'
      }
    }
  }
})
```

### Card Component

```typescript
export default defineTheme({
  components: {
    card: {
      slots: {
        base: ['rounded-2xl', 'shadow-xl', 'border-2'],
        header: ['border-b-2', 'border-gray-200'],
        body: ['p-6'],
        footer: ['border-t-2', 'border-gray-200', 'bg-gray-50']
      }
    }
  }
})
```

## Global Configuration

### Colors

Map semantic color names to Tailwind color values:

```typescript
export default defineTheme({
  colors: {
    primary: 'indigo',
    secondary: 'purple',
    success: 'emerald',
    warning: 'amber',
    error: 'rose',
    neutral: 'zinc',
    // Custom colors
    brand: 'violet',
    accent: 'fuchsia'
  }
})
```

### Icons

Configure default icons used throughout components:

```typescript
export default defineTheme({
  icons: {
    // State icons
    loading: 'i-heroicons-arrow-path',
    check: 'i-heroicons-check-circle',
    close: 'i-heroicons-x-circle',

    // Navigation
    chevronDown: 'i-heroicons-chevron-down',
    chevronUp: 'i-heroicons-chevron-up',

    // Actions
    search: 'i-heroicons-magnifying-glass',
    edit: 'i-heroicons-pencil-square',
    delete: 'i-heroicons-trash',

    // Custom icons
    heart: 'i-heroicons-heart',
    star: 'i-heroicons-star'
  }
})
```

## Runtime Theme Switching

### Switch Themes Dynamically

```vue
<script setup>
import { ref } from 'vue'
import { ThemeProvider, defaultPreset, modernPreset, minimalPreset } from '@cartino/ui'

const currentTheme = ref(defaultPreset)

function switchTheme(themeName) {
  const themes = {
    default: defaultPreset,
    modern: modernPreset,
    minimal: minimalPreset
  }
  currentTheme.value = themes[themeName]
}
</script>

<template>
  <ThemeProvider :theme="currentTheme">
    <div>
      <button @click="switchTheme('default')">Default</button>
      <button @click="switchTheme('modern')">Modern</button>
      <button @click="switchTheme('minimal')">Minimal</button>
    </div>
    <YourApp />
  </ThemeProvider>
</template>
```

### Use Theme in Components

```vue
<script setup>
import { useTheme } from '@cartino/ui'

const { theme, colors, icons, prefix } = useTheme('button')

console.log('Button theme:', theme.value)
console.log('Primary color:', colors.value.primary)
console.log('Check icon:', icons.value.check)
</script>
```

## Per-Component Customization

You can also customize individual component instances:

```vue
<template>
  <!-- Override via props -->
  <ui-button
    :ui="{
      base: 'custom-base-class',
      label: 'font-bold text-lg'
    }"
  >
    Custom Styled Button
  </ui-button>

  <!-- Override via class -->
  <ui-input
    class="custom-input-class"
    placeholder="Custom input"
  />
</template>
```

## Advanced: Creating Custom Variants

### Add New Color Variant

```typescript
export default defineTheme({
  components: {
    button: {
      variants: {
        color: {
          ocean: {
            solid: 'bg-blue-600 text-white hover:bg-blue-700',
            outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
            soft: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
            ghost: 'text-blue-600 hover:bg-blue-50'
          }
        }
      }
    }
  }
})
```

### Usage

```vue
<template>
  <ui-button color="ocean" variant="solid">Ocean Button</ui-button>
  <ui-button color="ocean" variant="outline">Ocean Outline</ui-button>
</template>
```

## TypeScript Support

Full TypeScript support with autocomplete:

```typescript
import type { ThemeConfig } from '@cartino/ui'

const myTheme: ThemeConfig = {
  colors: {
    primary: 'blue', // TypeScript will suggest valid options
  },
  components: {
    button: {
      // Full autocomplete for slots, variants, etc.
    }
  }
}
```

## Best Practices

### 1. **Keep Themes Organized**

```
project/
├── themes/
│   ├── default.js
│   ├── dark.js
│   └── custom.js
├── cartino-ui.config.js (imports from themes/)
└── src/
```

### 2. **Use Semantic Colors**

```typescript
// Good
colors: {
  primary: 'blue',
  danger: 'red'
}

// Avoid
colors: {
  blue500: 'blue',
  redAlert: 'red'
}
```

### 3. **Leverage Presets**

Start with a preset and customize:

```typescript
import { modernPreset } from '@cartino/ui'

export default defineTheme({
  ...modernPreset,
  // Only override what you need
  colors: {
    ...modernPreset.colors,
    primary: 'indigo'
  }
})
```

### 4. **Document Custom Variants**

```typescript
export default defineTheme({
  components: {
    button: {
      variants: {
        color: {
          // Custom brand color - matches company branding
          brand: 'bg-[#FF6B6B] text-white hover:bg-[#FF5252]'
        }
      }
    }
  }
})
```

## Migration from Hard-coded Themes

If you're migrating from hard-coded `appConfig`:

### Before

```vue
<script setup>
const appConfig = {
  ui: {
    button: {
      variants: {
        color: {
          custom: 'bg-custom'
        }
      }
    }
  }
}
</script>
```

### After

```typescript
// cartino-ui.config.js
export default defineTheme({
  components: {
    button: {
      variants: {
        color: {
          custom: 'bg-custom'
        }
      }
    }
  }
})
```

## Troubleshooting

### Theme Not Applied

1. Ensure `ThemeProvider` wraps your app
2. Check that theme config is imported correctly
3. Verify component names match (use camelCase)

### Styles Not Working

1. Make sure Tailwind classes are in your safelist
2. Check for conflicting class names
3. Use `!important` prefix if needed: `!bg-blue-500`

### TypeScript Errors

1. Update `@cartino/ui` to latest version
2. Ensure proper type imports
3. Check that theme structure matches `ThemeConfig` interface

## Examples

See the `/examples` directory for complete working examples:

- Basic theme customization
- Multi-theme application
- Dark mode implementation
- Custom component library
- Dynamic theme switching

## API Reference

### Functions

- `defineTheme(config)` - Define a theme configuration
- `useTheme(componentName)` - Access theme for a specific component
- `useThemeConfig()` - Access global theme configuration
- `mergeTheme(base, user)` - Merge user theme with base theme
- `getPreset(name)` - Get a preset by name
- `listPresets()` - List all available presets

### Components

- `<ThemeProvider>` - Provides theme to all child components

### Types

- `ThemeConfig` - Complete theme configuration interface
- `ComponentTheme` - Component-level theme override
- `IconConfig` - Icon configuration
- `ColorMapping` - Color mapping configuration
- `ThemePreset` - Theme preset with metadata

## Support

Need help? Check out:

- [GitHub Issues](https://github.com/cartino/ui/issues)
- [Discord Community](#)
- [Documentation](#)
