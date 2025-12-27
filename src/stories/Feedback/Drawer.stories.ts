import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Drawer from '../../components/Drawer.vue'
import Button from '../../components/Button.vue'

const meta: Meta<typeof Drawer> = {
  title: 'Feedback/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Control drawer visibility' },
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Drawer side'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Drawer size'
    },
    title: { control: 'text', description: 'Drawer title' },
    description: { control: 'text', description: 'Drawer description' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// ---------------------------
// Default Drawer
// ---------------------------
export const Default: Story = {
  args: { title: 'Drawer Title', description: 'This is a drawer component' },
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
          <p class="text-sm text-gray-600">
            This is a drawer component. You can use it to show information or actions.
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="plain" @click="open = false">Cancel</Button>
              <Button variant="primary" @click="open = false">Confirm</Button>
            </div>
          </template>
        </Drawer>
      </div>
    `
  })
}

// ---------------------------
// Right Drawer
// ---------------------------
export const Right: Story = {
  args: { title: 'Right Drawer', side: 'right', size: 'md' },
  render: (args) => ({
    components: { Drawer, Button },
    setup() { const open = ref(false); return { args, open } },
    template: `
      <div>
        <Button @click="open = true">Open Right Drawer</Button>
        <Drawer v-model:open="open" v-bind="args">
          <p class="text-sm text-gray-600">
            This drawer slides in from the right side.
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="plain" @click="open = false">Cancel</Button>
              <Button variant="primary" @click="open = false">Confirm</Button>
            </div>
          </template>
        </Drawer>
      </div>
    `
  })
}

// ---------------------------
// Left Drawer
// ---------------------------
export const Left: Story = {
  args: { title: 'Left Drawer', side: 'left', size: 'md' },
  render: (args) => ({
    components: { Drawer, Button },
    setup() { const open = ref(false); return { args, open } },
    template: `
      <div>
        <Button @click="open = true">Open Left Drawer</Button>
        <Drawer v-model:open="open" v-bind="args">
          <p class="text-sm text-gray-600">
            This drawer slides in from the left side.
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="plain" @click="open = false">Cancel</Button>
              <Button variant="primary" @click="open = false">Confirm</Button>
            </div>
          </template>
        </Drawer>
      </div>
    `
  })
}

// ---------------------------
// Top Drawer
// ---------------------------
export const Top: Story = {
  args: { title: 'Top Drawer', side: 'top', size: 'md' },
  render: (args) => ({
    components: { Drawer, Button },
    setup() { const open = ref(false); return { args, open } },
    template: `
      <div>
        <Button @click="open = true">Open Top Drawer</Button>
        <Drawer v-model:open="open" v-bind="args">
          <p class="text-sm text-gray-600">
            This drawer slides down from the top.
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="plain" @click="open = false">Cancel</Button>
              <Button variant="primary" @click="open = false">Confirm</Button>
            </div>
          </template>
        </Drawer>
      </div>
    `
  })
}

// ---------------------------
// Bottom Drawer
// ---------------------------
export const Bottom: Story = {
  args: { title: 'Bottom Drawer', side: 'bottom', size: 'md' },
  render: (args) => ({
    components: { Drawer, Button },
    setup() { const open = ref(false); return { args, open } },
    template: `
      <div>
        <Button @click="open = true">Open Bottom Drawer</Button>
        <Drawer v-model:open="open" v-bind="args">
          <p class="text-sm text-gray-600">
            This drawer slides up from the bottom.
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="plain" @click="open = false">Cancel</Button>
              <Button variant="primary" @click="open = false">Confirm</Button>
            </div>
          </template>
        </Drawer>
      </div>
    `
  })
}

// ---------------------------
// Large Drawer
// ---------------------------
export const Large: Story = {
  args: { title: 'Large Drawer', size: 'lg' },
  render: (args) => ({
    components: { Drawer, Button },
    setup() { const open = ref(false); return { args, open } },
    template: `
      <div>
        <Button @click="open = true">Open Large Drawer</Button>
        <Drawer v-model:open="open" v-bind="args">
          <p class="text-sm text-gray-600">
            This is a large drawer with more width for content.
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="plain" @click="open = false">Cancel</Button>
              <Button variant="primary" @click="open = false">Confirm</Button>
            </div>
          </template>
        </Drawer>
      </div>
    `
  })
}

// ---------------------------
// Full Size Drawer
// ---------------------------
export const FullSize: Story = {
  args: { title: 'Full Size Drawer', size: 'full' },
  render: (args) => ({
    components: { Drawer, Button },
    setup() { const open = ref(false); return { args, open } },
    template: `
      <div>
        <Button @click="open = true">Open Full Size Drawer</Button>
        <Drawer v-model:open="open" v-bind="args">
          <p class="text-sm text-gray-600">
            This drawer takes the full available space.
          </p>
          <template #footer>
            <div class="flex justify-end gap-3">
              <Button variant="plain" @click="open = false">Cancel</Button>
              <Button variant="primary" @click="open = false">Confirm</Button>
            </div>
          </template>
        </Drawer>
      </div>
    `
  })
}