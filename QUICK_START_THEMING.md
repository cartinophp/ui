# Quick Start: Theme Customization

Fast track to customizing CartinoPHP UI themes.

## 1. Install

```bash
npm install @cartino/ui
```

## 2. Create Theme Config

Create `cartino-ui.config.ts` in your project root:

```typescript
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

## 3. Wrap Your App

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

## 4. Use Components

```vue
<template>
  <ui-button color="brand">Gradient Button</ui-button>
  <ui-input placeholder="Search..." />
  <ui-card>
    <template #header>Card Title</template>
    Card content
  </ui-card>
</template>
```

## Use a Preset

```typescript
import { defineTheme, modernPreset } from '@cartino/ui'

// Use as-is
export default defineTheme(modernPreset)

// Or extend it
export default defineTheme({
  ...modernPreset,
  colors: {
    ...modernPreset.colors,
    primary: 'indigo' // Override
  }
})
```

## Common Customizations

### Add Custom Color

```typescript
export default defineTheme({
  colors: {
    brand: 'violet'
  },
  components: {
    button: {
      variants: {
        color: {
          brand: 'bg-violet-500 text-white hover:bg-violet-600'
        }
      }
    }
  }
})
```

### Change Default Variant

```typescript
export default defineTheme({
  components: {
    button: {
      defaultVariants: {
        variant: 'soft', // Instead of 'solid'
        size: 'lg' // Instead of 'md'
      }
    }
  }
})
```

### Add Custom Size

```typescript
export default defineTheme({
  components: {
    button: {
      variants: {
        size: {
          xxl: {
            base: 'px-8 py-4 text-2xl gap-3',
            leadingIcon: 'size-8',
            trailingIcon: 'size-8'
          }
        }
      }
    }
  }
})
```

### Customize Icons

```typescript
export default defineTheme({
  icons: {
    loading: 'i-fa-spinner',
    check: 'i-fa-check',
    close: 'i-fa-times'
  }
})
```

### Dark Mode Theme

```typescript
export default defineTheme({
  components: {
    button: {
      slots: {
        base: ['dark:bg-zinc-800', 'dark:text-zinc-100']
      }
    },
    card: {
      slots: {
        base: ['dark:bg-zinc-900', 'dark:border-zinc-800']
      }
    }
  }
})
```

## Runtime Theme Switching

```vue
<script setup>
import { ref } from 'vue'
import { ThemeProvider, defaultPreset, modernPreset } from '@cartino/ui'

const currentTheme = ref(defaultPreset)

function switchToModern() {
  currentTheme.value = modernPreset
}
</script>

<template>
  <ThemeProvider :theme="currentTheme">
    <button @click="switchToModern">Switch Theme</button>
    <YourApp />
  </ThemeProvider>
</template>
```

## Per-Component Override

```vue
<template>
  <!-- Method 1: Via ui prop -->
  <ui-button :ui="{ base: 'custom-class', label: 'font-bold' }">
    Custom Button
  </ui-button>

  <!-- Method 2: Via class -->
  <ui-button class="custom-button-class">
    Custom Button
  </ui-button>
</template>
```

## Available Presets

```typescript
import {
  defaultPreset, // Balanced, modern
  minimalPreset, // Clean, subtle
  modernPreset   // Vibrant, animated
} from '@cartino/ui'
```

## Component API

All components support:
- `color` - Color variant
- `variant` - Style variant (solid, outline, soft, etc.)
- `size` - Size variant (xs, sm, md, lg, xl)
- `ui` - Per-instance style override

## Next Steps

- Read [THEME_CUSTOMIZATION.md](./THEME_CUSTOMIZATION.md) for complete guide
- Check [examples/](./examples/) for working examples
- Copy [cartino-ui.config.example.ts](./cartino-ui.config.example.ts) as template

## Need Help?

- [Full Documentation](./THEME_CUSTOMIZATION.md)
- [GitHub Issues](https://github.com/cartino/ui/issues)
- [Examples](./examples/)
