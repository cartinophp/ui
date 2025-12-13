import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Dialog from '@/components/Dialog.vue'
import Button from '@/components/Button.vue'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Dialog open state (v-model)'
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state'
    }
  }
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Dialog v-model:open="isOpen" v-bind="args">
        <template #trigger>
          <Button variant="primary">Open Dialog</Button>
        </template>

        <template #title>
          Dialog Title
        </template>

        <template #description>
          This is a brief description of the dialog explaining what it does.
        </template>

        <div class="space-y-4">
          <p class="text-sm text-gray-700">
            This is the main content of the dialog. You can insert any content you want here.
          </p>

          <div class="flex justify-end gap-3">
            <Button variant="outline" @click="isOpen = false">
              Cancel
            </Button>
            <Button variant="primary" @click="isOpen = false">
              Confirm
            </Button>
          </div>
        </div>
      </Dialog>
    `
  })
}

export const WithoutDescription: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Dialog v-model:open="isOpen" v-bind="args">
        <template #trigger>
          <Button variant="primary">Open Dialog</Button>
        </template>

        <template #title>
          Dialog Without Description
        </template>

        <div class="space-y-4">
          <p class="text-sm text-gray-700">
            This dialog has no description, only the title and content.
          </p>

          <div class="flex justify-end">
            <Button variant="primary" @click="isOpen = false">
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    `
  })
}

export const Confirmation: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false)
      const handleConfirm = () => {
        alert('Confirmed!')
        isOpen.value = false
      }
      return { args, isOpen, handleConfirm }
    },
    template: `
      <Dialog v-model:open="isOpen" v-bind="args">
        <template #trigger>
          <Button variant="outline">Delete Account</Button>
        </template>

        <template #title>
          Are you sure?
        </template>

        <template #description>
          This action cannot be undone. Your account will be permanently deleted.
        </template>

        <div class="space-y-4">
          <div class="rounded-lg bg-red-50 p-4">
            <p class="text-sm text-red-800">
              ⚠️ Warning: this is an irreversible action!
            </p>
          </div>

          <div class="flex justify-end gap-3">
            <Button variant="outline" @click="isOpen = false">
              Cancel
            </Button>
            <Button variant="primary" @click="handleConfirm" class="!bg-red-600 hover:!bg-red-700">
              Delete Account
            </Button>
          </div>
        </div>
      </Dialog>
    `
  })
}

export const FormDialog: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false)
      const formData = ref({
        name: '',
        email: ''
      })

      const handleSubmit = () => {
        alert('Form submitted: ' + JSON.stringify(formData.value))
        isOpen.value = false
      }

      return { args, isOpen, formData, handleSubmit }
    },
    template: `
      <Dialog v-model:open="isOpen" v-bind="args">
        <template #trigger>
          <Button variant="primary">Add User</Button>
        </template>

        <template #title>
          New User
        </template>

        <template #description>
          Enter the details of the new user
        </template>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div class="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" @click="isOpen = false">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </Dialog>
    `
  })
}
