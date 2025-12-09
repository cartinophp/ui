import type { Meta, StoryObj } from '@storybook/vue3'
import UBanner from '../../../../src/runtime/components/Banner.vue'

const meta = {
  title: 'Components/Content/Banner',
  component: UiBanner,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UiBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    title: 'New Feature Available',
    description: 'Check out our latest features and improvements',
    color: 'primary',
    icon: 'i-heroicons-information-circle'
  }
}

export const Success: Story = {
  args: {
    title: 'Success!',
    description: 'Your changes have been saved successfully',
    color: 'success',
    icon: 'i-heroicons-check-circle'
  }
}

export const Warning: Story = {
  args: {
    title: 'Action Required',
    description: 'Please update your payment information to continue using the service',
    color: 'warning',
    icon: 'i-heroicons-exclamation-triangle'
  }
}

export const Error: Story = {
  args: {
    title: 'Error Occurred',
    description: 'Something went wrong. Please try again later',
    color: 'danger',
    icon: 'i-heroicons-x-circle'
  }
}

export const WithButton: Story = {
  args: {
    title: 'Special Offer',
    description: 'Get 50% off on annual plans. Limited time only!',
    color: 'primary',
    button: {
      label: 'Learn More',
      to: '/pricing'
    }
  }
}

export const Dismissible: Story = {
  args: {
    title: 'Cookie Notice',
    description: 'We use cookies to improve your experience on our site',
    color: 'neutral',
    dismissible: true
  }
}
