import type { Meta, StoryObj } from '@storybook/vue3'
import UiKbd from '../../../../src/runtime/components/Kbd.vue'

const meta = {
  title: 'Components/DataDisplay/Kbd',
  component: UiKbd,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
} satisfies Meta<typeof UiKbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'K'
  }
}

export const ModifierKey: Story = {
  render: () => ({
    components: { UiKbd },
    template: `
      <div class="flex items-center gap-1">
        <ui-kbd value="Ctrl" />
        <span>+</span>
        <ui-kbd value="K" />
      </div>
    `
  })
}

export const CommandShortcut: Story = {
  render: () => ({
    components: { UiKbd },
    template: `
      <div class="flex items-center gap-1">
        <ui-kbd value="⌘" />
        <span>+</span>
        <ui-kbd value="Shift" />
        <span>+</span>
        <ui-kbd value="P" />
      </div>
    `
  })
}

export const Small: Story = {
  args: {
    value: 'Esc',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    value: 'Enter',
    size: 'lg'
  }
}

export const ArrowKeys: Story = {
  render: () => ({
    components: { UiKbd },
    template: `
      <div class="flex items-center gap-2">
        <ui-kbd value="←" />
        <ui-kbd value="↑" />
        <ui-kbd value="↓" />
        <ui-kbd value="→" />
      </div>
    `
  })
}

export const FunctionKeys: Story = {
  render: () => ({
    components: { UiKbd },
    template: `
      <div class="flex items-center gap-2">
        <ui-kbd value="F1" />
        <ui-kbd value="F2" />
        <ui-kbd value="F3" />
      </div>
    `
  })
}
