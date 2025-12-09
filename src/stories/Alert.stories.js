import type { Meta, StoryObj } from '@storybook/vue3'
import UAlert from '../runtime/components/Alert.vue'

const meta = {
  title: 'Components/Alert',
  component: UAlert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'subtle']
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
} satisfies Meta<typeof UAlert>

export default meta

export const Primary: Story = {
  args: {
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    color: 'success',
    variant: 'soft',
    icon: 'i-heroicons-check-circle'
  }
}

export const WithActions: Story = {
  args: {
    title: 'Update Available',
    description: 'A new version of the app is available.',
    color: 'info',
    variant: 'outline',
    icon: 'i-heroicons-information-circle',
    actions: [
      { label: 'Update Now', color: 'info', size: 'xs' },
      { label: 'Later', color: 'neutral', variant: 'ghost', size: 'xs' }
    ]
  }
}

export const Warning: Story = {
  args: {
    title: 'Warning',
    description: 'This action cannot be undone.',
    color: 'warning',
    variant: 'soft',
    icon: 'i-heroicons-exclamation-triangle'
  }
}

export const Error: Story = {
  args: {
    title: 'Error',
    description: 'Something went wrong. Please try again.',
    color: 'error',
    variant: 'solid',
    icon: 'i-heroicons-x-circle',
    close: true
  }
}

export const Vertical: Story = {
  args: {
    title: 'New Message',
    description: 'You have a new message from John.',
    color: 'primary',
    variant: 'subtle',
    icon: 'i-heroicons-envelope',
    orientation: 'vertical',
    actions: [
      { label: 'Read', color: 'primary', size: 'xs' }
    ]
  }
}
