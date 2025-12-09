import type { Meta, StoryObj } from '@storybook/vue3'
import UTooltip from '../../../../src/runtime/components/Tooltip.vue'
import UButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Overlay/Tooltip',
  component: UiTooltip,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left']
    }
  }
} satisfies Meta<typeof UiTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'This is a tooltip'
  },
  render: (args) => ({
    components: { UiTooltip, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-tooltip v-bind="args">
        <ui-button label="Hover me" />
      </ui-tooltip>
    `
  })
}

export const Top: Story = {
  args: {
    text: 'Tooltip on top',
    side: 'top'
  },
  render: (args) => ({
    components: { UiTooltip, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-tooltip v-bind="args">
        <ui-button label="Top" />
      </ui-tooltip>
    `
  })
}

export const Right: Story = {
  args: {
    text: 'Tooltip on right',
    side: 'right'
  },
  render: (args) => ({
    components: { UiTooltip, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-tooltip v-bind="args">
        <ui-button label="Right" />
      </ui-tooltip>
    `
  })
}

export const Bottom: Story = {
  args: {
    text: 'Tooltip on bottom',
    side: 'bottom'
  },
  render: (args) => ({
    components: { UiTooltip, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-tooltip v-bind="args">
        <ui-button label="Bottom" />
      </ui-tooltip>
    `
  })
}

export const Left: Story = {
  args: {
    text: 'Tooltip on left',
    side: 'left'
  },
  render: (args) => ({
    components: { UiTooltip, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-tooltip v-bind="args">
        <ui-button label="Left" />
      </ui-tooltip>
    `
  })
}

export const LongText: Story = {
  args: {
    text: 'This is a very long tooltip text that demonstrates how the tooltip handles longer content.'
  },
  render: (args) => ({
    components: { UiTooltip, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-tooltip v-bind="args">
        <ui-button label="Long tooltip" />
      </ui-tooltip>
    `
  })
}

export const WithShortcut: Story = {
  args: {
    text: 'Save',
    shortcuts: ['⌘', 'S']
  },
  render: (args) => ({
    components: { UiTooltip, UiButton },
    setup() {
      return { args }
    },
    template: `
      <ui-tooltip v-bind="args">
        <ui-button icon="i-heroicons-document-arrow-down" />
      </ui-tooltip>
    `
  })
}
