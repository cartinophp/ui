import type { App } from 'vue'
import './style.css'

// Importa i componenti
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'

// Plugin di installazione per Vue
export const install = (app: App) => {
  app.component('CartinoButton', Button)
  app.component('CartinoDialog', Dialog)
}

// Esporta i singoli componenti per l'uso individuale
export { Button, Dialog }

// Esporta i tipi
export type { ButtonProps } from './components/Button.vue'
export type { DialogProps } from './components/Dialog.vue'

// Re-esporta componenti Reka UI per convenienza
export * from 'reka-ui'
