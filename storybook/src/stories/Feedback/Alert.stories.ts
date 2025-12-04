import type { Meta, StoryObj } from '@storybook/vue3'
import UiAlert from '../../../../src/runtime/components/Alert.vue'

const meta = {
  title: 'Components/Feedback/Alert',
  component: UiAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'subtle']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UiAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    title: 'Information',
    description: 'This is an informational alert message.',
    color: 'primary'
  }
}

export const Success: Story = {
  args: {
    title: 'Success',
    description: 'Your changes have been saved successfully.',
    color: 'success'
  }
}

export const Warning: Story = {
  args: {
    title: 'Warning',
    description: 'Please review your changes before proceeding.',
    color: 'warning'
  }
}

export const Danger: Story = {
  args: {
    title: 'Error',
    description: 'An error occurred while processing your request.',
    color: 'danger'
  }
}

export const Outline: Story = {
  args: {
    title: 'Outline Alert',
    description: 'This alert uses the outline variant.',
    variant: 'outline',
    color: 'primary'
  }
}

export const Soft: Story = {
  args: {
    title: 'Soft Alert',
    description: 'This alert uses the soft variant.',
    variant: 'soft',
    color: 'primary'
  }
}

export const Subtle: Story = {
  args: {
    title: 'Subtle Alert',
    description: 'This alert uses the subtle variant.',
    variant: 'subtle',
    color: 'primary'
  }
}

export const WithIcon: Story = {
  args: {
    title: 'Alert with Icon',
    description: 'This alert includes a custom icon.',
    icon: 'i-heroicons-information-circle',
    color: 'primary'
  }
}

export const Closable: Story = {
  args: {
    title: 'Closable Alert',
    description: 'This alert can be closed.',
    close: true,
    color: 'primary'
  }
}

export const TitleOnly: Story = {
  args: {
    title: 'Simple alert with title only',
    color: 'primary'
  }
}

export const DescriptionOnly: Story = {
  args: {
    description: 'Simple alert with description only',
    color: 'primary'
  }
}

export const WithActions: Story = {
  args: {
    title: 'Action Required',
    description: 'Please confirm your email address.',
    color: 'warning',
    actions: [
      { label: 'Confirm', variant: 'solid' },
      { label: 'Cancel', variant: 'ghost' }
    ]
  }
}
