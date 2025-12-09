import type { Meta, StoryObj } from '@storybook/vue3'
import UBadge from '../runtime/components/Badge.vue'

const meta = {
  title: 'Components/Badge',
  component: UBadge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'subtle']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
} satisfies Meta<typeof UBadge>

export default meta

export const Default: Story = {
  args: {
    label: 'Badge',
    color: 'primary',
    variant: 'solid',
    size: 'md'
  }
}

export const WithIcon: Story = {
  args: {
    label: 'New',
    color: 'success',
    variant: 'soft',
    size: 'sm',
    icon: 'i-heroicons-sparkles'
  }
}

export const Outlined: Story = {
  args: {
    label: 'Beta',
    color: 'info',
    variant: 'outline',
    size: 'sm'
  }
}

export const Subtle: Story = {
  args: {
    label: 'Draft',
    color: 'warning',
    variant: 'subtle',
    size: 'md'
  }
}

export const WithDot: Story = {
  args: {
    label: 'Active',
    color: 'success',
    variant: 'soft',
    size: 'sm',
    dot: true
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { UBadge },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <UBadge label="Extra Small" size="xs" color="primary" />
        <UBadge label="Small" size="sm" color="primary" />
        <UBadge label="Medium" size="md" color="primary" />
        <UBadge label="Large" size="lg" color="primary" />
      </div>
    `
  })
}

export const Colors: Story = {
  render: () => ({
    components: { UBadge },
    template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <UBadge label="Primary" color="primary" variant="soft" />
        <UBadge label="Secondary" color="secondary" variant="soft" />
        <UBadge label="Success" color="success" variant="soft" />
        <UBadge label="Info" color="info" variant="soft" />
        <UBadge label="Warning" color="warning" variant="soft" />
        <UBadge label="Error" color="error" variant="soft" />
        <UBadge label="Neutral" color="neutral" variant="soft" />
      </div>
    `
  })
}
