import type { Meta, StoryObj } from '@storybook/vue3'
import USeparator from '../../../../src/runtime/components/Separator.vue'

const meta = {
  title: 'Components/DataDisplay/Separator',
  component: UiSeparator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
} satisfies Meta<typeof UiSeparator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal'
  }
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical'
  },
  render: (args) => ({
    components: { UiSeparator },
    setup() {
      return { args }
    },
    template: `
      <div class="flex items-center h-20">
        <span>Left</span>
        <ui-separator v-bind="args" class="mx-4" />
        <span>Right</span>
      </div>
    `
  })
}

export const WithLabel: Story = {
  args: {
    label: 'OR',
    orientation: 'horizontal'
  }
}

export const Small: Story = {
  args: {
    orientation: 'horizontal',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    orientation: 'horizontal',
    size: 'lg'
  }
}

export const InContent: Story = {
  render: () => ({
    components: { UiSeparator },
    template: `
      <div class="space-y-4">
        <p>This is some content above the separator.</p>
        <ui-separator />
        <p>This is some content below the separator.</p>
      </div>
    `
  })
}
