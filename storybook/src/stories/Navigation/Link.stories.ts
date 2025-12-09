import type { Meta, StoryObj } from '@storybook/vue3'
import ULink from '../../../../src/runtime/components/Link.vue'

const meta = {
  title: 'Components/Navigation/Link',
  component: UiLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof UiLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    to: '#',
    label: 'Default Link'
  }
}

export const Primary: Story = {
  args: {
    to: '#',
    label: 'Primary Link',
    color: 'primary'
  }
}

export const WithIcon: Story = {
  args: {
    to: '#',
    label: 'Link with Icon',
    leadingIcon: 'i-heroicons-arrow-right'
  }
}

export const TrailingIcon: Story = {
  args: {
    to: '#',
    label: 'External Link',
    trailingIcon: 'i-heroicons-arrow-top-right-on-square'
  }
}

export const External: Story = {
  args: {
    to: 'https://example.com',
    label: 'External Link',
    external: true,
    target: '_blank'
  }
}

export const Inactive: Story = {
  args: {
    to: '#',
    label: 'Inactive Link',
    inactive: true
  }
}

export const Disabled: Story = {
  args: {
    to: '#',
    label: 'Disabled Link',
    disabled: true
  }
}

export const Small: Story = {
  args: {
    to: '#',
    label: 'Small Link',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    to: '#',
    label: 'Large Link',
    size: 'lg'
  }
}

export const AsButton: Story = {
  args: {
    to: '#',
    label: 'Link as Button',
    variant: 'solid',
    color: 'primary'
  }
}

export const UnderlineStyle: Story = {
  render: () => ({
    components: { UiLink },
    template: `
      <p class="text-gray-600">
        This is a paragraph with an
        <ui-link to="#" label="inline link" class="underline" />
        that is underlined.
      </p>
    `
  })
}

export const InText: Story = {
  render: () => ({
    components: { UiLink },
    template: `
      <p class="text-gray-600">
        Read our
        <ui-link to="#" label="documentation" color="primary" />
        for more information about this feature.
      </p>
    `
  })
}
