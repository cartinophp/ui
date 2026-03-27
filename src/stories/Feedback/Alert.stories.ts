import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from '@/components/Alert.vue'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'info', 'success', 'warning', 'error', 'neutral'],
      description: 'Color tone of the alert'
    },
    variant: {
      control: 'select',
      options: ['soft', 'solid', 'outline', 'subtle'],
      description: 'Visual variant style'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the alert'
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation'
    },
    closable: {
      control: 'boolean',
      description: 'Show close button'
    }
  },
  args: {
    color: 'info',
    variant: 'soft',
    size: 'md'
  }
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Heads up!',
    description: 'You can change the primary color in your app config.'
  }
}

export const Colors: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <Alert color="primary" title="Primary" description="Primary alert message" />
        <Alert color="info" title="Info" description="Informational alert message" />
        <Alert color="success" title="Success" description="Success alert message" />
        <Alert color="warning" title="Warning" description="Warning alert message" />
        <Alert color="error" title="Error" description="Error alert message" />
        <Alert color="neutral" title="Neutral" description="Neutral alert message" />
      </div>
    `
  })
}

export const Variants: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <Alert variant="soft" color="primary" title="Soft Variant" description="This is the default soft variant" />
        <Alert variant="solid" color="primary" title="Solid Variant" description="Solid background with foreground text" />
        <Alert variant="outline" color="primary" title="Outline Variant" description="Border with transparent background" />
        <Alert variant="subtle" color="primary" title="Subtle Variant" description="Very light background" />
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <Alert size="xs" title="Extra Small" description="XS size alert" />
        <Alert size="sm" title="Small" description="SM size alert" />
        <Alert size="md" title="Medium" description="MD size alert (default)" />
        <Alert size="lg" title="Large" description="LG size alert" />
        <Alert size="xl" title="Extra Large" description="XL size alert" />
      </div>
    `
  })
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

export const Closable: Story = {
  args: {
    closable: true,
    color: 'info',
    title: 'Closable Alert',
    description: 'Click the close button to dismiss this alert.'
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
        color: 'neutral',
        onClick: () => alert('Cancelled')
      },
      {
        label: 'Confirm',
        variant: 'solid',
        onClick: () => alert('Confirmed')
      }
    ]
  }
}

export const HorizontalOrientation: Story = {
  args: {
    color: 'success',
    orientation: 'horizontal',
    title: 'Horizontal Layout',
    description: 'This alert uses horizontal orientation.'
  }
}

export const ResponsiveSizes: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <div class="space-y-4">
        <p class="text-sm text-muted-foreground">Alerts are larger on mobile for better readability. Resize the viewport to see the difference.</p>
        <Alert
          color="info"
          size="md"
          title="Responsive Alert"
          description="This alert adapts its size based on viewport width."
          icon="solar:info-circle-linear"
        />
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
            { label: 'Update Payment', variant: 'solid', color: 'error', onClick: () => alert('Update payment') },
            { label: 'Contact Support', variant: 'outline', color: 'neutral', onClick: () => alert('Contact support') }
          ]"
        />

        <Alert
          color="success"
          variant="solid"
          icon="solar:check-circle-linear"
          title="Deployment Successful"
          description="Your application has been deployed to production."
        />

        <Alert
          color="info"
          variant="outline"
          orientation="horizontal"
          title="New Feature Available"
          description="Check out our latest updates."
          :actions="[
            { label: 'Learn More', variant: 'solid', onClick: () => alert('Learn more') }
          ]"
        />
      </div>
    `
  })
}
