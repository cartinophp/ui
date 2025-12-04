import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UiModal from '../../../../src/runtime/components/Modal.vue'
import UiButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Overlay/Modal',
  component: UiModal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    }
  }
} satisfies Meta<typeof UiModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UiModal, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Modal" />
        <ui-modal v-model="isOpen" title="Modal Title">
          <p class="text-sm text-gray-600">
            This is the modal content. You can put any content here.
          </p>
        </ui-modal>
      </div>
    `
  })
}

export const WithFooter: Story = {
  render: () => ({
    components: { UiModal, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Modal" />
        <ui-modal v-model="isOpen" title="Confirm Action">
          <p class="text-sm text-gray-600 mb-4">
            Are you sure you want to proceed with this action?
          </p>
          <template #footer>
            <div class="flex justify-end gap-2">
              <ui-button @click="isOpen = false" label="Cancel" variant="ghost" />
              <ui-button @click="isOpen = false" label="Confirm" />
            </div>
          </template>
        </ui-modal>
      </div>
    `
  })
}

export const Small: Story = {
  render: () => ({
    components: { UiModal, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Small Modal" />
        <ui-modal v-model="isOpen" title="Small Modal" size="sm">
          <p class="text-sm text-gray-600">
            This is a small modal.
          </p>
        </ui-modal>
      </div>
    `
  })
}

export const Large: Story = {
  render: () => ({
    components: { UiModal, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Large Modal" />
        <ui-modal v-model="isOpen" title="Large Modal" size="lg">
          <p class="text-sm text-gray-600">
            This is a large modal with more content space.
          </p>
        </ui-modal>
      </div>
    `
  })
}

export const Fullscreen: Story = {
  render: () => ({
    components: { UiModal, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Fullscreen Modal" />
        <ui-modal v-model="isOpen" title="Fullscreen Modal" fullscreen>
          <p class="text-sm text-gray-600">
            This modal takes up the entire screen.
          </p>
        </ui-modal>
      </div>
    `
  })
}

export const PreventClose: Story = {
  render: () => ({
    components: { UiModal, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = true" label="Open Modal" />
        <ui-modal v-model="isOpen" title="Cannot Close Outside" :prevent-close="true">
          <p class="text-sm text-gray-600 mb-4">
            This modal can only be closed using the buttons.
          </p>
          <template #footer>
            <div class="flex justify-end">
              <ui-button @click="isOpen = false" label="Close" />
            </div>
          </template>
        </ui-modal>
      </div>
    `
  })
}
