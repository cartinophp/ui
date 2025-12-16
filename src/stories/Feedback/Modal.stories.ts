import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import Button from '@/components/Button.vue'

const meta = {
  title: 'Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Control modal visibility'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Modal size'
    }
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <Button @click="open = true">Open Modal</Button>
        
        <Modal v-model:open="open" v-bind="args">
          <template #title>Modal Title</template>
          
          <div class="space-y-4">
            <p>This is a modal component. It can be used for various purposes like:</p>
            <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
              <li>Displaying important information</li>
              <li>Confirming user actions</li>
              <li>Collecting user input</li>
              <li>Showing detailed content</li>
            </ul>
          </div>
        </Modal>
      </div>
    `
  })
}

export const Small: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <Button @click="open = true">Small Modal</Button>
        
        <Modal v-model:open="open" size="sm">
          <template #title>Small Modal</template>
          <p class="text-sm">This is a small modal with limited width.</p>
        </Modal>
      </div>
    `
  })
}

export const Large: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <Button @click="open = true">Large Modal</Button>
        
        <Modal v-model:open="open" size="lg">
          <template #title>Large Modal</template>
          <div class="space-y-4">
            <p>This is a large modal with more width for displaying detailed content.</p>
            <p class="text-sm text-gray-600">
              Large modals are perfect for forms, tables, or any content that needs more space
              to be readable and functional.
            </p>
          </div>
        </Modal>
      </div>
    `
  })
}

export const WithFooter: Story = {
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <Button @click="open = true">Modal with Footer</Button>
        
        <Modal v-model:open="open">
          <template #title>Confirmation Required</template>
          
          <p class="text-sm text-gray-600">
            Are you sure you want to proceed with this action? This change cannot be undone.
          </p>
          
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="plain" @click="open = false">Cancel</Button>
              <Button variant="primary" @click="open = false">Confirm</Button>
            </div>
          </template>
        </Modal>
      </div>
    `
  })
}
