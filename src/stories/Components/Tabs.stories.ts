import type { Meta, StoryObj } from '@storybook/vue3'
import Tabs from '../../components/Tabs.vue'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Tab 1', value: 'one' },
      { label: 'Tab 2', value: 'two' },
      { label: 'Tab 3', value: 'three' }
    ],
    modelValue: 'one'
  }
}

export default meta
export type Story = StoryObj<typeof Tabs>

export const Basic: Story = {}
