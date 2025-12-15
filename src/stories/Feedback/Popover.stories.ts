import type { Meta, StoryObj } from '@storybook/vue3'
import Popover from '../../components/Popover.vue'
import Button from '../../components/Button.vue'

const meta = {
  title: 'Feedback/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side of the trigger'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment'
    },
    modal: {
      control: 'boolean',
      description: 'Modal behavior'
    }
  }
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      return { args }
    },
    template: `
      <Popover v-bind="args">
        <template #trigger>
          <Button variant="outline">Open Popover</Button>
        </template>

        <div class="w-80">
          <h3 class="font-semibold text-gray-900 mb-2">About Popover</h3>
          <p class="text-sm text-gray-600">
            This is a popover component. It can contain any content you want, including forms, lists, or custom layouts.
          </p>
        </div>
      </Popover>
    `
  })
}

export const WithCloseButton: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      return { args }
    },
    template: `
      <Popover v-bind="args">
        <template #trigger>
          <Button>Open with Close</Button>
        </template>

        <div class="w-72 pr-6">
          <h3 class="font-semibold text-gray-900 mb-2">Notifications</h3>
          <div class="space-y-2">
            <div class="text-sm">
              <p class="font-medium text-gray-900">New message</p>
              <p class="text-gray-600">You have a new message from John</p>
            </div>
            <div class="text-sm">
              <p class="font-medium text-gray-900">Update available</p>
              <p class="text-gray-600">A new version is ready to install</p>
            </div>
          </div>
        </div>

        <template #close>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </template>
      </Popover>
    `
  })
}

export const SideTop: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      return { args }
    },
    template: `
      <div class="pt-40">
        <Popover v-bind="args">
          <template #trigger>
            <Button variant="outline">Top Popover</Button>
          </template>

          <div class="w-64">
            <p class="text-sm text-gray-700">This popover opens on top of the trigger button.</p>
          </div>
        </Popover>
      </div>
    `
  }),
  args: {
    side: 'top'
  }
}

export const SideRight: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      return { args }
    },
    template: `
      <Popover v-bind="args">
        <template #trigger>
          <Button variant="outline">Right Popover</Button>
        </template>

        <div class="w-64">
          <p class="text-sm text-gray-700">This popover opens to the right of the trigger.</p>
        </div>
      </Popover>
    `
  }),
  args: {
    side: 'right'
  }
}

export const FormInPopover: Story = {
  render: () => ({
    components: { Popover, Button },
    template: `
      <Popover>
        <template #trigger>
          <Button variant="primary">Add Comment</Button>
        </template>

        <div class="w-80">
          <h3 class="font-semibold text-gray-900 mb-3">Add a comment</h3>
          <form class="space-y-3">
            <div>
              <textarea
                class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                rows="3"
                placeholder="Write your comment..."
              ></textarea>
            </div>
            <div class="flex justify-end gap-2">
              <Button size="sm" variant="outline">Cancel</Button>
              <Button size="sm" variant="primary">Submit</Button>
            </div>
          </form>
        </div>
      </Popover>
    `
  })
}

export const UserProfile: Story = {
  render: () => ({
    components: { Popover, Button },
    template: `
      <Popover>
        <template #trigger>
          <button class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <span class="text-sm font-medium">John Doe</span>
          </button>
        </template>

        <div class="w-64">
          <div class="flex items-center gap-3 pb-3 border-b border-gray-200">
            <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-lg">
              JD
            </div>
            <div>
              <p class="font-semibold text-gray-900">John Doe</p>
              <p class="text-sm text-gray-600">john@example.com</p>
            </div>
          </div>

          <div class="py-2 space-y-1">
            <button class="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100">
              Profile
            </button>
            <button class="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100">
              Settings
            </button>
            <button class="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100">
              Billing
            </button>
          </div>

          <div class="pt-2 border-t border-gray-200">
            <button class="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 text-red-600">
              Sign out
            </button>
          </div>
        </div>
      </Popover>
    `
  })
}
