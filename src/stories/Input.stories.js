import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UInput from '../runtime/components/Input.vue'

const meta = {
  title: 'Components/Input',
  component: UInput,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral']
    },
    variant: {
      control: 'select',
      options: ['outline', 'subtle', 'ghost', 'none']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'url', 'tel', 'search']
    }
  }
} satisfies Meta<typeof UInput>

export default meta

export const Default: Story = {
  render: (args) => ({
    components: { UInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<UInput v-model="value" v-bind="args" />'
  }),
  args: {
    placeholder: 'Enter text...',
    color: 'primary',
    variant: 'outline',
    size: 'md'
  }
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { UInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<UInput v-model="value" v-bind="args" />'
  }),
  args: {
    placeholder: 'Search...',
    icon: 'i-heroicons-magnifying-glass',
    color: 'primary',
    variant: 'outline',
    size: 'md'
  }
}

export const WithTrailingIcon: Story = {
  render: (args) => ({
    components: { UInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<UInput v-model="value" v-bind="args" />'
  }),
  args: {
    placeholder: 'Email address',
    trailingIcon: 'i-heroicons-envelope',
    color: 'primary',
    variant: 'outline',
    size: 'md',
    type: 'email'
  }
}

export const Password: Story = {
  render: (args) => ({
    components: { UInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<UInput v-model="value" v-bind="args" />'
  }),
  args: {
    placeholder: 'Enter password',
    type: 'password',
    icon: 'i-heroicons-lock-closed',
    color: 'primary',
    variant: 'outline',
    size: 'md'
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { UInput },
    setup() {
      const value = ref('Disabled input')
      return { args, value }
    },
    template: '<UInput v-model="value" v-bind="args" />'
  }),
  args: {
    disabled: true,
    color: 'primary',
    variant: 'outline',
    size: 'md'
  }
}

export const Loading: Story = {
  render: (args) => ({
    components: { UInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<UInput v-model="value" v-bind="args" />'
  }),
  args: {
    placeholder: 'Loading...',
    loading: true,
    color: 'primary',
    variant: 'outline',
    size: 'md'
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { UInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <UInput v-model="value" placeholder="Extra Small" size="xs" />
        <UInput v-model="value" placeholder="Small" size="sm" />
        <UInput v-model="value" placeholder="Medium" size="md" />
        <UInput v-model="value" placeholder="Large" size="lg" />
        <UInput v-model="value" placeholder="Extra Large" size="xl" />
      </div>
    `
  })
}

export const Variants: Story = {
  render: () => ({
    components: { UInput },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <UInput v-model="value" placeholder="Outline" variant="outline" />
        <UInput v-model="value" placeholder="Subtle" variant="subtle" />
        <UInput v-model="value" placeholder="Ghost" variant="ghost" />
        <UInput v-model="value" placeholder="None" variant="none" />
      </div>
    `
  })
}
