import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from '../components/Badge.vue'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info', 'neutral'],
      description: 'Color variant of the badge'
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline'],
      description: 'Visual variant style'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge'
    },
    rounded: {
      control: 'boolean',
      description: 'Fully rounded corners'
    },
    closable: {
      control: 'boolean',
      description: 'Show close button'
    }
  }
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary Badge'
  }
}

export const Success: Story = {
  args: {
    color: 'success',
    label: 'Success'
  }
}

export const Warning: Story = {
  args: {
    color: 'warning',
    label: 'Warning'
  }
}

export const Error: Story = {
  args: {
    color: 'error',
    label: 'Error'
  }
}

export const Info: Story = {
  args: {
    color: 'info',
    label: 'Info'
  }
}

export const Neutral: Story = {
  args: {
    color: 'neutral',
    label: 'Neutral'
  }
}

export const SolidVariant: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    label: 'Solid'
  }
}

export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    color: 'success',
    label: 'Outline'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Badge'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Badge'
  }
}

export const Rounded: Story = {
  args: {
    rounded: true,
    label: 'Rounded Badge'
  }
}

export const Closable: Story = {
  args: {
    closable: true,
    label: 'Closable Badge'
  }
}

export const WithLeadingIcon: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        <template #leading>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </template>
        With Icon
      </Badge>
    `
  })
}

export const WithTrailingIcon: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `
      <Badge v-bind="args">
        Badge
        <template #trailing>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </template>
      </Badge>
    `
  }),
  args: {
    color: 'success'
  }
}

export const AllColors: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge color="primary" label="Primary" />
        <Badge color="success" label="Success" />
        <Badge color="warning" label="Warning" />
        <Badge color="error" label="Error" />
        <Badge color="info" label="Info" />
        <Badge color="neutral" label="Neutral" />
      </div>
    `
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="soft" color="primary" label="Soft" />
        <Badge variant="solid" color="primary" label="Solid" />
        <Badge variant="outline" color="primary" label="Outline" />
      </div>
    `
  })
}

export const AllSizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex items-center flex-wrap gap-2">
        <Badge size="sm" label="Small" />
        <Badge size="md" label="Medium" />
        <Badge size="lg" label="Large" />
      </div>
    `
  })
}

export const StatusBadges: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge color="success" rounded>
          <template #leading>
            <span class="w-2 h-2 rounded-full bg-green-600"></span>
          </template>
          Active
        </Badge>
        <Badge color="warning" rounded>
          <template #leading>
            <span class="w-2 h-2 rounded-full bg-yellow-600"></span>
          </template>
          Pending
        </Badge>
        <Badge color="error" rounded>
          <template #leading>
            <span class="w-2 h-2 rounded-full bg-red-600"></span>
          </template>
          Inactive
        </Badge>
        <Badge color="neutral" rounded>
          <template #leading>
            <span class="w-2 h-2 rounded-full bg-gray-600"></span>
          </template>
          Draft
        </Badge>
      </div>
    `
  })
}

export const NumberBadges: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-4">
        <div class="relative inline-block">
          <button class="px-4 py-2 bg-gray-100 rounded">
            Messages
          </button>
          <Badge
            color="error"
            variant="solid"
            size="sm"
            rounded
            class="absolute -top-1 -right-1"
            label="3"
          />
        </div>

        <div class="relative inline-block">
          <button class="px-4 py-2 bg-gray-100 rounded">
            Notifications
          </button>
          <Badge
            color="primary"
            variant="solid"
            size="sm"
            rounded
            class="absolute -top-1 -right-1"
            label="99+"
          />
        </div>

        <div class="relative inline-block">
          <button class="px-4 py-2 bg-gray-100 rounded">
            Cart
          </button>
          <Badge
            color="success"
            variant="solid"
            size="sm"
            rounded
            class="absolute -top-1 -right-1"
            label="12"
          />
        </div>
      </div>
    `
  })
}
