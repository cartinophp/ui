# Theming System Analysis & Bottlenecks

## Current State Analysis

### 1. **Critical Bottlenecks Identified**

#### A. Hard-coded AppConfig
```typescript
// In every component
const appConfig = {} as AppConfig
```
**Problem**: `appConfig` is hard-coded as an empty object, making runtime theme customization impossible.

#### B. No External Theme System
- Theme definitions are inside `/src/theme/` directory
- No way to override themes from external files
- Users cannot create custom themes without modifying source code

#### C. Limited Configuration
```typescript
// src/config.js
export interface CartinoUIConfig {
  transitions?: boolean
  colors?: string[]  // Only color names, no actual theme override
}
```
**Problem**: Config system is too basic - doesn't support component-level customization

#### D. Theme Import Coupling
```typescript
// In components
import theme from '../../theme/button.js'
```
**Problem**: Direct imports make it impossible to swap themes at runtime

#### E. No Theme Provider/Injection
- No Vue provide/inject pattern for themes
- Each component recreates theme logic
- Cannot change theme dynamically

### 2. **Comparison with Nuxt UI**

Nuxt UI's approach that we should adopt:

```typescript
// nuxt.config.js or app.config.js
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        color: {
          custom: 'bg-custom text-white'
        }
      },
      defaultVariants: {
        color: 'custom'
      }
    }
  }
})
```

### 3. **Required Features for Proper Theming**

#### Must Have:
1. ✗ External theme file support
2. ✗ Runtime theme switching
3. ✗ Component-level theme overrides
4. ✗ Global theme configuration
5. ✗ Theme composition/merging
6. ✓ Tailwind Variants (already using)
7. ✗ Theme provider system

#### Nice to Have:
8. ✗ Multiple theme presets
9. ✗ Theme inheritance
10. ✗ CSS variable generation
11. ✗ Dark mode theme variants
12. ✗ TypeScript autocompletion for themes

## Proposed Solution Architecture

### 1. **Theme Configuration Structure**

```typescript
// cartino-ui.config.js (user file)
import { defineTheme } from '@cartino/ui'

export default defineTheme({
  // Global settings
  prefix: 'ui-',
  transitions: true,

  // Colors mapping
  colors: {
    primary: 'blue',
    secondary: 'purple',
    success: 'green',
    warning: 'yellow',
    error: 'red',
    neutral: 'slate'
  },

  // Component overrides
  components: {
    button: {
      slots: {
        base: ['custom-base-class']
      },
      variants: {
        color: {
          brand: 'bg-gradient-to-r from-blue-500 to-purple-500'
        },
        size: {
          xxl: {
            base: 'px-8 py-4 text-2xl'
          }
        }
      },
      defaultVariants: {
        color: 'brand',
        variant: 'solid',
        size: 'md'
      }
    },
    input: {
      // Override input theme
    }
    // ... other components
  },

  // Icons configuration
  icons: {
    loading: 'i-heroicons-arrow-path',
    check: 'i-heroicons-check',
    close: 'i-heroicons-x-mark'
  }
})
```

### 2. **Theme Provider System**

```typescript
// Composable: useTheme()
export function useTheme(componentName: string) {
  const themeConfig = inject(THEME_CONFIG_KEY)
  return {
    theme: computed(() => themeConfig.value.components[componentName]),
    colors: computed(() => themeConfig.value.colors),
    icons: computed(() => themeConfig.value.icons)
  }
}
```

### 3. **Component Integration Pattern**

```vue
<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import baseTheme from '../../theme/button'

const { theme: userTheme, icons } = useTheme('button')

// Merge base theme with user overrides
const ui = computed(() => tv({
  extend: tv(baseTheme),
  ...userTheme.value
})({
  // props
}))
</script>
```

## Implementation Plan

### Phase 1: Core Theme System
1. Create theme provider composable
2. Add theme injection system
3. Update config.js to support full theme config

### Phase 2: Component Integration
1. Update all components to use theme provider
2. Remove hard-coded appConfig
3. Add proper theme merging

### Phase 3: External Configuration
1. Create theme file loader
2. Support external theme imports
3. Add theme validation

### Phase 4: Advanced Features
1. Runtime theme switching
2. Multiple theme presets
3. Theme builder utilities
4. CSS variable generation

## Breaking Changes to Consider

### Migration Path:
1. Keep backward compatibility with empty appConfig
2. Deprecation warnings for direct theme imports
3. Provide migration guide
4. Codemod for automated migration

## File Structure

```
@cartino/ui/
├── src/
│   ├── config.js (enhanced)
│   ├── theme/ (base themes)
│   │   ├── index.js
│   │   ├── button.js
│   │   └── ...
│   ├── runtime/
│   │   ├── composables/
│   │   │   ├── useTheme.js (new)
│   │   │   └── useThemeConfig.js (new)
│   │   └── providers/
│   │       └── ThemeProvider.vue (new)
│   └── presets/ (new)
│       ├── default.js
│       ├── minimal.js
│       └── modern.js
└── cartino-ui.config.js (user's config file)
```

## Performance Considerations

### Optimizations:
1. **Memoization**: Cache merged themes
2. **Lazy Loading**: Load themes on demand
3. **Tree Shaking**: Only include used components
4. **Static Extraction**: Pre-compile themes at build time

### Benchmarks Needed:
- Theme merge performance
- Memory usage with multiple themes
- Runtime switching overhead

## Next Steps

1. Create proof of concept with Button component
2. Implement theme provider system
3. Test with Storybook integration
4. Document migration path
5. Roll out to all components
