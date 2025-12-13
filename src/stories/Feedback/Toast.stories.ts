import type { Meta, StoryObj } from '@storybook/vue3'
import Toast from '@/components/Toast.vue'

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info']
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center']
    },
    duration: {
      control: 'number'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Notification',
    description: 'This is a default toast notification.',
    type: 'default'
  }
}

export const Success: Story = {
  args: {
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
    type: 'success'
  }
}

export const Warning: Story = {
  args: {
    title: 'Warning',
    description: 'Please check your input and try again.',
    type: 'warning'
  }
}

export const Error: Story = {
  args: {
    title: 'Error',
    description: 'Something went wrong. Please try again.',
    type: 'error'
  }
}

export const Info: Story = {
  args: {
    title: 'Information',
    description: 'Here is some useful information for you.',
    type: 'info'
  }
}

export const WithActions: Story = {
  args: {
    title: 'Confirm action',
    description: 'Are you sure you want to delete this item?',
    type: 'warning',
    actions: [
      {
        label: 'Cancel',
        onClick: () => console.log('Cancelled'),
        variant: 'ghost'
      },
      {
        label: 'Delete',
        onClick: () => console.log('Deleted'),
        variant: 'primary'
      }
    ]
  }
}

export const NotClosable: Story = {
  args: {
    title: 'Processing',
    description: 'Please wait while we process your request...',
    type: 'info',
    closable: false,
    duration: 0
  }
}

export const CustomIcon: Story = {
  args: {
    title: 'Custom notification',
    description: 'This toast uses a custom icon.',
    icon: 'i-lucide-heart'
  }
}

export const Positions: Story = {
  render: () => ({
    components: { Toast },
    template: `
      <div>
        <Toast 
          title="Top Right" 
          description="This toast appears in the top right corner."
          position="top-right" 
        />
        <Toast 
          title="Bottom Left" 
          description="This toast appears in the bottom left corner."
          position="bottom-left"
          type="success"
        />
      </div>
    `
  })
}

export const LongDuration: Story = {
  args: {
    title: 'Long duration',
    description: 'This toast will stay visible for 10 seconds.',
    type: 'info',
    duration: 10000
  }
}