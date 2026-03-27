import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/components/Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'ghost', 'link'],
      description: 'Button visual style'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'],
      description: 'Button semantic color'
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
      description: 'Square shape (icon only)'
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
    variant: 'solid',
    color: 'primary',
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

export const Default: Story = {
  args: {
    label: 'Button'
  }
}

export const Solid: Story = {
  args: {
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

export const Colors: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="flex flex-wrap gap-3">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
          <Button color="info">Info</Button>
          <Button color="neutral">Neutral</Button>
        </div>
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap items-center gap-3">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    `
  })
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
    leadingIcon: 'solar:add-circle-linear',
    trailingIcon: 'solar:arrow-right-linear',
    label: 'With Icons'
  }
}

export const IconOnly: Story = {
  args: {
    leadingIcon: 'solar:heart-linear',
    square: true,
    label: undefined
  }
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium text-muted-foreground mb-3">Solid</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="solid" color="primary">Primary</Button>
            <Button variant="solid" color="secondary">Secondary</Button>
            <Button variant="solid" color="success">Success</Button>
            <Button variant="solid" color="warning">Warning</Button>
            <Button variant="solid" color="error">Error</Button>
            <Button variant="solid" color="info">Info</Button>
            <Button variant="solid" color="neutral">Neutral</Button>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-muted-foreground mb-3">Outline</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="outline" color="primary">Primary</Button>
            <Button variant="outline" color="secondary">Secondary</Button>
            <Button variant="outline" color="success">Success</Button>
            <Button variant="outline" color="warning">Warning</Button>
            <Button variant="outline" color="error">Error</Button>
            <Button variant="outline" color="info">Info</Button>
            <Button variant="outline" color="neutral">Neutral</Button>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-muted-foreground mb-3">Soft</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="soft" color="primary">Primary</Button>
            <Button variant="soft" color="secondary">Secondary</Button>
            <Button variant="soft" color="success">Success</Button>
            <Button variant="soft" color="warning">Warning</Button>
            <Button variant="soft" color="error">Error</Button>
            <Button variant="soft" color="info">Info</Button>
            <Button variant="soft" color="neutral">Neutral</Button>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-muted-foreground mb-3">Ghost</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="ghost" color="primary">Primary</Button>
            <Button variant="ghost" color="secondary">Secondary</Button>
            <Button variant="ghost" color="success">Success</Button>
            <Button variant="ghost" color="warning">Warning</Button>
            <Button variant="ghost" color="error">Error</Button>
            <Button variant="ghost" color="info">Info</Button>
            <Button variant="ghost" color="neutral">Neutral</Button>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-muted-foreground mb-3">Link</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="link" color="primary">Primary</Button>
            <Button variant="link" color="secondary">Secondary</Button>
            <Button variant="link" color="success">Success</Button>
            <Button variant="link" color="warning">Warning</Button>
            <Button variant="link" color="error">Error</Button>
            <Button variant="link" color="info">Info</Button>
            <Button variant="link" color="neutral">Neutral</Button>
          </div>
        </div>
      </div>
    `
  })
}

export const ResponsiveSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <p class="text-sm text-muted-foreground">Buttons are larger on mobile for better touch targets. Resize the viewport to see the difference.</p>
        <div class="flex flex-wrap items-center gap-3">
          <Button size="xs" leading-icon="solar:home-linear">XS</Button>
          <Button size="sm" leading-icon="solar:home-linear">SM</Button>
          <Button size="md" leading-icon="solar:home-linear">MD</Button>
          <Button size="lg" leading-icon="solar:home-linear">LG</Button>
          <Button size="xl" leading-icon="solar:home-linear">XL</Button>
        </div>
      </div>
    `
  })
}

export const IconButtons: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-3">
          <Button square size="xs" leading-icon="solar:heart-linear" />
          <Button square size="sm" leading-icon="solar:heart-linear" />
          <Button square size="md" leading-icon="solar:heart-linear" />
          <Button square size="lg" leading-icon="solar:heart-linear" />
          <Button square size="xl" leading-icon="solar:heart-linear" />
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <Button square variant="outline" leading-icon="solar:settings-linear" />
          <Button square variant="soft" leading-icon="solar:trash-bin-2-linear" color="error" />
          <Button square variant="ghost" leading-icon="solar:pen-linear" />
        </div>
      </div>
    `
  })
}
