import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import USlideover from '../../../../src/runtime/components/Slideover.vue'
import UButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Overlay/Slideover',
  component: USlideover,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right']
    }
  }
} satisfies Meta<typeof USlideover>

export default meta
type Story = StoryObj<typeof meta>

export const Right: Story = {
  render: () => ({
    components: { USlideover, UButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Slideover" />
        <ui-slideover v-model="isOpen" title="Slideover Title">
          <div class="p-4">
            <p class="text-sm text-gray-600 mb-4">
              This slideover slides in from the right side.
            </p>
            <p class="text-sm text-gray-600">
              Perfect for displaying additional information or forms.
            </p>
          </div>
        </ui-slideover>
      </div>
    `
  })
}

export const Left: Story = {
  render: () => ({
    components: { USlideover, UButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Left Slideover" />
        <ui-slideover v-model="isOpen" side="left" title="Navigation">
          <div class="p-4">
            <nav class="space-y-2">
              <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Dashboard</a>
              <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Projects</a>
              <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Team</a>
              <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Settings</a>
            </nav>
          </div>
        </ui-slideover>
      </div>
    `
  })
}

export const WithFooter: Story = {
  render: () => ({
    components: { USlideover, UButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open with Footer" />
        <ui-slideover v-model="isOpen" title="Create New Item">
          <div class="p-4">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Name</label>
                <input type="text" class="w-full border rounded px-3 py-2" placeholder="Enter name" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Description</label>
                <textarea class="w-full border rounded px-3 py-2" rows="4" placeholder="Enter description"></textarea>
              </div>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-end gap-2 p-4 border-t bg-gray-50">
              <ui-button @click="isOpen = false" label="Cancel" variant="ghost" />
              <ui-button @click="isOpen = false" label="Create" />
            </div>
          </template>
        </ui-slideover>
      </div>
    `
  })
}

export const Wide: Story = {
  render: () => ({
    components: { USlideover, UButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Wide Slideover" />
        <ui-slideover v-model="isOpen" title="Wide Panel" class="max-w-2xl">
          <div class="p-4">
            <p class="text-sm text-gray-600 mb-4">
              This slideover is wider than the default.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-gray-100 rounded">Column 1</div>
              <div class="p-4 bg-gray-100 rounded">Column 2</div>
            </div>
          </div>
        </ui-slideover>
      </div>
    `
  })
}

export const PreventClose: Story = {
  render: () => ({
    components: { USlideover, UButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Slideover" />
        <ui-slideover v-model="isOpen" title="Important Form" :prevent-close="true">
          <div class="p-4">
            <p class="text-sm text-gray-600 mb-4">
              This slideover can only be closed using the button below.
            </p>
            <p class="text-sm text-gray-600 mb-4">
              Clicking outside or pressing ESC won't close it.
            </p>
            <ui-button @click="isOpen = false" label="Close" block />
          </div>
        </ui-slideover>
      </div>
    `
  })
}
