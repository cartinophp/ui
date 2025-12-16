# Component Usage Guide

## Table Component

The Table component expects columns with `accessorKey` and `header` properties:

```vue
<Table
  :data="tableData"
  :columns="[
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'email', header: 'Email' }
  ]"
/>
```

## Dropdown Component

The Dropdown component can be used with the `items` prop:

```vue
<Dropdown
  :items="[
    { type: 'item', label: 'Option 1', icon: 'i-heroicons-home' },
    { type: 'item', label: 'Option 2', icon: 'i-heroicons-user' },
    { type: 'separator' },
    { type: 'item', label: 'Option 3', icon: 'i-heroicons-cog' }
  ]"
>
  <template #trigger>
    <Button>Open Dropdown</Button>
  </template>
</Dropdown>
```

Or with slot content for custom items:

```vue
<Dropdown>
  <template #trigger>
    <Button>Custom Dropdown</Button>
  </template>
  
  <!-- Use default slot for custom content -->
  <DropdownMenuItem>Custom Item 1</DropdownMenuItem>
  <DropdownMenuItem>Custom Item 2</DropdownMenuItem>
</Dropdown>
```

## Popover Component

The Popover component uses trigger slot and default slot for content:

```vue
<Popover>
  <template #trigger>
    <Button>Open Popover</Button>
  </template>
  
  <div class="p-4 space-y-2">
    <h3 class="font-semibold">Popover Title</h3>
    <p class="text-sm text-gray-600">Popover content goes here</p>
  </div>
</Popover>
```

## DataTable Component

The DataTable component requires columns with an `id` property for sortable tables:

```vue
<DataTable
  :data="data"
  :columns="[
    { id: 'id', key: 'id', label: 'ID', sortable: true },
    { id: 'name', key: 'name', label: 'Name', sortable: true },
    { id: 'price', key: 'price', label: 'Price', sortable: true }
  ]"
/>
```

## Common Patterns

### Modal/Dialog Components

All overlay components (Dialog, Modal, Drawer, Sheet) use `v-model:open`:

```vue
<script setup>
const isOpen = ref(false)
</script>

<template>
  <Button @click="isOpen = true">Open Dialog</Button>

  <Dialog v-model:open="isOpen">
    <template #title>Dialog Title</template>
    <template #description>Dialog description</template>
    <div class="p-4">Content</div>
    <template #footer>
      <Button @click="isOpen = false">Close</Button>
    </template>
  </Dialog>
</template>
```

### Form Components

Form components use `v-model` for two-way binding:

```vue
<script setup>
const inputValue = ref('')
const checkboxValue = ref(false)
const selectValue = ref('')
</script>

<template>
  <Input v-model="inputValue" label="Name" />
  <Checkbox v-model="checkboxValue" label="Agree" />
  <Select
    v-model="selectValue"
    :options="[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]"
  />
</template>
```

### Icon Names

Icons use the Iconify format with `i-` prefix:

```vue
<Icon name="i-heroicons-home" />
<Icon name="i-heroicons-user" />
<Icon name="i-heroicons-cog-6-tooth" />
```

Browse icons at: https://icones.js.org/

## Troubleshooting

### Tooltips Not Working

Make sure to wrap your app with `TooltipProvider` from `reka-ui`:

```vue
<script setup>
import { TooltipProvider } from 'reka-ui'
</script>

<template>
  <TooltipProvider>
    <YourApp />
  </TooltipProvider>
</template>
```

### Popover/Dropdown Not Showing

These components use `teleport` to render in a portal. Make sure you have:

1. Imported the component correctly
2. The trigger slot is provided
3. Content is in the default slot (not a named `content` slot)

### Table Showing Empty

Check that:

1. Columns use `accessorKey` not `key`
2. Columns use `header` not `label`
3. Data array is properly structured with matching keys
