import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Command from '../../components/Command.vue'
import type { CommandGroup } from '../../components/Command.vue'

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Command>

const sampleGroups: CommandGroup[] = [
  {
    heading: 'Suggestions',
    items: [
      { label: 'Calendar', value: 'calendar', icon: '📅' },
      { label: 'Search Emoji', value: 'emoji', icon: '😀' },
      { label: 'Calculator', value: 'calculator', icon: '🔢' }
    ]
  },
  {
    heading: 'Settings',
    items: [
      { label: 'Profile', value: 'profile', icon: '👤', shortcut: '⌘P' },
      { label: 'Billing', value: 'billing', icon: '💳', shortcut: '⌘B' },
      { label: 'Settings', value: 'settings', icon: '⚙️', shortcut: '⌘,' }
    ]
  }
]

export const Default: Story = {
  render: (args) => ({
    components: { Command },
    setup() {
      return { args }
    },
    template: `<Command v-bind="args" />`
  }),
  args: {
    groups: sampleGroups,
    placeholder: 'Type a command or search...'
  }
}

export const WithSelection: Story = {
  render: (args) => ({
    components: { Command },
    setup() {
      const selected = ref('')
      const handleSelect = (item: any) => {
        selected.value = item.label
        alert(`Selected: ${item.label}`)
      }
      return { args, selected, handleSelect }
    },
    template: `
      <div>
        <Command v-bind="args" @select="handleSelect" />
        <p v-if="selected" class="mt-4 text-sm">Selected: {{ selected }}</p>
      </div>
    `
  }),
  args: {
    groups: sampleGroups
  }
}
