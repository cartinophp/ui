import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from '../../components/Icon.vue'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Icon name (using Iconify format)'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Icon size'
    }
  }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

// Basic story
export const Basic: Story = {
  args: {
    name: 'solar:home-2-bold',
    size: 'md'
  }
}

// Sizes story
export const Sizes: Story = {
  args: {
    name: 'solar:home-2-bold',
    size: 'md'
  },
  render: (args) => ({
    components: { Icon },
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-4">
        <Icon v-bind="args" size="xs" />
        <Icon v-bind="args" size="sm" />
        <Icon v-bind="args" size="md" />
        <Icon v-bind="args" size="lg" />
        <Icon v-bind="args" size="xl" />
      </div>
    `
  })
}

// Common icons story
export const CommonIcons: Story = {
  args: {
    name: 'solar:home-2-bold',
    size: 'lg'
  },
  render: (args) => ({
    components: { Icon },
    setup() { return { args } },
    template: `
      <div class="grid grid-cols-6 gap-4">
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:home-2-bold" />
          <span class="text-xs">Home</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:user-bold" />
          <span class="text-xs">User</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:settings-bold" />
          <span class="text-xs">Settings</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:bell-bold" />
          <span class="text-xs">Bell</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:letter-bold" />
          <span class="text-xs">Mail</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:heart-bold" />
          <span class="text-xs">Heart</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:minimalistic-magnifer-bold" />
          <span class="text-xs">Search</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:add-circle-bold" />
          <span class="text-xs">Plus</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:trash-bin-trash-bold" />
          <span class="text-xs">Trash</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:pen-bold" />
          <span class="text-xs">Edit</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:check-circle-bold" />
          <span class="text-xs">Check</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon v-bind="args" name="solar:close-circle-bold" />
          <span class="text-xs">Close</span>
        </div>
      </div>
    `
  })
}

// Colored icons story
export const Colored: Story = {
  args: {
    name: 'solar:home-2-bold',
    size: 'lg'
  },
  render: (args) => ({
    components: { Icon },
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-4">
        <Icon v-bind="args" name="solar:home-2-bold" class="text-blue-500" />
        <Icon v-bind="args" name="solar:heart-bold" class="text-red-500" />
        <Icon v-bind="args" name="solar:check-circle-bold" class="text-green-500" />
        <Icon v-bind="args" name="solar:close-circle-bold" class="text-red-500" />
        <Icon v-bind="args" name="solar:bell-bold" class="text-yellow-500" />
      </div>
    `
  })
}
// Closable X icon story
export const ClosableX: Story = {
  args: {
    name: 'solar:close-circle-bold',
    size: 'lg'
  },
  render: (args) => ({
    components: { Icon },
    setup() { return { args } },
    template: `
      <div class="flex items-center gap-4">
        <Icon v-bind="args" />
        <span class="text-xs">Closable X (22px)</span>
      </div>
    `
  })
}