import type { Meta, StoryObj } from '@storybook/vue3'
import UDropdownMenu from '../../../../src/runtime/components/DropdownMenu.vue'
import UButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Overlay/DropdownMenu',
  component: UiDropdownMenu,
  tags: ['autodocs']
} satisfies Meta<typeof UiDropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  [
    { label: 'Edit', icon: 'i-heroicons-pencil-square' },
    { label: 'Duplicate', icon: 'i-heroicons-document-duplicate' },
    { label: 'Archive', icon: 'i-heroicons-archive-box' }
  ],
  [
    { label: 'Delete', icon: 'i-heroicons-trash', color: 'danger' }
  ]
]

export const Default: Story = {
  args: {
    items
  },
  render: (args) => ({
    components: { UiDropdownMenu, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-dropdown-menu v-bind="args">
        <ui-button label="Options" trailingIcon="i-heroicons-chevron-down" />
      </ui-dropdown-menu>
    `
  })
}

export const WithIcons: Story = {
  args: {
    items: [
      [
        { label: 'Profile', icon: 'i-heroicons-user' },
        { label: 'Settings', icon: 'i-heroicons-cog-6-tooth' },
        { label: 'Billing', icon: 'i-heroicons-credit-card' }
      ],
      [
        { label: 'Sign out', icon: 'i-heroicons-arrow-right-on-rectangle' }
      ]
    ]
  },
  render: (args) => ({
    components: { UiDropdownMenu, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-dropdown-menu v-bind="args">
        <ui-button icon="i-heroicons-user-circle" variant="ghost" />
      </ui-dropdown-menu>
    `
  })
}

export const WithShortcuts: Story = {
  args: {
    items: [
      [
        { label: 'New File', icon: 'i-heroicons-document-plus', shortcuts: ['⌘', 'N'] },
        { label: 'New Folder', icon: 'i-heroicons-folder-plus', shortcuts: ['⌘', 'Shift', 'N'] }
      ],
      [
        { label: 'Save', icon: 'i-heroicons-document-arrow-down', shortcuts: ['⌘', 'S'] },
        { label: 'Save As...', icon: 'i-heroicons-document-arrow-down', shortcuts: ['⌘', 'Shift', 'S'] }
      ]
    ]
  },
  render: (args) => ({
    components: { UiDropdownMenu, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-dropdown-menu v-bind="args">
        <ui-button label="File" trailingIcon="i-heroicons-chevron-down" variant="ghost" />
      </ui-dropdown-menu>
    `
  })
}

export const WithDisabled: Story = {
  args: {
    items: [
      [
        { label: 'Edit', icon: 'i-heroicons-pencil-square' },
        { label: 'Duplicate', icon: 'i-heroicons-document-duplicate', disabled: true },
        { label: 'Archive', icon: 'i-heroicons-archive-box' }
      ]
    ]
  },
  render: (args) => ({
    components: { UiDropdownMenu, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-dropdown-menu v-bind="args">
        <ui-button label="Actions" />
      </ui-dropdown-menu>
    `
  })
}

export const Nested: Story = {
  args: {
    items: [
      [
        { label: 'New', icon: 'i-heroicons-document-plus' },
        { label: 'Open', icon: 'i-heroicons-folder-open' }
      ],
      [
        {
          label: 'Export',
          icon: 'i-heroicons-arrow-down-tray',
          children: [
            [
              { label: 'PDF', icon: 'i-heroicons-document' },
              { label: 'CSV', icon: 'i-heroicons-table-cells' },
              { label: 'JSON', icon: 'i-heroicons-code-bracket' }
            ]
          ]
        }
      ]
    ]
  },
  render: (args) => ({
    components: { UiDropdownMenu, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-dropdown-menu v-bind="args">
        <ui-button label="File" />
      </ui-dropdown-menu>
    `
  })
}
