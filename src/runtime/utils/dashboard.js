import type { Ref } from 'vue'
import { createContext } from 'reka-ui'
import type { UseResizableProps } from '../composables/useResizable'

  sidebarOpen?: Ref<boolean>
  sidebarCollapsed?: Ref<boolean>
  toggleSearch?: () => void
  toggleSidebar?: () => void
  collapseSidebar?: (collapsed: boolean) => void
}

export const [useDashboard, provideDashboardContext] = createContext<DashboardContext>('DashboardGroup')
