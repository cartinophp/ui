import type { Meta, StoryObj } from '@storybook/vue3'
import ContextMenu from '@/components/ContextMenu.vue'
import type { ContextMenuItem } from '@/components/ContextMenu.vue'

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof ContextMenu>

const menuItems: ContextMenuItem[] = [
  { label: 'Open', icon: '📂', shortcut: '⌘O', onClick: () => alert('Open') },
  { label: 'Save', icon: '💾', shortcut: '⌘S', onClick: () => alert('Save') },
  { type: 'separator' },
  { label: 'Edit', icon: '✏️' },
  { type: 'separator' },
  { type: 'label', label: 'Settings' },
  { type: 'checkbox', label: 'Show Sidebar', checked: true },
  { type: 'checkbox', label: 'Full Screen', checked: false }
]

export const Default: Story = {
  render: (args) => ({
    components: { ContextMenu },
    setup() {
      return { args }
    },
    template: `
      <ContextMenu v-bind="args">
        <div class="flex h-40 w-80 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-sm text-gray-500">
          Right click here
        </div>
      </ContextMenu>
    `
  }),
  args: {
    items: menuItems
  }
}
