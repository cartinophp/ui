import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from '@/components/Icon.vue'

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

export const Default: Story = {
  args: {
    name: 'i-heroicons-home'
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div class="flex items-center gap-4">
        <Icon name="i-heroicons-home" size="xs" />
        <Icon name="i-heroicons-home" size="sm" />
        <Icon name="i-heroicons-home" size="md" />
        <Icon name="i-heroicons-home" size="lg" />
        <Icon name="i-heroicons-home" size="xl" />
      </div>
    `
  })
}

export const CommonIcons: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div class="grid grid-cols-6 gap-4">
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-home" />
          <span class="text-xs">Home</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-user" />
          <span class="text-xs">User</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-cog" />
          <span class="text-xs">Settings</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-bell" />
          <span class="text-xs">Bell</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-envelope" />
          <span class="text-xs">Mail</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-heart" />
          <span class="text-xs">Heart</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-search" />
          <span class="text-xs">Search</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-plus" />
          <span class="text-xs">Plus</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-trash" />
          <span class="text-xs">Trash</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-pencil" />
          <span class="text-xs">Edit</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-check" />
          <span class="text-xs">Check</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <Icon name="i-heroicons-x-mark" />
          <span class="text-xs">Close</span>
        </div>
      </div>
    `
  })
}

export const Colored: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div class="flex items-center gap-4">
        <Icon name="i-heroicons-home" class="text-blue-500" />
        <Icon name="i-heroicons-heart" class="text-red-500" />
        <Icon name="i-heroicons-check" class="text-green-500" />
        <Icon name="i-heroicons-x-mark" class="text-red-500" />
        <Icon name="i-heroicons-bell" class="text-yellow-500" />
      </div>
    `
  })
}
