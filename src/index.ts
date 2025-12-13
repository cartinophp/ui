import type { App } from 'vue'
import './style.css'
// Inizializza ed espone API tema globale minimale
export { ui } from './utils/ui'

// Importa i componenti
import Accordion from './components/Accordion.vue'
import Alert from './components/Alert.vue'
import Avatar from './components/Avatar.vue'
import Badge from './components/Badge.vue'
import Banner from './components/Banner.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Checkbox from './components/Checkbox.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import Chip from './components/Chip.vue'
import Command from './components/Command.vue'
import ContextMenu from './components/ContextMenu.vue'
import DataTable from './components/DataTable.vue'
import DatePicker from './components/DatePicker.vue'
import Dialog from './components/Dialog.vue'
import Divider from './components/Divider.vue'
import Drawer from './components/Drawer.vue'
import Dropdown from './components/Dropdown.vue'
import Icon from './components/Icon.vue'
import Input from './components/Input.vue'
import Link from './components/link.vue'
import Modal from './components/Modal.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import PageHeader from './components/PageHeader.vue'
import Pagination from './components/Pagination.vue'
import PinInput from './components/PinInput.vue'
import Popover from './components/Popover.vue'
import Progress from './components/Progress.vue'
import Radio from './components/Radio.vue'
import RadioGroup from './components/RadioGroup.vue'
import Select from './components/Select.vue'
import Separator from './components/Separator.vue'
import Sidebar from './components/Sidebar.vue'
import Skeleton from './components/Skeleton.vue'
import Slider from './components/Slider.vue'
import Stats from './components/Stats.vue'
import Switch from './components/Switch.vue'
import Table from './components/Table.vue'
import Tabs from './components/Tabs.vue'
import Textarea from './components/Textarea.vue'
import Toast from './components/Toast.vue'
import Tooltip from './components/Tooltip.vue'
import User from './components/user.vue'

// Plugin di installazione per Vue
export const install = (app: App) => {
  app.component('CartinoAccordion', Accordion)
  app.component('CartinoAlert', Alert)
  app.component('CartinoAvatar', Avatar)
  app.component('CartinoBadge', Badge)
  app.component('CartinoBanner', Banner)
  app.component('CartinoBreadcrumb', Breadcrumb)
  app.component('CartinoButton', Button)
  app.component('CartinoCard', Card)
  app.component('CartinoCheckbox', Checkbox)
  app.component('CartinoCheckboxGroup', CheckboxGroup)
  app.component('CartinoChip', Chip)
  app.component('CartinoCommand', Command)
  app.component('CartinoContextMenu', ContextMenu)
  app.component('CartinoDataTable', DataTable)
  app.component('CartinoDatePicker', DatePicker)
  app.component('CartinoDialog', Dialog)
  app.component('CartinoDivider', Divider)
  app.component('CartinoDrawer', Drawer)
  app.component('CartinoDropdown', Dropdown)
  app.component('CartinoIcon', Icon)
  app.component('CartinoInput', Input)
  app.component('CartinoLink', Link)
  app.component('CartinoModal', Modal)
  app.component('CartinoNavigationMenu', NavigationMenu)
  app.component('CartinoPageHeader', PageHeader)
  app.component('CartinoPagination', Pagination)
  app.component('CartinoPinInput', PinInput)
  app.component('CartinoPopover', Popover)
  app.component('CartinoProgress', Progress)
  app.component('CartinoRadio', Radio)
  app.component('CartinoRadioGroup', RadioGroup)
  app.component('CartinoSelect', Select)
  app.component('CartinoSeparator', Separator)
  app.component('CartinoSidebar', Sidebar)
  app.component('CartinoSkeleton', Skeleton)
  app.component('CartinoSlider', Slider)
  app.component('CartinoStats', Stats)
  app.component('CartinoSwitch', Switch)
  app.component('CartinoTable', Table)
  app.component('CartinoTabs', Tabs)
  app.component('CartinoTextarea', Textarea)
  app.component('CartinoToast', Toast)
  app.component('CartinoTooltip', Tooltip)
  app.component('CartinoUser', User)
}

// Esporta i singoli componenti per l'uso individuale
export {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Banner,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Chip,
  Command,
  ContextMenu,
  DataTable,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  Icon,
  Input,
  Link,
  Modal,
  NavigationMenu,
  PageHeader,
  Pagination,
  PinInput,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Separator,
  Sidebar,
  Skeleton,
  Slider,
  Stats,
  Switch,
  Table,
  Tabs,
  Textarea,
  Toast,
  Tooltip,
  User
}

// Esporta i tipi
export type { AccordionProps, AccordionItem } from './components/Accordion.vue'
export type { AlertProps } from './components/Alert.vue'
export type { BadgeProps } from './components/Badge.vue'
export type { ButtonProps } from './components/Button.vue'
export type { CardProps } from './components/Card.vue'
export type { CheckboxProps } from './components/Checkbox.vue'
export type { DialogProps } from './components/Dialog.vue'
export type { DropdownProps, DropdownItem } from './components/Dropdown.vue'
export type { SwitchProps } from './components/Switch.vue'
export type { SidebarProps, SidebarLink } from './components/Sidebar.vue'
export type { SkeletonProps } from './components/Skeleton.vue'
export type { TooltipProps } from './components/Tooltip.vue'
export type { CommandProps, CommandItem, CommandGroup } from './components/Command.vue'
export type { ContextMenuProps, ContextMenuItem } from './components/ContextMenu.vue'
export type { NavigationMenuProps, NavigationMenuItem } from './components/NavigationMenu.vue'
export type { DataTableProps } from './components/DataTable.vue'

// Re-esporta componenti Reka UI per convenienza
export * from 'reka-ui'
