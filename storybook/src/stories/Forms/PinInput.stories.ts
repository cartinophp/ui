import type { Meta, StoryObj } from '@storybook/vue3'
import UPinInput from '../../../../src/runtime/components/PinInput.vue'

const meta = {
  title: 'Components/Forms/PinInput',
  component: UiPinInput,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    variant: {
      control: 'select',
      options: ['outline', 'soft', 'subtle']
    }
  }
} satisfies Meta<typeof UiPinInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    length: 4,
    color: 'primary',
    variant: 'outline'
  }
}

export const SixDigit: Story = {
  args: {
    length: 6,
    color: 'primary',
    variant: 'outline'
  }
}

export const Masked: Story = {
  args: {
    length: 4,
    mask: true,
    color: 'primary',
    variant: 'outline'
  }
}

export const Soft: Story = {
  args: {
    length: 4,
    variant: 'soft',
    color: 'primary'
  }
}

export const Disabled: Story = {
  args: {
    length: 4,
    disabled: true,
    color: 'primary'
  }
}
