import type { Meta, StoryObj } from '@storybook/vue3'
import Progress from '@/components/Progress.vue'

const meta: Meta<typeof Progress> = {
  title: 'DataDisplay/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info']
    },
    variant: {
      control: 'select',
      options: ['default', 'striped']
    },
    valueFormat: {
      control: 'select',
      options: ['percentage', 'fraction']
    },
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 45,
    label: 'Progress'
  }
}

export const WithValue: Story = {
  args: {
    value: 65,
    label: 'Loading...',
    showValue: true
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-medium mb-2">Small</h4>
          <Progress :value="30" size="sm" />
        </div>
        <div>
          <h4 class="text-sm font-medium mb-2">Medium (default)</h4>
          <Progress :value="60" size="md" />
        </div>
        <div>
          <h4 class="text-sm font-medium mb-2">Large</h4>
          <Progress :value="80" size="lg" />
        </div>
      </div>
    `
  })
}

export const Colors: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-medium mb-2">Primary</h4>
          <Progress :value="50" color="primary" />
        </div>
        <div>
          <h4 class="text-sm font-medium mb-2">Success</h4>
          <Progress :value="75" color="success" />
        </div>
        <div>
          <h4 class="text-sm font-medium mb-2">Warning</h4>
          <Progress :value="40" color="warning" />
        </div>
        <div>
          <h4 class="text-sm font-medium mb-2">Error</h4>
          <Progress :value="25" color="error" />
        </div>
        <div>
          <h4 class="text-sm font-medium mb-2">Info</h4>
          <Progress :value="60" color="info" />
        </div>
      </div>
    `
  })
}

export const WithSteps: Story = {
  args: {
    value: 3,
    max: 5,
    label: 'Step 3 of 5',
    showValue: true,
    valueFormat: 'fraction',
    steps: 5
  }
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Loading...'
  }
}

export const Animated: Story = {
  render: () => ({
    components: { Progress },
    data() {
      return {
        progress: 0,
        interval: null as number | null
      }
    },
    mounted() {
      this.startAnimation()
    },
    beforeUnmount() {
      if (this.interval) {
        clearInterval(this.interval)
      }
    },
    methods: {
      startAnimation() {
        this.interval = setInterval(() => {
          this.progress += 1
          if (this.progress >= 100) {
            this.progress = 0
          }
        }, 50)
      }
    },
    template: `
      <Progress 
        :value="progress" 
        label="Animated Progress" 
        :show-value="true"
        :animated="true"
      />
    `
  })
}

export const FileUpload: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="space-y-6">
        <div>
          <h4 class="text-sm font-medium mb-2">File Upload Progress</h4>
          <Progress 
            :value="85" 
            label="document.pdf" 
            :show-value="true"
            color="success"
            :animated="true"
          />
        </div>
        
        <div>
          <h4 class="text-sm font-medium mb-2">Multiple File Upload</h4>
          <div class="space-y-2">
            <Progress :value="100" label="image1.jpg" :show-value="true" color="success" />
            <Progress :value="67" label="image2.jpg" :show-value="true" color="primary" :animated="true" />
            <Progress :value="23" label="image3.jpg" :show-value="true" color="primary" :animated="true" />
          </div>
        </div>
      </div>
    `
  })
}

export const TaskCompletion: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="space-y-4">
        <div>
          <h4 class="text-lg font-semibold mb-4">Project Tasks</h4>
          
          <div class="space-y-3">
            <Progress 
              :value="4"
              :max="4" 
              label="Design Phase"
              :show-value="true"
              value-format="fraction"
              color="success"
              :steps="4"
            />
            
            <Progress 
              :value="7"
              :max="10" 
              label="Development Phase"
              :show-value="true"
              value-format="fraction"
              color="primary"
              :steps="10"
            />
            
            <Progress 
              :value="0"
              :max="3" 
              label="Testing Phase"
              :show-value="true"
              value-format="fraction"
              color="warning"
              :steps="3"
            />
          </div>
        </div>
      </div>
    `
  })
}
