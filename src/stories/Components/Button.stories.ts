import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/components/Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Button variant style'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute'
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Primary Button</Button>'
  })
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Secondary Button</Button>'
  })
}

export const Outline: Story = {
  args: {
    variant: 'outline'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Outline Button</Button>'
  })
}

export const Ghost: Story = {
  args: {
    variant: 'ghost'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Ghost Button</Button>'
  })
}

export const Small: Story = {
  args: {
    size: 'sm'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Small Button</Button>'
  })
}

export const Medium: Story = {
  args: {
    size: 'md'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Medium Button</Button>'
  })
}

export const Large: Story = {
  args: {
    size: 'lg'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Large Button</Button>'
  })
}

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Disabled Button</Button>'
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div class="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
        </div>
      </div>
    `
  })
}
