# Component Naming Convention

## Overview

All CartinoPHP UI components now use the **lowercase kebab-case naming convention** with the `ui-` prefix instead of the previous PascalCase `U` prefix.

## Changes Made

### Before
```vue
<template>
  <UButton label="Click me" />
  <UInput placeholder="Enter text" />
  <UCard>Content</UCard>
</template>

<script setup>
import { UButton, UInput, UCard } from '@cartino/ui'
</script>
```

### After
```vue
<template>
  <ui-button label="Click me" />
  <ui-input placeholder="Enter text" />
  <ui-card>Content</ui-card>
</template>

<script setup>
import { UiButton, UiInput, UiCard } from '@cartino/ui'
</script>
```

## Technical Implementation

### 1. Default Prefix Changed
- **File**: `src/utils/defaults.ts`
- **Change**: Default prefix changed from `'U'` to `'ui-'`
- Vue automatically converts PascalCase component names to kebab-case in templates

### 2. Export Names Updated
- **File**: `src/index.ts`
- **Change**: All exports renamed from `U*` to `Ui*`
- Examples:
  - `UButton` → `UiButton` (used as `<ui-button>`)
  - `UInput` → `UiInput` (used as `<ui-input>`)
  - `UCard` → `UiCard` (used as `<ui-card>`)

### 3. Storybook Configuration
- **File**: `storybook/.storybook/preview.ts`
- **Change**: Added global component registration for Storybook
- All `Ui*` components are automatically registered and available in stories

## Component Naming Reference

| Import Name | Template Usage | Description |
|-------------|----------------|-------------|
| `UiButton` | `<ui-button>` | Button component |
| `UiInput` | `<ui-input>` | Input field |
| `UiCard` | `<ui-card>` | Card container |
| `UiAlert` | `<ui-alert>` | Alert message |
| `UiBadge` | `<ui-badge>` | Badge/label |
| `UiModal` | `<ui-modal>` | Modal dialog |
| `UiTable` | `<ui-table>` | Data table |
| `UiTabs` | `<ui-tabs>` | Tab navigation |
| ... | ... | (and 100+ more) |

## Usage in Different Frameworks

### Vue 3 SFC (Single File Components)
```vue
<script setup lang="ts">
import { UiButton, UiInput } from '@cartino/ui'
</script>

<template>
  <ui-button label="Submit" />
  <ui-input v-model="text" />
</template>
```

### Vue 3 with Auto-Import
If you're using the unplugin auto-import feature:
```vue
<template>
  <!-- Components are automatically available -->
  <ui-button label="Submit" />
  <ui-input v-model="text" />
</template>
```

### TypeScript
```typescript
import type { ButtonProps } from '@cartino/ui'
import { UiButton } from '@cartino/ui'

const props: ButtonProps = {
  label: 'Click me',
  color: 'primary',
  variant: 'solid'
}
```

## Storybook Integration

Storybook is configured to work seamlessly with the new naming convention:

- **Location**: `storybook/src/stories/`
- **Access**: Run `npm run storybook` in the storybook directory
- **URL**: http://localhost:6006/

### Story Categories
- **Forms**: Button, Input, Select, Checkbox, Switch, etc.
- **DataDisplay**: Card, Badge, Avatar, Table, Timeline, etc.
- **Feedback**: Alert, Toast, Modal, Progress, Skeleton, etc.
- **Navigation**: Link, Tabs, Breadcrumb, Pagination, etc.
- **Layout**: Container, Accordion, Carousel, Collapsible, etc.
- **Overlay**: Modal, Drawer, Popover, Tooltip, Slideover, etc.
- **Content**: BlogPost, Banner, PricingPlan, etc.
- **Page**: PageHero, PageFeature, PageCard, PageSection, etc.

## Migration Guide

If you have existing code using the old `U*` naming:

### Step 1: Update Imports
```diff
- import { UButton, UInput } from '@cartino/ui'
+ import { UiButton, UiInput } from '@cartino/ui'
```

### Step 2: Update Template Usage
No changes needed! Vue handles both:
```vue
<!-- Both work -->
<UiButton label="Test" />
<ui-button label="Test" />
```

However, for consistency, we recommend using kebab-case:
```vue
<!-- Recommended -->
<ui-button label="Test" />
```

### Step 3: Update Type References
```diff
- import type { ButtonProps } from '@cartino/ui'
+ import type { ButtonProps } from '@cartino/ui'
// Type names don't change, only component names
```

## Benefits of New Naming

1. **Standards Compliance**: Follows W3C custom element naming conventions
2. **Framework Agnostic**: Lowercase names work better across different frameworks
3. **Clarity**: Clear distinction between native HTML and custom components
4. **Consistency**: Matches common UI library conventions (Material UI, Vuetify, etc.)
5. **Better DX**: Autocomplete works better with kebab-case in templates

## Component Count

- **Total Components**: 112
- **Storybook Stories**: 60+
- **Categories**: 8 main categories

## Running Storybook

To view all components with the new naming:

```bash
cd storybook
npm install
npm run storybook
```

Then open http://localhost:6006/ in your browser.

## Additional Resources

- [Storybook Documentation](./storybook/README.md)
- [Component API Reference](./docs/components/)
- [Theme Customization](./docs/theming.md)
