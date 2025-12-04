import type { Meta, StoryObj } from '@storybook/vue3'
import UiColorPicker from '../../../../src/runtime/components/ColorPicker.vue'

const meta = {
  title: 'Components/Forms/ColorPicker',
  component: UiColorPicker,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof UiColorPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: '#3b82f6'
  }
}

export const Small: Story = {
  args: {
    modelValue: '#10b981',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    modelValue: '#ef4444',
    size: 'lg'
  }
}

export const Disabled: Story = {
  args: {
    modelValue: '#6b7280',
    disabled: true
  }
}
