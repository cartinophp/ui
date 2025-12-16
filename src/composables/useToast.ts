import { ref, h, render, type VNode } from 'vue'
import ToastComponent, { type ToastProps } from '@/components/Toast.vue'

export interface ToastOptions extends Omit<ToastProps, 'id'> {
  id?: string
}

interface ToastInstance {
  id: string
  vnode: VNode
  close: () => void
}

const toasts = ref<ToastInstance[]>([])
let idCounter = 0

const getNextId = () => `toast-${++idCounter}`

const removeToast = (id: string) => {
  const index = toasts.value.findIndex((t) => t.id === id)
  if (index > -1) {
    const toast = toasts.value[index]
    if (toast.vnode.el) {
      render(null, toast.vnode.el.parentElement!)
    }
    toasts.value.splice(index, 1)
  }
}

const createToast = (options: ToastOptions) => {
  const id = options.id || getNextId()

  // Remove existing toast with same id
  if (options.id) {
    removeToast(options.id)
  }

  const container = document.createElement('div')
  document.body.appendChild(container)

  const vnode = h(ToastComponent, {
    ...options,
    id,
    onClose: () => {
      removeToast(id)
      container.remove()
    }
  })

  render(vnode, container)

  const instance: ToastInstance = {
    id,
    vnode,
    close: () => {
      const component = vnode.component
      if (component?.exposed?.close) {
        component.exposed.close()
      }
    }
  }

  toasts.value.push(instance)

  return instance
}

export const useToast = () => {
  const toast = (options: ToastOptions) => createToast(options)

  const success = (
    title: string,
    description?: string,
    options?: Partial<ToastOptions>
  ) =>
    createToast({
      type: 'success',
      title,
      description,
      ...options
    })

  const error = (
    title: string,
    description?: string,
    options?: Partial<ToastOptions>
  ) =>
    createToast({
      type: 'error',
      title,
      description,
      ...options
    })

  const warning = (
    title: string,
    description?: string,
    options?: Partial<ToastOptions>
  ) =>
    createToast({
      type: 'warning',
      title,
      description,
      ...options
    })

  const info = (
    title: string,
    description?: string,
    options?: Partial<ToastOptions>
  ) =>
    createToast({
      type: 'info',
      title,
      description,
      ...options
    })

  const dismiss = (id: string) => {
    removeToast(id)
  }

  const dismissAll = () => {
    toasts.value.forEach((toast) => toast.close())
    toasts.value = []
  }

  return {
    toast,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll,
    toasts
  }
}
