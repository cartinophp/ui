import type { Meta, StoryObj } from '@storybook/vue3'
import UiPopover from '../../../../src/runtime/components/Popover.vue'
import UiButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Overlay/Popover',
  component: UiPopover,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left']
    }
  }
} satisfies Meta<typeof UiPopover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UiPopover, UiButton },
    template: `
      <ui-popover>
        <ui-button label="Open Popover" />
        <template #content>
          <div class="p-4">
            <h3 class="font-semibold mb-2">Popover Title</h3>
            <p class="text-sm text-gray-600">
              This is the popover content.
            </p>
          </div>
        </template>
      </ui-popover>
    `
  })
}

export const Bottom: Story = {
  render: () => ({
    components: { UiPopover, UiButton },
    template: `
      <ui-popover side="bottom">
        <ui-button label="Open Below" />
        <template #content>
          <div class="p-4">
            <p class="text-sm">Popover opens below the button</p>
          </div>
        </template>
      </ui-popover>
    `
  })
}

export const WithActions: Story = {
  render: () => ({
    components: { UiPopover, UiButton },
    template: `
      <ui-popover>
        <ui-button label="Actions" />
        <template #content>
          <div class="p-2 min-w-[200px]">
            <button class="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
              Edit
            </button>
            <button class="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded">
              Duplicate
            </button>
            <button class="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded text-red-600">
              Delete
            </button>
          </div>
        </template>
      </ui-popover>
    `
  })
}

export const Form: Story = {
  render: () => ({
    components: { UiPopover, UiButton },
    template: `
      <ui-popover>
        <ui-button label="Add Comment" />
        <template #content>
          <div class="p-4 w-80">
            <h3 class="font-semibold mb-3">Add Comment</h3>
            <textarea
              class="w-full border rounded p-2 text-sm mb-3"
              rows="3"
              placeholder="Enter your comment..."
            ></textarea>
            <div class="flex justify-end gap-2">
              <button class="px-3 py-1 text-sm">Cancel</button>
              <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded">Save</button>
            </div>
          </div>
        </template>
      </ui-popover>
    `
  })
}

export const RichContent: Story = {
  render: () => ({
    components: { UiPopover, UiButton },
    template: `
      <ui-popover>
        <ui-button label="User Info" />
        <template #content>
          <div class="p-4 w-72">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 rounded-full bg-gray-200"></div>
              <div>
                <p class="font-semibold">John Doe</p>
                <p class="text-sm text-gray-600">@johndoe</p>
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-3">
              Software developer passionate about building great products.
            </p>
            <div class="flex gap-2">
              <button class="flex-1 px-3 py-1 text-sm border rounded">Follow</button>
              <button class="flex-1 px-3 py-1 text-sm bg-blue-600 text-white rounded">Message</button>
            </div>
          </div>
        </template>
      </ui-popover>
    `
  })
}
