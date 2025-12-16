import type { Meta, StoryObj } from '@storybook/vue3'
import Banner from '@/components/Banner.vue'
import Button from '@/components/Button.vue'

const meta = {
  title: 'Feedback/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Banner variant'
    },
    closable: {
      control: 'boolean',
      description: 'Show close button'
    }
  }
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'New Feature Available',
    description: 'Check out our latest updates and improvements.',
    variant: 'info'
  }
}

export const Success: Story = {
  args: {
    title: 'Operation Successful',
    description: 'Your changes have been saved successfully.',
    variant: 'success',
    closable: true
  }
}

export const Warning: Story = {
  args: {
    title: 'Action Required',
    description:
      'Please update your payment method to continue using the service.',
    variant: 'warning',
    closable: true
  }
}

export const Error: Story = {
  args: {
    title: 'Connection Error',
    description:
      'Unable to connect to the server. Please check your internet connection.',
    variant: 'error',
    closable: true
  }
}

export const WithActions: Story = {
  render: (args) => ({
    components: { Banner, Button },
    setup() {
      return { args }
    },
    template: `
      <Banner v-bind="args">
        <template #actions>
          <Button variant="plain" size="sm">Dismiss</Button>
          <Button variant="primary" size="sm">Learn More</Button>
        </template>
      </Banner>
    `
  }),
  args: {
    title: 'Update Available',
    description: 'A new version of the application is ready to install.',
    variant: 'info'
  }
}
