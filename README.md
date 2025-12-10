# @cartino/ui

Una libreria di componenti UI costruita con Vue 3, Tailwind CSS e Reka UI.

## Installazione

```bash
pnpm add @cartino/ui
```

## Setup

### Opzione 1: Installazione globale (consigliata)

Nella tua applicazione Vue, importa gli stili e registra i componenti globalmente:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { install } from '@cartino/ui'
import '@cartino/ui/style.css'

const app = createApp(App)
app.use({ install })
app.mount('#app')
```

### Opzione 2: Import dei singoli componenti

Puoi anche importare i componenti individualmente:

```vue
<script setup lang="ts">
import { Button, Dialog } from '@cartino/ui'
import '@cartino/ui/style.css'
</script>

<template>
  <Button variant="primary">Click me</Button>

  <Dialog v-model:open="isOpen">
    <template #trigger>
      <Button>Open Dialog</Button>
    </template>
    <template #title>Dialog Title</template>
    Content here
  </Dialog>
</template>
```

## Componenti Disponibili

### Button

Un componente bottone versatile con diverse varianti e dimensioni.

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `disabled`: `boolean` (default: `false`)
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)

**Esempio:**
```vue
<Button variant="primary" size="lg">Click me</Button>
```

### Dialog

Un componente dialog/modal costruito su Reka UI.

**Props:**
- `open`: `boolean` (v-model supportato)
- `defaultOpen`: `boolean`

**Slots:**
- `trigger`: Il contenuto che attiva il dialog
- `title`: Il titolo del dialog
- `description`: La descrizione del dialog
- default: Il contenuto principale

**Esempio:**
```vue
<Dialog v-model:open="isOpen">
  <template #trigger>
    <Button>Open</Button>
  </template>
  <template #title>My Dialog</template>
  <template #description>Dialog description</template>
  Dialog content
</Dialog>
```

## Sviluppo

```bash
# Installa le dipendenze
pnpm install

# Avvia Storybook (preview e documentazione)
pnpm dev

# Build della libreria
pnpm build

# Build di Storybook per deployment
pnpm build-storybook
```

## Struttura del progetto

```
src/
  ├── components/          # Componenti UI
  │   ├── Button.vue
  │   ├── Button.stories.ts
  │   ├── Dialog.vue
  │   └── Dialog.stories.ts
  ├── stories/             # Documentazione Storybook
  ├── index.ts             # Entry point della libreria
  └── style.css            # Stili Tailwind CSS v4
```

## Tecnologie

- **Vue 3** - Framework JavaScript progressivo
- **Vite** - Build tool ultra-veloce
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework (CSS-based config)
- **Reka UI** - Headless UI components accessibili
- **Storybook** - Preview e documentazione componenti

## License

MIT
