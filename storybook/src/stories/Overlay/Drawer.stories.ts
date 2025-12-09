import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UDrawer from '../../../../src/runtime/components/Drawer.vue'
import UButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Overlay/Drawer',
  component: UiDrawer,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom']
    }
  }
} satisfies Meta<typeof UiDrawer>

export default meta
type Story = StoryObj<typeof meta>

export const Right: Story = {
  render: () => ({
    components: { UiDrawer, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Right Drawer" />
        <ui-drawer v-model="isOpen" side="right" title="Drawer Title">
          <div class="p-4">
            <p class="text-sm text-gray-600 mb-4">
              This drawer slides in from the right side of the screen.
            </p>
            <p class="text-sm text-gray-600">
              You can put any content here like forms, details, or settings.
            </p>
          </div>
        </ui-drawer>
      </div>
    `
  })
}

export const Left: Story = {
  render: () => ({
    components: { UiDrawer, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Left Drawer" />
        <ui-drawer v-model="isOpen" side="left" title="Navigation">
          <div class="p-4">
            <nav class="space-y-2">
              <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Dashboard</a>
              <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Projects</a>
              <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Team</a>
              <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Settings</a>
            </nav>
          </div>
        </ui-drawer>
      </div>
    `
  })
}

export const WithFooter: Story = {
  render: () => ({
    components: { UiDrawer, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open with Footer" />
        <ui-drawer v-model="isOpen" title="Edit Profile">
          <div class="p-4">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Name</label>
                <input type="text" class="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input type="email" class="w-full border rounded px-3 py-2" />
              </div>
            </div>
          </div>
          <template #footer>
            <div class="flex justify-end gap-2 p-4 border-t">
              <ui-button @click="isOpen = false" label="Cancel" variant="ghost" />
              <ui-button @click="isOpen = false" label="Save Changes" />
            </div>
          </template>
        </ui-drawer>
      </div>
    `
  })
}

export const Top: Story = {
  render: () => ({
    components: { UiDrawer, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Top Drawer" />
        <ui-drawer v-model="isOpen" side="top" title="Notifications">
          <div class="p-4">
            <p class="text-sm text-gray-600">
              This drawer slides from the top.
            </p>
          </div>
        </ui-drawer>
      </div>
    `
  })
}

export const Bottom: Story = {
  render: () => ({
    components: { UiDrawer, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Bottom Drawer" />
        <ui-drawer v-model="isOpen" side="bottom" title="Quick Actions">
          <div class="p-4">
            <div class="grid grid-cols-4 gap-4">
              <button class="flex flex-col items-center gap-2 p-4 hover:bg-gray-100 rounded">
                <span class="text-2xl">📄</span>
                <span class="text-xs">Document</span>
              </button>
              <button class="flex flex-col items-center gap-2 p-4 hover:bg-gray-100 rounded">
                <span class="text-2xl">📊</span>
                <span class="text-xs">Sheet</span>
              </button>
              <button class="flex flex-col items-center gap-2 p-4 hover:bg-gray-100 rounded">
                <span class="text-2xl">📽️</span>
                <span class="text-xs">Slide</span>
              </button>
              <button class="flex flex-col items-center gap-2 p-4 hover:bg-gray-100 rounded">
                <span class="text-2xl">📁</span>
                <span class="text-xs">Folder</span>
              </button>
            </div>
          </div>
        </ui-drawer>
      </div>
    `
  })
}
