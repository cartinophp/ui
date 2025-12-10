import type { App } from 'vue'
import './style.css'

// Importa i componenti
import Accordion from './components/Accordion.vue'
import Alert from './components/Alert.vue'
import Badge from './components/Badge.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Checkbox from './components/Checkbox.vue'
import Dialog from './components/Dialog.vue'
import Dropdown from './components/Dropdown.vue'
import Input from './components/Input.vue'
import Switch from './components/Switch.vue'

// Plugin di installazione per Vue
export const install = (app: App) => {
  app.component('CartinoAccordion', Accordion)
  app.component('CartinoAlert', Alert)
  app.component('CartinoBadge', Badge)
  app.component('CartinoButton', Button)
  app.component('CartinoCard', Card)
  app.component('CartinoCheckbox', Checkbox)
  app.component('CartinoDialog', Dialog)
  app.component('CartinoDropdown', Dropdown)
  app.component('CartinoInput', Input)
  app.component('CartinoSwitch', Switch)
}

// Esporta i singoli componenti per l'uso individuale
export { Accordion, Alert, Badge, Button, Card, Checkbox, Dialog, Dropdown, Input, Switch }

// Esporta i tipi
export type { AccordionProps, AccordionItem } from './components/Accordion.vue'
export type { AlertProps } from './components/Alert.vue'
export type { BadgeProps } from './components/Badge.vue'
export type { ButtonProps } from './components/Button.vue'
export type { CardProps } from './components/Card.vue'
export type { CheckboxProps } from './components/Checkbox.vue'
export type { DialogProps } from './components/Dialog.vue'
export type { DropdownProps, DropdownItem } from './components/Dropdown.vue'
export type { InputProps } from './components/Input.vue'
export type { SwitchProps } from './components/Switch.vue'

// Re-esporta componenti Reka UI per convenienza
export * from 'reka-ui'
