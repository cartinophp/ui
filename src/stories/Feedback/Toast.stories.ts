import type { Meta, StoryObj } from '@storybook/vue3'
import Toast from '@/components/Toast.vue'
import Button from '@/components/Button.vue'
import { useToast } from '@/composables/useToast'

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
      options: [
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left',
        'top-center',
        'bottom-center'
      ]
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

// Interactive stories using useToast composable
export const WithComposable: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const toast = useToast()

      const showSuccess = () => {
        toast.success('Success!', 'Your changes have been saved.')
      }

      const showError = () => {
        toast.error('Error', 'Something went wrong. Please try again.')
      }

      const showWarning = () => {
        toast.warning('Warning', 'Please check your input.')
      }

      const showInfo = () => {
        toast.info('Information', 'Here is some useful information.')
      }

      return { showSuccess, showError, showWarning, showInfo }
    },
    template: `
      <div class="flex flex-wrap gap-3">
        <Button @click="showSuccess" variant="primary">
          Show Success Toast
        </Button>
        <Button @click="showError" variant="destructive">
          Show Error Toast
        </Button>
        <Button @click="showWarning">
          Show Warning Toast
        </Button>
        <Button @click="showInfo" variant="secondary">
          Show Info Toast
        </Button>
      </div>
    `
  })
}

export const MultipleToasts: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const toast = useToast()

      const showMultiple = () => {
        toast.success('First toast', 'This is the first notification')
        setTimeout(() => {
          toast.info('Second toast', 'This is the second notification')
        }, 500)
        setTimeout(() => {
          toast.warning('Third toast', 'This is the third notification')
        }, 1000)
      }

      return { showMultiple }
    },
    template: `
      <Button @click="showMultiple">
        Show Multiple Toasts
      </Button>
    `
  })
}

export const WithCustomActions: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const toast = useToast()

      const showWithActions = () => {
        toast.toast({
          title: 'Confirm deletion',
          description: 'Are you sure you want to delete this item?',
          type: 'warning',
          duration: 0,
          actions: [
            {
              label: 'Cancel',
              onClick: () => {
                console.log('Cancelled')
              },
              variant: 'ghost'
            },
            {
              label: 'Delete',
              onClick: () => {
                console.log('Deleted')
                toast.success('Deleted!', 'Item has been removed')
              },
              variant: 'primary'
            }
          ]
        })
      }

      return { showWithActions }
    },
    template: `
      <Button @click="showWithActions">
        Show Toast with Actions
      </Button>
    `
  })
}

export const DismissAll: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const toast = useToast()

      const showMany = () => {
        for (let i = 1; i <= 5; i++) {
          setTimeout(() => {
            toast.info('Toast ' + i, 'This is toast number ' + i)
          }, i * 200)
        }
      }

      const dismissAll = () => {
        toast.dismissAll()
      }

      return { showMany, dismissAll }
    },
    template: `
      <div class="flex gap-3">
        <Button @click="showMany">
          Show 5 Toasts
        </Button>
        <Button @click="dismissAll" variant="secondary">
          Dismiss All
        </Button>
      </div>
    `
  })
}
