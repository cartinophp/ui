import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Drawer from '@/components/Drawer.vue'
import Button from '@/components/Button.vue'

const meta = {
  title: 'Feedback/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Control drawer visibility'
    },
    side: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Side from which drawer appears'
    }
  }
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <Button @click="open = true">Open Drawer</Button>
        
        <Drawer v-model:open="open" v-bind="args">
          <template #title>Drawer Title</template>
          <template #description>This is a drawer component sliding from the side.</template>
          
          <div class="space-y-4">
            <p class="text-sm text-gray-600">
              Drawers are perfect for navigation menus, filters, or any content that needs
              to slide in from the side of the screen.
            </p>
            <div class="space-y-2">
              <div class="p-3 bg-gray-50 rounded">Menu Item 1</div>
              <div class="p-3 bg-gray-50 rounded">Menu Item 2</div>
              <div class="p-3 bg-gray-50 rounded">Menu Item 3</div>
            </div>
          </div>
        </Drawer>
      </div>
    `
  })
}

export const FromLeft: Story = {
  render: () => ({
    components: { Drawer, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <Button @click="open = true">Open from Left</Button>
        
        <Drawer v-model:open="open" side="left">
          <template #title>Left Drawer</template>
          <p class="text-sm text-gray-600">This drawer slides in from the left side.</p>
        </Drawer>
      </div>
    `
  })
}

export const FromRight: Story = {
  render: () => ({
    components: { Drawer, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <Button @click="open = true">Open from Right</Button>
        
        <Drawer v-model:open="open" side="right">
          <template #title>Right Drawer</template>
          <p class="text-sm text-gray-600">This drawer slides in from the right side.</p>
        </Drawer>
      </div>
    `
  })
}

export const WithFooter: Story = {
  render: () => ({
    components: { Drawer, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <Button @click="open = true">Drawer with Footer</Button>
        
        <Drawer v-model:open="open">
          <template #title>Settings</template>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Notifications</label>
              <input type="checkbox" class="rounded" /> Enable email notifications
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Theme</label>
              <select class="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </div>
          
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="plain" @click="open = false">Cancel</Button>
              <Button variant="primary" @click="open = false">Save Changes</Button>
            </div>
          </template>
        </Drawer>
      </div>
    `
  })
}
