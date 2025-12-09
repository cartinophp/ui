import type { Meta, StoryObj } from '@storybook/vue3'
import UCommandPalette from '../../../../src/runtime/components/CommandPalette.vue'

const meta = {
  title: 'Components/Overlay/CommandPalette',
  component: UiCommandPalette,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UiCommandPalette>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: true,
    placeholder: 'Search or type a command...',
    groups: [
      {
        label: 'Actions',
        commands: [
          { label: 'New File', icon: 'i-heroicons-document-plus', shortcut: ['⌘', 'N'] },
          { label: 'Save', icon: 'i-heroicons-document-check', shortcut: ['⌘', 'S'] },
          { label: 'Open', icon: 'i-heroicons-folder-open', shortcut: ['⌘', 'O'] }
        ]
      },
      {
        label: 'Navigation',
        commands: [
          { label: 'Go to File', icon: 'i-heroicons-magnifying-glass', shortcut: ['⌘', 'P'] },
          { label: 'Go to Line', icon: 'i-heroicons-arrow-right', shortcut: ['⌃', 'G'] }
        ]
      }
    ],
    color: 'primary'
  }
}

export const WithRecentSearches: Story = {
  args: {
    modelValue: true,
    placeholder: 'Search...',
    groups: [
      {
        label: 'Recent',
        commands: [
          { label: 'Dashboard', icon: 'i-heroicons-home' },
          { label: 'Settings', icon: 'i-heroicons-cog-6-tooth' },
          { label: 'Profile', icon: 'i-heroicons-user' }
        ]
      }
    ],
    color: 'primary'
  }
}
