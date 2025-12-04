import type { Meta, StoryObj } from '@storybook/vue3'
import UiContextMenu from '../../../../src/runtime/components/ContextMenu.vue'

const meta = {
  title: 'Components/Overlay/ContextMenu',
  component: UiContextMenu,
  tags: ['autodocs']
} satisfies Meta<typeof UiContextMenu>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  [
    { label: 'Open', icon: 'i-heroicons-folder-open' },
    { label: 'Rename', icon: 'i-heroicons-pencil-square' }
  ],
  [
    { label: 'Copy', icon: 'i-heroicons-document-duplicate', shortcuts: ['⌘', 'C'] },
    { label: 'Cut', icon: 'i-heroicons-scissors', shortcuts: ['⌘', 'X'] },
    { label: 'Paste', icon: 'i-heroicons-clipboard', shortcuts: ['⌘', 'V'] }
  ],
  [
    { label: 'Delete', icon: 'i-heroicons-trash', color: 'danger', shortcuts: ['⌫'] }
  ]
]

export const Default: Story = {
  args: {
    items
  },
  render: (args) => ({
    components: { UiContextMenu },
    setup() {
      return { args }
    },
    template: `
      <ui-context-menu v-bind="args">
        <div class="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
          <p class="text-gray-600">Right-click here to open context menu</p>
        </div>
      </ui-context-menu>
    `
  })
}

export const OnText: Story = {
  args: {
    items: [
      [
        { label: 'Copy', icon: 'i-heroicons-document-duplicate', shortcuts: ['⌘', 'C'] },
        { label: 'Cut', icon: 'i-heroicons-scissors', shortcuts: ['⌘', 'X'] },
        { label: 'Paste', icon: 'i-heroicons-clipboard', shortcuts: ['⌘', 'V'] }
      ],
      [
        { label: 'Select All', icon: 'i-heroicons-squares-2x2', shortcuts: ['⌘', 'A'] }
      ]
    ]
  },
  render: (args) => ({
    components: { UiContextMenu },
    setup() {
      return { args }
    },
    template: `
      <ui-context-menu v-bind="args">
        <div class="p-8 border rounded-lg">
          <p class="text-gray-700">
            This is some text content. Right-click on this text to see the context menu
            with text-specific options like copy, cut, and paste.
          </p>
        </div>
      </ui-context-menu>
    `
  })
}

export const OnImage: Story = {
  args: {
    items: [
      [
        { label: 'View Image', icon: 'i-heroicons-eye' },
        { label: 'Download', icon: 'i-heroicons-arrow-down-tray' }
      ],
      [
        { label: 'Copy Image', icon: 'i-heroicons-document-duplicate' },
        { label: 'Copy Link', icon: 'i-heroicons-link' }
      ],
      [
        { label: 'Set as Wallpaper', icon: 'i-heroicons-photo' }
      ]
    ]
  },
  render: (args) => ({
    components: { UiContextMenu },
    setup() {
      return { args }
    },
    template: `
      <ui-context-menu v-bind="args">
        <div class="inline-block border rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400"
            alt="Sample"
            class="w-64 h-48 object-cover"
          />
        </div>
      </ui-context-menu>
    `
  })
}

export const FileManager: Story = {
  args: {
    items: [
      [
        { label: 'New Folder', icon: 'i-heroicons-folder-plus' },
        { label: 'New File', icon: 'i-heroicons-document-plus' }
      ],
      [
        { label: 'Upload', icon: 'i-heroicons-arrow-up-tray' },
        { label: 'Download', icon: 'i-heroicons-arrow-down-tray' }
      ],
      [
        { label: 'Properties', icon: 'i-heroicons-information-circle' }
      ]
    ]
  },
  render: (args) => ({
    components: { UiContextMenu },
    setup() {
      return { args }
    },
    template: `
      <ui-context-menu v-bind="args">
        <div class="p-8 bg-gray-50 rounded-lg border-2 border-dashed min-h-[300px]">
          <p class="text-gray-600 text-center">File Manager Area</p>
          <p class="text-sm text-gray-500 text-center mt-2">Right-click for options</p>
        </div>
      </ui-context-menu>
    `
  })
}

export const WithDisabled: Story = {
  args: {
    items: [
      [
        { label: 'Edit', icon: 'i-heroicons-pencil-square' },
        { label: 'Duplicate', icon: 'i-heroicons-document-duplicate', disabled: true },
        { label: 'Share', icon: 'i-heroicons-share' }
      ],
      [
        { label: 'Delete', icon: 'i-heroicons-trash', color: 'danger' }
      ]
    ]
  },
  render: (args) => ({
    components: { UiContextMenu },
    setup() {
      return { args }
    },
    template: `
      <ui-context-menu v-bind="args">
        <div class="flex items-center justify-center h-64 border rounded-lg bg-gray-50">
          <p class="text-gray-600">Right-click (some options are disabled)</p>
        </div>
      </ui-context-menu>
    `
  })
}

export const Nested: Story = {
  args: {
    items: [
      [
        { label: 'New', icon: 'i-heroicons-plus' },
        {
          label: 'Open With',
          icon: 'i-heroicons-folder-open',
          children: [
            [
              { label: 'Text Editor', icon: 'i-heroicons-document-text' },
              { label: 'Code Editor', icon: 'i-heroicons-code-bracket' },
              { label: 'Browser', icon: 'i-heroicons-globe-alt' }
            ]
          ]
        }
      ],
      [
        { label: 'Properties', icon: 'i-heroicons-information-circle' }
      ]
    ]
  },
  render: (args) => ({
    components: { UiContextMenu },
    setup() {
      return { args }
    },
    template: `
      <ui-context-menu v-bind="args">
        <div class="flex items-center justify-center h-64 border rounded-lg">
          <p class="text-gray-600">Right-click for nested menu</p>
        </div>
      </ui-context-menu>
    `
  })
}
