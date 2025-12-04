import type { Meta, StoryObj } from '@storybook/vue3'
import UiToast from '../../../../src/runtime/components/Toast.vue'
import UiButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Feedback/Toast',
  component: UiToast,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UiToast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Notification',
    description: 'This is a toast notification.'
  },
  render: (args) => ({
    components: { UiToast },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4 bg-gray-50 rounded">
        <ui-toast v-bind="args" />
      </div>
    `
  })
}

export const Success: Story = {
  args: {
    title: 'Success',
    description: 'Your changes have been saved successfully.',
    color: 'success'
  },
  render: (args) => ({
    components: { UiToast },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4 bg-gray-50 rounded">
        <ui-toast v-bind="args" />
      </div>
    `
  })
}

export const Warning: Story = {
  args: {
    title: 'Warning',
    description: 'Please review your changes before proceeding.',
    color: 'warning'
  },
  render: (args) => ({
    components: { UiToast },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4 bg-gray-50 rounded">
        <ui-toast v-bind="args" />
      </div>
    `
  })
}

export const Error: Story = {
  args: {
    title: 'Error',
    description: 'An error occurred while processing your request.',
    color: 'danger'
  },
  render: (args) => ({
    components: { UiToast },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4 bg-gray-50 rounded">
        <ui-toast v-bind="args" />
      </div>
    `
  })
}

export const WithIcon: Story = {
  args: {
    title: 'New message',
    description: 'You have received a new message.',
    icon: 'i-heroicons-envelope'
  },
  render: (args) => ({
    components: { UiToast },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4 bg-gray-50 rounded">
        <ui-toast v-bind="args" />
      </div>
    `
  })
}

export const WithActions: Story = {
  args: {
    title: 'Update available',
    description: 'A new version is available. Would you like to update now?',
    actions: [
      { label: 'Update', color: 'primary' },
      { label: 'Later', variant: 'ghost' }
    ]
  },
  render: (args) => ({
    components: { UiToast },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4 bg-gray-50 rounded">
        <ui-toast v-bind="args" />
      </div>
    `
  })
}

export const Closable: Story = {
  args: {
    title: 'Notification',
    description: 'This toast can be dismissed.',
    close: true
  },
  render: (args) => ({
    components: { UiToast },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4 bg-gray-50 rounded">
        <ui-toast v-bind="args" />
      </div>
    `
  })
}

export const TitleOnly: Story = {
  args: {
    title: 'Simple toast notification'
  },
  render: (args) => ({
    components: { UiToast },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4 bg-gray-50 rounded">
        <ui-toast v-bind="args" />
      </div>
    `
  })
}

export const WithAvatar: Story = {
  args: {
    title: 'John Doe',
    description: 'Sent you a message',
    avatar: { src: 'https://i.pravatar.cc/150?img=1' }
  },
  render: (args) => ({
    components: { UiToast },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4 bg-gray-50 rounded">
        <ui-toast v-bind="args" />
      </div>
    `
  })
}
