# Composables Guide

Complete reference for CartinoPHP UI composables, inspired by Nuxt UI patterns.

## Theme Composables

### `useTheme(componentName)`

Access component-specific theme configuration.

```vue
<script setup>
import { useTheme } from '@cartino/ui'

const { theme, colors, icons, prefix, transitions } = useTheme('button')

console.log(theme.value) // Component theme overrides
console.log(colors.value.primary) // 'blue'
console.log(icons.value.loading) // 'i-heroicons-arrow-path'
</script>
```

**Returns:**
- `theme` - Component-specific theme overrides
- `colors` - Global color configuration
- `icons` - Global icon configuration
- `prefix` - Component prefix (e.g., 'ui-')
- `transitions` - Whether transitions are enabled

---

### `useThemeConfig()`

Access the global theme configuration.

```vue
<script setup>
import { useThemeConfig } from '@cartino/ui'

const themeConfig = useThemeConfig()

console.log(themeConfig.colors) // Color mapping
console.log(themeConfig.components.button) // Button theme
</script>
```

**Returns:** `ThemeConfig` - Complete theme configuration

---

### `useAppConfig()`

Access the global application configuration (Nuxt-style).

```vue
<script setup>
import { useAppConfig } from '@cartino/ui'

const appConfig = useAppConfig()

console.log(appConfig.ui.colors.primary) // 'blue'
console.log(appConfig.icons.loading) // 'i-heroicons-arrow-path'
</script>
```

**Returns:** `AppConfig` - Application configuration

---

### `useUIConfig()`

Shorthand for `useAppConfig().ui`

```vue
<script setup>
import { useUIConfig } from '@cartino/ui'

const ui = useUIConfig()

console.log(ui.colors.primary) // 'blue'
console.log(ui.components.button) // Button theme
</script>
```

---

### `useColors()`

Access global color configuration.

```vue
<script setup>
import { useColors } from '@cartino/ui'

const colors = useColors()

console.log(colors.primary) // 'blue'
console.log(colors.success) // 'green'
</script>
```

---

### `useIcons()`

Access global icon configuration.

```vue
<script setup>
import { useIcons } from '@cartino/ui'

const icons = useIcons()

console.log(icons.loading) // 'i-heroicons-arrow-path'
console.log(icons.check) // 'i-heroicons-check'
</script>
```

---

## Component Composables

### `useUI(options)`

**The main composable for components** - handles theme merging and variant application.

```vue
<script setup lang="ts">
import { useUI } from '@cartino/ui'
import baseTheme from '../../theme/button'

interface ButtonProps {
  color?: string
  variant?: string
  size?: string
  ui?: Record<string, any>
  class?: any
}

const props = defineProps<ButtonProps>()

const ui = useUI({
  component: 'button',
  theme: baseTheme,
  props,
  variants: {
    color: props.color,
    variant: props.variant,
    size: props.size
  }
})
</script>

<template>
  <button :class="ui.base({ class: props.class })">
    <slot />
  </button>
</template>
```

**Options:**
- `component` - Component name for theme lookup
- `theme` - Base theme configuration
- `props` - Component props (for `ui` and `class` overrides)
- `variants` - Variants to apply

**Returns:** Computed reactive UI object with slot methods

---

### `useUISlots(component, theme, props)`

Simplified version without variants.

```vue
<script setup>
import { useUISlots } from '@cartino/ui'
import cardTheme from '../../theme/card'

const props = defineProps<{ ui?: any }>()

const ui = useUISlots('card', cardTheme, props)
</script>

<template>
  <div :class="ui.base()">
    <header :class="ui.header()">
      <slot name="header" />
    </header>
    <div :class="ui.body()">
      <slot />
    </div>
  </div>
</template>
```

---

## Utility Composables

### `useOverlay()`

Manage overlay/modal states (già esistente).

```vue
<script setup>
import { useOverlay } from '@cartino/ui'

const { isOpen, open, close, toggle } = useOverlay()
</script>

<template>
  <ui-button @click="open">Open Modal</ui-button>

  <ui-modal v-model="isOpen">
    Modal content
  </ui-modal>
</template>
```

---

### `useToast()`

Display toast notifications (già esistente).

```vue
<script setup>
import { useToast } from '@cartino/ui'

const toast = useToast()

function showSuccess() {
  toast.add({
    title: 'Success!',
    description: 'Operation completed',
    color: 'success'
  })
}
</script>
```

---

### `mergeUIClasses(...classes)`

Merge multiple class arrays/strings.

```vue
<script setup>
import { mergeUIClasses } from '@cartino/ui'

const classes = mergeUIClasses(
  'base-class',
  props.class,
  ui.value.base
)
</script>
```

---

### `getSlotClass(ui, slot, additionalClasses)`

Extract classes for a specific slot.

```vue
<script setup>
import { getSlotClass } from '@cartino/ui'

const headerClass = getSlotClass(ui, 'header', props.class)
</script>
```

---

## Example: Complete Component

Here's a complete example of a component using the new composables:

```vue
<script lang="ts">
import type { ComponentConfig, AppConfig } from '../types/tv'
import theme from '../../theme/button'

type Button = ComponentConfig<typeof theme, AppConfig, 'button'>

export interface ButtonProps {
  label?: string
  color?: Button['variants']['color']
  variant?: Button['variants']['variant']
  size?: Button['variants']['size']
  disabled?: boolean
  loading?: boolean
  class?: any
  ui?: Button['slots']
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useUI } from '../composables/useUI'
import { useIcons } from '../composables/useAppConfig'

const props = defineProps<ButtonProps>()
const icons = useIcons()

const ui = useUI({
  component: 'button',
  theme,
  props,
  variants: {
    color: props.color,
    variant: props.variant,
    size: props.size,
    loading: props.loading,
    disabled: props.disabled
  }
})

const loadingIcon = computed(() => props.loadingIcon || icons.loading)
</script>

<template>
  <button
    :disabled="disabled || loading"
    :class="ui.base({ class: props.class })"
  >
    <i
      v-if="loading"
      :class="[loadingIcon, ui.loadingIcon()]"
    />
    <span :class="ui.label()">
      {{ label }}
    </span>
  </button>
</template>
```

---

## Migration Guide

### From Hard-coded AppConfig

**Before:**
```vue
<script setup>
const appConfig = {} as AppConfig
const ui = computed(() => tv({
  extend: tv(theme),
  ...(appConfig.ui?.button || {})
})({
  color: props.color,
  variant: props.variant
}))
</script>
```

**After:**
```vue
<script setup>
import { useUI } from '@cartino/ui'

const ui = useUI({
  component: 'button',
  theme,
  props,
  variants: {
    color: props.color,
    variant: props.variant
  }
})
</script>
```

---

## Best Practices

### 1. Use `useUI` for Components with Variants

```vue
// ✅ Good
const ui = useUI({
  component: 'button',
  theme,
  props,
  variants: { color, variant, size }
})
```

### 2. Use `useUISlots` for Simple Components

```vue
// ✅ Good for components without variants
const ui = useUISlots('card', cardTheme, props)
```

### 3. Access Icons/Colors Globally

```vue
// ✅ Good
const icons = useIcons()
const colors = useColors()

// ❌ Avoid hard-coding
const loadingIcon = 'i-heroicons-arrow-path'
```

### 4. Leverage TypeScript

```typescript
// ✅ Good - Full type safety
import type { ComponentConfig } from '../types/tv'
import theme from '../../theme/button'

type Button = ComponentConfig<typeof theme, AppConfig, 'button'>

interface ButtonProps {
  color?: Button['variants']['color']
}
```

---

## API Reference

| Composable | Purpose | Returns |
|------------|---------|---------|
| `useTheme(component)` | Component theme | `{ theme, colors, icons, prefix, transitions }` |
| `useThemeConfig()` | Global theme | `ThemeConfig` |
| `useAppConfig()` | App config | `AppConfig` |
| `useUIConfig()` | UI config | `ThemeConfig` |
| `useColors()` | Colors | `ColorMapping` |
| `useIcons()` | Icons | `IconConfig` |
| `useUI(options)` | Component UI | `ComputedRef<UI>` |
| `useUISlots(...)` | Simple UI | `ComputedRef<UI>` |
| `useOverlay()` | Overlay state | `{ isOpen, open, close, toggle }` |
| `useToast()` | Toast notifications | `ToastInterface` |

---

## Next Steps

- See [THEME_CUSTOMIZATION.md](./THEME_CUSTOMIZATION.md) for theme configuration
- Check [examples/](./examples/) for complete examples
- Review existing components for usage patterns
