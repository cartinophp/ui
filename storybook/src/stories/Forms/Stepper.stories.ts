import type { Meta, StoryObj } from '@storybook/vue3'
import UiStepper from '../../../../src/runtime/components/Stepper.vue'

const meta = {
  title: 'Components/Forms/Stepper',
  component: UiStepper,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
} satisfies Meta<typeof UiStepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: 1,
    steps: [
      { label: 'Account', description: 'Create your account' },
      { label: 'Profile', description: 'Setup your profile' },
      { label: 'Settings', description: 'Configure settings' },
      { label: 'Complete', description: 'Finish setup' }
    ],
    color: 'primary'
  }
}

export const Vertical: Story = {
  args: {
    modelValue: 2,
    orientation: 'vertical',
    steps: [
      { label: 'Personal Info', description: 'Enter your details' },
      { label: 'Address', description: 'Provide your address' },
      { label: 'Payment', description: 'Add payment method' },
      { label: 'Review', description: 'Review and submit' }
    ],
    color: 'primary'
  }
}

export const WithIcons: Story = {
  args: {
    modelValue: 1,
    steps: [
      { label: 'Start', icon: 'i-heroicons-play', description: 'Begin the process' },
      { label: 'Progress', icon: 'i-heroicons-arrow-path', description: 'Make progress' },
      { label: 'Complete', icon: 'i-heroicons-check-circle', description: 'Finish up' }
    ],
    color: 'success'
  }
}
