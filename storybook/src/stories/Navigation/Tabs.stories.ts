import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UiTabs from '../../../../src/runtime/components/Tabs.vue'

const meta = {
  title: 'Components/Navigation/Tabs',
  component: UiTabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['pills', 'underline']
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
} satisfies Meta<typeof UiTabs>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { label: 'Tab 1', value: 'tab1' },
  { label: 'Tab 2', value: 'tab2' },
  { label: 'Tab 3', value: 'tab3' }
]

export const Default: Story = {
  args: {
    items,
    defaultValue: 'tab1'
  },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      return { args }
    },
    template: `
      <ui-tabs v-bind="args">
        <template #tab1>
          <div class="p-4">
            <h3 class="font-semibold mb-2">Tab 1 Content</h3>
            <p class="text-sm text-gray-600">This is the content for tab 1.</p>
          </div>
        </template>
        <template #tab2>
          <div class="p-4">
            <h3 class="font-semibold mb-2">Tab 2 Content</h3>
            <p class="text-sm text-gray-600">This is the content for tab 2.</p>
          </div>
        </template>
        <template #tab3>
          <div class="p-4">
            <h3 class="font-semibold mb-2">Tab 3 Content</h3>
            <p class="text-sm text-gray-600">This is the content for tab 3.</p>
          </div>
        </template>
      </ui-tabs>
    `
  })
}

export const Pills: Story = {
  args: {
    items,
    variant: 'pills',
    defaultValue: 'tab1'
  },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      return { args }
    },
    template: `
      <ui-tabs v-bind="args">
        <template #tab1>
          <div class="p-4">Content for tab 1</div>
        </template>
        <template #tab2>
          <div class="p-4">Content for tab 2</div>
        </template>
        <template #tab3>
          <div class="p-4">Content for tab 3</div>
        </template>
      </ui-tabs>
    `
  })
}

export const Underline: Story = {
  args: {
    items,
    variant: 'underline',
    defaultValue: 'tab1'
  },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      return { args }
    },
    template: `
      <ui-tabs v-bind="args">
        <template #tab1>
          <div class="p-4">Content for tab 1</div>
        </template>
        <template #tab2>
          <div class="p-4">Content for tab 2</div>
        </template>
        <template #tab3>
          <div class="p-4">Content for tab 3</div>
        </template>
      </ui-tabs>
    `
  })
}

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Profile', value: 'profile', icon: 'i-heroicons-user' },
      { label: 'Settings', value: 'settings', icon: 'i-heroicons-cog-6-tooth' },
      { label: 'Notifications', value: 'notifications', icon: 'i-heroicons-bell' }
    ],
    defaultValue: 'profile'
  },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      return { args }
    },
    template: `
      <ui-tabs v-bind="args">
        <template #profile>
          <div class="p-4">Profile settings content</div>
        </template>
        <template #settings>
          <div class="p-4">General settings content</div>
        </template>
        <template #notifications>
          <div class="p-4">Notification preferences content</div>
        </template>
      </ui-tabs>
    `
  })
}

export const Vertical: Story = {
  args: {
    items,
    orientation: 'vertical',
    defaultValue: 'tab1'
  },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      return { args }
    },
    template: `
      <ui-tabs v-bind="args">
        <template #tab1>
          <div class="p-4">
            <h3 class="font-semibold mb-2">Tab 1 Content</h3>
            <p class="text-sm text-gray-600">Vertical tabs layout.</p>
          </div>
        </template>
        <template #tab2>
          <div class="p-4">
            <h3 class="font-semibold mb-2">Tab 2 Content</h3>
            <p class="text-sm text-gray-600">More content here.</p>
          </div>
        </template>
        <template #tab3>
          <div class="p-4">
            <h3 class="font-semibold mb-2">Tab 3 Content</h3>
            <p class="text-sm text-gray-600">Even more content.</p>
          </div>
        </template>
      </ui-tabs>
    `
  })
}

export const WithDisabled: Story = {
  args: {
    items: [
      { label: 'Tab 1', value: 'tab1' },
      { label: 'Tab 2 (Disabled)', value: 'tab2', disabled: true },
      { label: 'Tab 3', value: 'tab3' }
    ],
    defaultValue: 'tab1'
  },
  render: (args) => ({
    components: { UiTabs },
    setup() {
      return { args }
    },
    template: `
      <ui-tabs v-bind="args">
        <template #tab1>
          <div class="p-4">Tab 1 content</div>
        </template>
        <template #tab2>
          <div class="p-4">Tab 2 content (disabled)</div>
        </template>
        <template #tab3>
          <div class="p-4">Tab 3 content</div>
        </template>
      </ui-tabs>
    `
  })
}
