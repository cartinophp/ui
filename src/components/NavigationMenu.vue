<script setup lang="ts">
  import { computed, ref, onMounted, onUnmounted } from 'vue'
  import Icon from './Icon.vue'
  import {
    NavigationMenuRoot as NavigationMenuPrimitive,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
  } from 'reka-ui'
  import theme from '@/themes/navigation-menu'
  import type { NavigationItem } from '@/config/navigation'
  
  /* -------------------------------------------------------------------------- */
  /*                                   Props                                    */
  /* -------------------------------------------------------------------------- */
  
  export interface NavigationMenuProps {
    menuItems?: NavigationItem[]
    mode?: 'vertical' | 'horizontal'
    collapsed?: boolean
    collapsible?: boolean
    class?: string
    ui?: Record<string, any>
  }
  
  const props = withDefaults(defineProps<NavigationMenuProps>(), {
    mode: 'vertical',
    collapsed: false,
    collapsible: true,
    menuItems: () => []
  })
  
  const emit = defineEmits<{
    'update:collapsed': [value: boolean]
    select: [item: NavigationItem]
  }>()
  
  /* -------------------------------------------------------------------------- */
  /*                             Responsive handling                             */
  /* -------------------------------------------------------------------------- */
  
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)
  
  const updateResponsiveState = () => {
    const width = window.innerWidth
    isMobile.value = width < 768
    isTablet.value = width >= 768 && width < 1024
    isDesktop.value = width >= 1024
  
    if (!isMobile.value) {
      mobileDrawerOpen.value = false
    }
  }
  
  onMounted(() => {
    updateResponsiveState()
    window.addEventListener('resize', updateResponsiveState)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateResponsiveState)
  })
  
  /* -------------------------------------------------------------------------- */
  /*                                 UI State                                   */
  /* -------------------------------------------------------------------------- */
  
  const internalCollapsed = ref(props.collapsed)
  const mobileDrawerOpen = ref(false)
  
  const collapsed = computed({
    get: () => (isMobile.value ? false : internalCollapsed.value),
    set: (val: boolean) => {
      internalCollapsed.value = val
      emit('update:collapsed', val)
    }
  })
  
  const toggleSidebar = () => {
    if (isMobile.value) {
      mobileDrawerOpen.value = !mobileDrawerOpen.value
    } else if (props.collapsible) {
      collapsed.value = !collapsed.value
    }
  }
  
  const closeMobileDrawer = () => {
    mobileDrawerOpen.value = false
  }
  
  const ui = computed(() => theme({ orientation: props.mode }))
  
  const sidebarWidth = computed(() => {
    if (isMobile.value) return '280px'
    if (isTablet.value) return collapsed.value ? '80px' : '200px'
    return collapsed.value ? '80px' : '256px'
  })
  
  /* -------------------------------------------------------------------------- */
  /*                          Navigation Menu Item                               */
  /* -------------------------------------------------------------------------- */
  
  // const expandedItems = ref<Set<string>>(new Set())
  
  // const toggleExpanded = (itemLabel: string) => {
  //   expandedItems.value.has(itemLabel)
  //     ? expandedItems.value.delete(itemLabel)
  //     : expandedItems.value.add(itemLabel)
  // }
  
  const handleItemClick = (item: NavigationItem, e: Event) => {
    if (item.disabled) {
      e.preventDefault()
      return
    }
  
    if (item.children?.length) return
  
    item.onClick?.(e)
    emit('select', item)
  
    if (isMobile.value) closeMobileDrawer()
  }
  </script>
  
  <template>
    <!-- ===================== VERTICAL MODE ===================== -->
    <template v-if="mode === 'vertical'">
      <!-- Desktop / Tablet sidebar -->
      <aside
        v-if="!isMobile"
        class="bg-white dark:bg-gray-900 border-r h-screen flex flex-col transition-all"
        :style="{ width: sidebarWidth }"
      >
        <header class="flex items-center justify-between p-4 border-b">
          <h2 v-if="!collapsed" class="font-semibold">Navigation</h2>
          <button @click="toggleSidebar" aria-label="Toggle sidebar">
            <Icon
              :name="
                collapsed
                  ? 'solar:sidebar-code-linear'
                  : 'solar:sidebar-minimalistic-linear'
              "
              class="w-5 h-5"
            />
          </button>
        </header>
  
        <nav class="flex-1 overflow-y-auto p-2">
          <NavigationMenuPrimitive orientation="vertical">
            <NavigationMenuList :class="ui.list">
              <template v-for="item in menuItems" :key="item.label">
                <li :class="ui.item">
                  <!-- With children -->
                  <NavigationMenuItem v-if="item.children?.length">
                    <NavigationMenuTrigger
                      :class="ui.trigger"
                      :disabled="item.disabled"
                    >
                      <Icon
                        v-if="item.icon"
                        :name="item.icon"
                        :class="ui.triggerIcon"
                      />
                      <span v-if="!collapsed">{{ item.label }}</span>
                      <Icon
                        v-if="!collapsed"
                        name="solar:alt-arrow-down-linear"
                        :class="ui.triggerCaret"
                      />
                    </NavigationMenuTrigger>
  
                    <NavigationMenuContent :class="ui.content">
                      <ul class="ml-4 mt-1 space-y-1">
                        <li v-for="child in item.children" :key="child.label">
                          <router-link
                            v-if="child.to"
                            :to="child.to"
                            :class="ui.link"
                            @click="(e) => handleItemClick(child, e)"
                          >
                            <Icon
                              v-if="child.icon"
                              :name="child.icon"
                              :class="ui.linkIcon"
                            />
                            <span>{{ child.label }}</span>
                          </router-link>
  
                          <a
                            v-else
                            :href="child.href || '#'"
                            :class="ui.link"
                            @click="(e) => handleItemClick(child, e)"
                          >
                            <Icon
                              v-if="child.icon"
                              :name="child.icon"
                              :class="ui.linkIcon"
                            />
                            <span>{{ child.label }}</span>
                          </a>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
  
                  <!-- Simple link -->
                  <router-link
                    v-else-if="item.to"
                    :to="item.to"
                    :class="ui.link"
                    @click="(e) => handleItemClick(item, e)"
                  >
                    <Icon v-if="item.icon" :name="item.icon" :class="ui.linkIcon" />
                    <span v-if="!collapsed">{{ item.label }}</span>
                  </router-link>
  
                  <a
                    v-else
                    :href="item.href || '#'"
                    :class="ui.link"
                    @click="(e) => handleItemClick(item, e)"
                  >
                    <Icon v-if="item.icon" :name="item.icon" :class="ui.linkIcon" />
                    <span v-if="!collapsed">{{ item.label }}</span>
                  </a>
                </li>
              </template>
            </NavigationMenuList>
          </NavigationMenuPrimitive>
        </nav>
      </aside>
  
      <!-- Mobile overlay (backdrop) -->
      <Transition
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-200"
      >
        <div
          v-if="isMobile && mobileDrawerOpen"
          class="fixed inset-0 bg-black/50 z-40"
          @click="closeMobileDrawer"
        />
      </Transition>
  
      <!-- Mobile drawer -->
      <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        leave-active-class="transition-transform duration-200 ease-in"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <aside
          v-if="isMobile && mobileDrawerOpen"
          class="fixed inset-y-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-xl flex flex-col"
          :style="{ width: sidebarWidth }"
        >
          <header class="flex items-center justify-between p-4 border-b">
            <h2 class="font-semibold">Navigation</h2>
            <button @click="closeMobileDrawer" aria-label="Close menu">
              <Icon name="solar:close-linear" class="w-5 h-5" />
            </button>
          </header>
  
          <nav class="flex-1 overflow-y-auto p-2">
            <NavigationMenuPrimitive orientation="vertical">
              <NavigationMenuList :class="ui.list">
                <template v-for="item in menuItems" :key="`mobile-${item.label}`">
                  <li :class="ui.item">
                    <NavigationMenuItem v-if="item.children?.length">
                      <NavigationMenuTrigger
                        :class="ui.trigger"
                        :disabled="item.disabled"
                      >
                        <Icon
                          v-if="item.icon"
                          :name="item.icon"
                          :class="ui.triggerIcon"
                        />
                        <span>{{ item.label }}</span>
                        <Icon name="solar:alt-arrow-down-linear" :class="ui.triggerCaret" />
                      </NavigationMenuTrigger>
  
                      <NavigationMenuContent :class="ui.content">
                        <ul class="ml-4 mt-1 space-y-1">
                          <li v-for="child in item.children" :key="`mobile-child-${child.label}`">
                            <router-link
                              v-if="child.to"
                              :to="child.to"
                              :class="ui.link"
                              @click="(e) => handleItemClick(child, e)"
                            >
                              <Icon v-if="child.icon" :name="child.icon" :class="ui.linkIcon" />
                              <span>{{ child.label }}</span>
                            </router-link>
  
                            <a
                              v-else
                              :href="child.href || '#'"
                              :class="ui.link"
                              @click="(e) => handleItemClick(child, e)"
                            >
                              <Icon v-if="child.icon" :name="child.icon" :class="ui.linkIcon" />
                              <span>{{ child.label }}</span>
                            </a>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
  
                    <router-link
                      v-else-if="item.to"
                      :to="item.to"
                      :class="ui.link"
                      @click="(e) => handleItemClick(item, e)"
                    >
                      <Icon v-if="item.icon" :name="item.icon" :class="ui.linkIcon" />
                      <span>{{ item.label }}</span>
                    </router-link>
  
                    <a
                      v-else
                      :href="item.href || '#'"
                      :class="ui.link"
                      @click="(e) => handleItemClick(item, e)"
                    >
                      <Icon v-if="item.icon" :name="item.icon" :class="ui.linkIcon" />
                      <span>{{ item.label }}</span>
                    </a>
                  </li>
                </template>
              </NavigationMenuList>
            </NavigationMenuPrimitive>
          </nav>
        </aside>
      </Transition>
  
      <!-- Mobile Toggle Button (fixed) -->
      <button
        v-if="isMobile"
        @click="toggleSidebar"
        class="fixed bottom-4 right-4 p-3 rounded-full shadow-lg z-50"
        aria-label="Toggle menu"
      >
        <Icon name="solar:hamburger-menu-linear" class="w-6 h-6" />
      </button>
    </template>
  
    <!-- ===================== HORIZONTAL MODE ===================== -->
<nav v-else class="border-b bg-white dark:bg-gray-900 w-full relative">
  <div class="px-4 py-3 flex items-center justify-between">
    <span class="font-semibold">Navigation</span>

    <!-- Mobile Toggle -->
    <button class="md:hidden" @click="toggleSidebar">
      <Icon name="solar:hamburger-menu-linear" class="w-6 h-6" />
    </button>

    <!-- Desktop Menu -->
    <NavigationMenuPrimitive orientation="horizontal" class="hidden md:block">
      <NavigationMenuList class="flex items-center gap-4">
        <template v-for="item in menuItems" :key="item.label">
          <li>
            <NavigationMenuItem v-if="item.children?.length">
              <NavigationMenuTrigger :class="ui.trigger">
                <Icon v-if="item.icon" :name="item.icon" />
                <span>{{ item.label }}</span>
                <Icon name="solar:alt-arrow-down-linear" class="ml-1 w-4 h-4" />
              </NavigationMenuTrigger>

              <NavigationMenuContent :class="ui.content">
                <ul>
                  <li v-for="child in item.children" :key="child.label">
                    <router-link
                      v-if="child.to"
                      :to="child.to"
                      class="flex items-center gap-2 px-4 py-2"
                      @click="(e) => handleItemClick(child, e)"
                    >
                      <Icon v-if="child.icon" :name="child.icon" />
                      <span>{{ child.label }}</span>
                    </router-link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <router-link
              v-else
              :to="item.to"
              :class="ui.link"
              @click="(e) => handleItemClick(item, e)"
            >
              <Icon v-if="item.icon" :name="item.icon" />
              <span>{{ item.label }}</span>
            </router-link>
          </li>
        </template>
      </NavigationMenuList>
    </NavigationMenuPrimitive>
  </div>

  <!-- ================= MOBILE OVERLAY ================= -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-200"
  >
    <div
      v-if="mobileDrawerOpen"
      class="fixed inset-0 bg-black/50 z-40 md:hidden"
      @click="closeMobileDrawer"
    />
  </Transition>

  <!-- ================= MOBILE DROPDOWN ================= -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    leave-active-class="transition duration-200 ease-in"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div
      v-if="mobileDrawerOpen"
      class="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50 md:hidden"
    >
      <ul class="flex flex-col divide-y">
        <li
          v-for="item in menuItems"
          :key="`mobile-horizontal-${item.label}`"
        >
          <router-link
            v-if="item.to"
            :to="item.to"
            class="flex items-center gap-3 px-4 py-3"
            @click="closeMobileDrawer"
          >
            <Icon v-if="item.icon" :name="item.icon" />
            <span>{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </Transition>
</nav>
  </template>  