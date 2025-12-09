import type { Meta, StoryObj } from '@storybook/vue3'
import USlider from '../../../../src/runtime/components/Slider.vue'

const meta = {
  title: 'Components/Forms/Slider',
  component: USlider,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof USlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: [50],
    min: 0,
    max: 100,
    color: 'primary'
  }
}

export const Range: Story = {
  args: {
    modelValue: [25, 75],
    min: 0,
    max: 100,
    color: 'primary'
  }
}

export const WithStep: Story = {
  args: {
    modelValue: [25],
    min: 0,
    max: 100,
    step: 5,
    color: 'primary'
  }
}

export const Small: Story = {
  args: {
    modelValue: [50],
    size: 'sm',
    color: 'primary'
  }
}

export const Large: Story = {
  args: {
    modelValue: [50],
    size: 'lg',
    color: 'primary'
  }
}

export const Disabled: Story = {
  args: {
    modelValue: [50],
    disabled: true,
    color: 'primary'
  }
}
