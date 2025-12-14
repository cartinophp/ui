import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/components/Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Button color theme'
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'ghost', 'link'],
      description: 'Button variant style'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Button size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    },
    square: {
      control: 'boolean',
      description: 'Square shape (no horizontal padding)'
    },
    block: {
      control: 'boolean',
      description: 'Full width button'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute'
    }
  },
  args: {
    color: 'primary',
    variant: 'solid',
    size: 'md',
    disabled: false,
    loading: false,
    square: false,
    block: false,
    type: 'button',
    label: 'Button'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    color: 'primary',
    variant: 'solid',
    label: 'Solid Button'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Button'
  }
}

export const Soft: Story = {
  args: {
    variant: 'soft',
    label: 'Soft Button'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button'
  }
}

export const Link: Story = {
  args: {
    variant: 'link',
    label: 'Link Button'
  }
}

export const Success: Story = {
  args: {
    color: 'success',
    variant: 'solid',
    label: 'Success'
  }
}

export const Warning: Story = {
  args: {
    color: 'warning',
    variant: 'solid',
    label: 'Warning'
  }
}

export const Error: Story = {
  args: {
    color: 'error',
    variant: 'solid',
    label: 'Error'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Button'
  }
}

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Button'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Button'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Button'
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Loading...'
  }
}

export const Block: Story = {
  args: {
    block: true,
    label: 'Block Button'
  }
}

export const WithIcons: Story = {
  args: {
    leadingIcon: 'i-heroicons-plus',
    trailingIcon: 'i-heroicons-arrow-right',
    label: 'With Icons'
  }
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <Button color="primary" variant="solid">Solid</Button>
          <Button color="primary" variant="outline">Outline</Button>
          <Button color="primary" variant="soft">Soft</Button>
          <Button color="primary" variant="ghost">Ghost</Button>
          <Button color="primary" variant="link">Link</Button>
        </div>
        <div class="flex flex-wrap gap-4">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
          <Button color="info">Info</Button>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <Button size="xs">XS</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">XL</Button>
        </div>
      </div>
    `
  })
}
