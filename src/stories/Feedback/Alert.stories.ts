import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from '@/components/Alert.vue'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'neutral'],
      description: 'Color variant of the alert'
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline'],
      description: 'Visual variant style'
    },
    closable: {
      control: 'boolean',
      description: 'Show close button'
    }
  }
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Information',
    description: 'This is a primary alert with some important information.'
  }
}

export const Success: Story = {
  args: {
    color: 'success',
    title: 'Success!',
    description: 'Your changes have been saved successfully.'
  }
}

export const Warning: Story = {
  args: {
    color: 'warning',
    title: 'Warning',
    description: 'Please review your input before proceeding.'
  }
}

export const Error: Story = {
  args: {
    color: 'error',
    title: 'Error',
    description: 'An error occurred while processing your request.'
  }
}

export const Info: Story = {
  args: {
    color: 'info',
    title: 'Did you know?',
    description: 'You can customize the appearance of this alert using the variant prop.'
  }
}

export const SolidVariant: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    title: 'Solid Variant',
    description: 'This alert uses the solid variant with white text.'
  }
}

export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    color: 'success',
    title: 'Outline Variant',
    description: 'This alert uses the outline variant with a border.'
  }
}

export const Closable: Story = {
  args: {
    closable: true,
    color: 'info',
    title: 'Closable Alert',
    description: 'Click the × button to close this alert.'
  }
}

export const WithActions: Story = {
  args: {
    color: 'warning',
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed with this action?',
    actions: [
      {
        label: 'Cancel',
        variant: 'ghost',
        onClick: () => alert('Cancelled')
      },
      {
        label: 'Confirm',
        variant: 'primary',
        onClick: () => alert('Confirmed')
      }
    ]
  }
}

export const WithCustomIcon: Story = {
  args: {
    color: 'success',
    icon: '🎉',
    title: 'Congratulations!',
    description: 'You have completed all tasks.'
  }
}

export const TitleOnly: Story = {
  args: {
    color: 'info',
    title: 'Simple alert with title only'
  }
}

export const DescriptionOnly: Story = {
  args: {
    color: 'neutral',
    description: 'This alert only has a description without a title.'
  }
}

export const AllColors: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <Alert color="primary" title="Primary" description="This is a primary alert" />
        <Alert color="success" title="Success" description="This is a success alert" />
        <Alert color="warning" title="Warning" description="This is a warning alert" />
        <Alert color="error" title="Error" description="This is an error alert" />
        <Alert color="info" title="Info" description="This is an info alert" />
        <Alert color="neutral" title="Neutral" description="This is a neutral alert" />
      </div>
    `
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <Alert variant="soft" color="primary" title="Soft Variant" description="Default soft style with subtle background" />
        <Alert variant="solid" color="primary" title="Solid Variant" description="Bold solid style with white text" />
        <Alert variant="outline" color="primary" title="Outline Variant" description="Minimalist outline style" />
      </div>
    `
  })
}

export const ComplexExample: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <Alert
          color="error"
          variant="soft"
          closable
          title="Payment Failed"
          description="Your payment could not be processed. Please check your payment method and try again."
          :actions="[
            { label: 'Update Payment', variant: 'primary', onClick: () => alert('Update payment') },
            { label: 'Contact Support', variant: 'outline', onClick: () => alert('Contact support') }
          ]"
        />

        <Alert
          color="success"
          variant="solid"
          icon="🚀"
          title="Deployment Successful"
          description="Your application has been deployed to production."
          :actions="[
            { label: 'View Details', variant: 'ghost', onClick: () => alert('View details') }
          ]"
        />
      </div>
    `
  })
}
