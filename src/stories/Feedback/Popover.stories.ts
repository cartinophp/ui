// src/stories/Popover.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Popover from '../../components/Popover.vue';
import Button from '../../components/Button.vue';

const meta = {
  title: 'Feedback/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Side of the trigger',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment',
    },
    modal: {
      control: 'boolean',
      description: 'Show popover as modal (with overlay)',
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      return { args };
    },
    template: `
     <div class="flex items-center justify-center min-h-75">
  <Popover v-bind="args">
    <template #trigger>
      <button
        type="button"
        class="inline-flex items-center justify-center gap-1.5
               rounded-md border border-gray-300
               bg-white text-sm text-gray-900
               px-3 py-1.5
               shadow-sm
               hover:bg-gray-50
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
               disabled:cursor-not-allowed disabled:opacity-50"
      >
        Open Popover
      </button>
    </template>

    <template #content>
      <div class="w-80">
        <h3 class="font-semibold text-foreground mb-2">About Popover</h3>
        <p class="text-sm text-muted-foreground">
          This is a popover component. It can contain any content you want, including forms, lists, or custom layouts.
        </p>
      </div>
    </template>
  </Popover>
</div>
    `,
  }),
};

export const WithCloseButton: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      return { args };
    },
    template: `
     <div class="flex items-center justify-center min-h-75">
  <Popover v-bind="args">
    <template #trigger>
      <button
        type="button"
        class="inline-flex items-center justify-center gap-1.5
               rounded-md border border-gray-300
               bg-white text-sm text-gray-900
               px-3 py-1.5
               shadow-sm
               hover:bg-gray-50
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
               disabled:cursor-not-allowed disabled:opacity-50"
      >
        Open with Close
      </button>
    </template>

    <template #content>
      <div class="w-72 pr-6">
        <h3 class="font-semibold text-foreground mb-2">Notifications</h3>
        <div class="space-y-2">
          <div class="text-sm">
            <p class="font-medium text-foreground">New message</p>
            <p class="text-muted-foreground">You have a new message from John</p>
          </div>
          <div class="text-sm">
            <p class="font-medium text-foreground">Update available</p>
            <p class="text-muted-foreground">A new version is ready to install</p>
          </div>
        </div>
      </div>
    </template>

    <template #close>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </template>
  </Popover>
</div>
    `,
  }),
};

export const ModalPopover: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center min-h-75">
        <Popover v-bind="args">
          <template #trigger>
            <button
              type="button"
              class="inline-flex items-center justify-center gap-1.5
                     rounded-md border border-gray-300
                     bg-white text-sm text-gray-900
                     px-3 py-1.5
                     shadow-sm
                     hover:bg-gray-50
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                     disabled:cursor-not-allowed disabled:opacity-50"
            >
              Open Modal Popover
            </button>
          </template>

          <template #content>
            <div class="w-80">
              <h2 class="font-bold text-lg mb-3">Modal Popover</h2>
              <p class="text-sm text-muted-foreground mb-3">
                This popover appears with a subtle overlay and traps focus like a modal.
              </p>
              <div class="flex justify-end">
                <Button size="sm" variant="outline">
                  Close
                </Button>
              </div>
            </div>
          </template>
        </Popover>
      </div>
    `,
  }),
  args: {
    modal: true,
  },
}
export const SideTop: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center min-h-75">
        <Popover v-bind="args">
          <template #trigger>
            <button
              type="button"
              class="inline-flex items-center justify-center gap-1.5
                     rounded-md border border-gray-300
                     bg-white text-sm text-gray-900
                     px-3 py-1.5
                     shadow-sm
                     hover:bg-gray-50
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                     disabled:cursor-not-allowed disabled:opacity-50"
            >
              Top Popover
            </button>
          </template>

          <template #content>
            <div class="w-64">
              <p class="text-sm text-muted-foreground">
                This popover opens on top of the trigger button.
              </p>
            </div>
          </template>
        </Popover>
      </div>
    `,
  }),
  args: {
    side: 'top',
  },
};

export const SideRight: Story = {
  render: (args) => ({
    components: { Popover, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center justify-center min-h-75">
        <Popover v-bind="args">
          <template #trigger>
            <button
              type="button"
              class="inline-flex items-center justify-center gap-1.5
                     rounded-md border border-gray-300
                     bg-white text-sm text-gray-900
                     px-3 py-1.5
                     shadow-sm
                     hover:bg-gray-50
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                     disabled:cursor-not-allowed disabled:opacity-50"
            >
              Right Popover
            </button>
          </template>

          <template #content>
            <div class="w-64">
              <p class="text-sm text-muted-foreground">
                This popover opens to the right of the trigger.
              </p>
            </div>
          </template>
        </Popover>
      </div>
    `,
  }),
  args: {
    side: 'right',
  },
};

export const InputPopover: Story = {
  render: () => ({
    components: { Popover, Button },
    template: `
      <div class="flex items-center justify-center min-h-75">
        <Popover>
          <!-- Trigger -->
          <template #trigger>
            <button
              type="button"
              class="inline-flex items-center gap-2
                     rounded-md border border-gray-300
                     bg-white px-3 py-1.5 text-sm text-gray-900
                     shadow-sm hover:bg-gray-50
                     focus-visible:outline-none
                     focus-visible:ring-2 focus-visible:ring-blue-500
                     focus-visible:ring-offset-2"
            >
              Add Comment
            </button>
          </template>

          <!-- Content -->
          <template #content>
            <div class="w-72 space-y-3">
              <label class="block text-sm font-medium text-gray-900">
                New name
              </label>

              <input
                type="text"
                placeholder="Enter a name"
                class="w-full rounded-md
                       border border-gray-300
                       bg-white px-2.5 py-1.5
                       text-sm text-gray-900
                       shadow-sm
                       focus:border-blue-500
                       focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
              />

              <div class="flex justify-end gap-2 pt-1">
                <Button
                  size="sm"
                  variant="outline"
                  type="button"
                >
                  Cancel
                </Button>

                <Button
                  size="sm"
                  variant="primary"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </div>
          </template>
        </Popover>
      </div>
    `,
  }),
};

export const UserProfile: Story = {
  render: () => ({
    components: { Popover, Button },
    template: `
      <div class="flex items-center justify-center min-h-75">
        <Popover>
          <template #trigger>
            <button class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent">
              <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                JV
              </div>
              <span class="text-sm font-medium text-foreground">John Doe</span>
            </button>
          </template>

          <template #content>
            <div class="w-64">
              <div class="flex items-center gap-3 pb-3 border-b border-border">
                <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  JV
                </div>
                <div>
                  <p class="font-semibold text-foreground">John Doe</p>
                  <p class="text-sm text-muted-foreground">john@example.com</p>
                </div>
              </div>
              <div class="py-2 space-y-1">
                <button class="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent text-foreground">Profile</button>
                <button class="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent text-foreground">Settings</button>
                <button class="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent text-foreground">Billing</button>
              </div>
              <div class="pt-2 border-t border-border">
                <button class="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent text-error">Sign out</button>
              </div>
            </div>
          </template>
        </Popover>
      </div>
    `,
  }),
};