// Mock for #imports
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

// Export common Nuxt auto-imports
export { ref, computed, watch, onMounted, onUnmounted }

// Mock useCookie
export const useCookie = <T>(key: string, options?: any) => {
  return ref(options?.default ? options.default() : undefined) as any
}

// Mock useNuxtApp
export const useNuxtApp = () => ({
  $config: {},
  provide: () => {},
  hooks: {
    hook: () => {},
    callHook: () => Promise.resolve()
  }
})

// Mock navigateTo
export const navigateTo = (to: string) => {
  console.log('Mock navigateTo:', to)
}

// Mock useState
export const useState = <T>(key: string, init?: () => T) => {
  return ref(init ? init() : undefined)
}

// Mock useRoute
export const useRoute = () => ({
  path: '/',
  params: {},
  query: {}
})

// Mock useRouter
export const useRouter = () => ({
  push: (to: string) => console.log('Mock router.push:', to),
  replace: (to: string) => console.log('Mock router.replace:', to)
})
