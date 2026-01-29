import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Input from '@/components/Input.vue'

const meta = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the input'
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Color variant'
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link'],
      description: 'Visual variant style'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    readonly: {
      control: 'boolean',
      description: 'Readonly state'
    },
    required: {
      control: 'boolean',
      description: 'Required field'
    }
  },
  args: {
    variant: 'outline',
    size: 'md',
    color: 'primary'
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-model="value" v-bind="args" />'
  }),
  args: {
    placeholder: 'Enter text...'
  }
}

export const WithLabel: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-model="value" v-bind="args" />'
  }),
  args: {
    label: 'Full Name',
    placeholder: 'John Doe'
  }
}

export const Required: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-model="value" v-bind="args" />'
  }),
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
    required: true
  }
}

export const WithError: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('invalid-email')
      return { args, value }
    },
    template: '<Input v-model="value" v-bind="args" />'
  }),
  args: {
    label: 'Email',
    type: 'email',
    color: 'error',
    error: 'Please enter a valid email address'
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const xs = ref('')
      const sm = ref('')
      const md = ref('')
      const lg = ref('')
      const xl = ref('')
      return { xs, sm, md, lg, xl }
    },
    template: `
      <div class="space-y-4">
        <Input v-model="xs" size="xs" label="Extra Small" placeholder="XS input" />
        <Input v-model="sm" size="sm" label="Small" placeholder="SM input" />
        <Input v-model="md" size="md" label="Medium" placeholder="MD input" />
        <Input v-model="lg" size="lg" label="Large" placeholder="LG input" />
        <Input v-model="xl" size="xl" label="Extra Large" placeholder="XL input" />
      </div>
    `
  })
}

export const Variants: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const solid = ref('')
      const outline = ref('')
      const soft = ref('')
      const subtle = ref('')
      const ghost = ref('')
      const link = ref('')
      return { solid, outline, soft, subtle, ghost, link }
    },
    template: `
      <div class="space-y-4">
        <Input v-model="solid" variant="solid" label="Solid" placeholder="Solid variant" />
        <Input v-model="outline" variant="outline" label="Outline" placeholder="Outline variant (default)" />
        <Input v-model="soft" variant="soft" label="Soft" placeholder="Soft variant" />
        <Input v-model="subtle" variant="subtle" label="Subtle" placeholder="Subtle variant" />
        <Input v-model="ghost" variant="ghost" label="Ghost" placeholder="Ghost variant" />
        <Input v-model="link" variant="link" label="Link" placeholder="Link variant" />
      </div>
    `
  })
}

export const WithIcons: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<Input v-model="value" v-bind="args" />'
  }),
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leadingIcon: 'solar:magnifer-linear',
    trailingIcon: 'solar:close-circle-linear'
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Disabled value')
      return { args, value }
    },
    template: '<Input v-model="value" v-bind="args" />'
  }),
  args: {
    label: 'Disabled Input',
    disabled: true
  }
}

export const Readonly: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('Readonly value')
      return { args, value }
    },
    template: '<Input v-model="value" v-bind="args" />'
  }),
  args: {
    label: 'Readonly Input',
    readonly: true
  }
}

export const ResponsiveSizes: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="space-y-4">
        <p class="text-sm text-muted-foreground">Inputs are larger on mobile for better touch targets. Resize the viewport to see the difference.</p>
        <Input v-model="value" size="md" label="Medium Input" placeholder="Touch-friendly on mobile" leading-icon="solar:user-linear" />
      </div>
    `
  })
}

export const FormExample: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const firstName = ref('')
      const lastName = ref('')
      const email = ref('')
      const phone = ref('')
      return { firstName, lastName, email, phone }
    },
    template: `
      <form class="space-y-4 max-w-md">
        <div class="grid grid-cols-2 gap-4">
          <Input
            v-model="firstName"
            label="First Name"
            placeholder="John"
            required
          />
          <Input
            v-model="lastName"
            label="Last Name"
            placeholder="Doe"
            required
          />
        </div>
        <Input
          v-model="email"
          type="email"
          label="Email Address"
          placeholder="john.doe@example.com"
          leading-icon="solar:letter-linear"
          required
        />
        <Input
          v-model="phone"
          type="tel"
          label="Phone Number"
          placeholder="+1 (555) 000-0000"
          leading-icon="solar:phone-linear"
          hint="Include country code"
        />
      </form>
    `
  })
}
