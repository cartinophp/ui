import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Dialog from './Dialog.vue'
import Button from './Button.vue'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Dialog open state (v-model)'
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state'
    }
  }
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Dialog v-model:open="isOpen" v-bind="args">
        <template #trigger>
          <Button variant="primary">Open Dialog</Button>
        </template>

        <template #title>
          Titolo del Dialog
        </template>

        <template #description>
          Questa è una breve descrizione del dialog che spiega cosa fa.
        </template>

        <div class="space-y-4">
          <p class="text-sm text-gray-700">
            Questo è il contenuto principale del dialog. Puoi inserire qui qualsiasi contenuto desideri.
          </p>

          <div class="flex justify-end gap-3">
            <Button variant="outline" @click="isOpen = false">
              Annulla
            </Button>
            <Button variant="primary" @click="isOpen = false">
              Conferma
            </Button>
          </div>
        </div>
      </Dialog>
    `
  })
}

export const WithoutDescription: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Dialog v-model:open="isOpen" v-bind="args">
        <template #trigger>
          <Button variant="primary">Open Dialog</Button>
        </template>

        <template #title>
          Dialog Senza Descrizione
        </template>

        <div class="space-y-4">
          <p class="text-sm text-gray-700">
            Questo dialog non ha una descrizione, solo il titolo e il contenuto.
          </p>

          <div class="flex justify-end">
            <Button variant="primary" @click="isOpen = false">
              Chiudi
            </Button>
          </div>
        </div>
      </Dialog>
    `
  })
}

export const Confirmation: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false)
      const handleConfirm = () => {
        alert('Confermato!')
        isOpen.value = false
      }
      return { args, isOpen, handleConfirm }
    },
    template: `
      <Dialog v-model:open="isOpen" v-bind="args">
        <template #trigger>
          <Button variant="outline">Elimina Account</Button>
        </template>

        <template #title>
          Sei sicuro?
        </template>

        <template #description>
          Questa azione non può essere annullata. Il tuo account sarà eliminato permanentemente.
        </template>

        <div class="space-y-4">
          <div class="rounded-lg bg-red-50 p-4">
            <p class="text-sm text-red-800">
              ⚠️ Attenzione: questa è un'azione irreversibile!
            </p>
          </div>

          <div class="flex justify-end gap-3">
            <Button variant="outline" @click="isOpen = false">
              Annulla
            </Button>
            <Button variant="primary" @click="handleConfirm" class="!bg-red-600 hover:!bg-red-700">
              Elimina Account
            </Button>
          </div>
        </div>
      </Dialog>
    `
  })
}

export const FormDialog: Story = {
  render: (args) => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false)
      const formData = ref({
        name: '',
        email: ''
      })

      const handleSubmit = () => {
        alert(`Form submitted: ${JSON.stringify(formData.value)}`)
        isOpen.value = false
      }

      return { args, isOpen, formData, handleSubmit }
    },
    template: `
      <Dialog v-model:open="isOpen" v-bind="args">
        <template #trigger>
          <Button variant="primary">Aggiungi Utente</Button>
        </template>

        <template #title>
          Nuovo Utente
        </template>

        <template #description>
          Inserisci i dettagli del nuovo utente
        </template>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mario Rossi"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="mario.rossi@example.com"
              required
            />
          </div>

          <div class="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" @click="isOpen = false">
              Annulla
            </Button>
            <Button type="submit" variant="primary">
              Salva
            </Button>
          </div>
        </form>
      </Dialog>
    `
  })
}
