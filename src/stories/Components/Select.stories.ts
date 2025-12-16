import type { Meta, StoryObj } from '@storybook/vue3'
import Select from '@/components/Select.vue'

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Seleziona opzione',
    placeholder: 'Scegli...',
    options: [
      { label: 'Uno', value: '1' },
      { label: 'Due', value: '2' },
      { label: 'Tre', value: '3' }
    ],
    modelValue: null
  }
}

export default meta
export type Story = StoryObj<typeof Select>

export const Basic: Story = {}
