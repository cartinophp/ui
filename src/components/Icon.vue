<script setup lang="ts">
  import { computed, defineAsyncComponent } from 'vue'
  import iconTheme from '@/themes/icon'
  
  export interface IconProps {
    /** Icon name from Iconify (e.g., 'solar:user-bold', 'solar:home-linear') */
    name: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    customClass?: string | string[] | Record<string, boolean>
  }
  
  const props = withDefaults(defineProps<IconProps>(), {
    size: 'md'
  })
  
  const iconClasses = computed(() =>
    iconTheme({
      size: props.size,
      customClass: props.customClass
    })
  )
  
  // Simple emoji detection
  const isEmoji = computed(() => {
    return /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u.test(props.name)
  })
  
  // Lazy load IconifyIcon component
  const IconifyIcon = defineAsyncComponent(() =>
    import('@iconify/vue').then(module => module.Icon)
  )
  </script>
  
  <template>
    <!-- Emoji rendering -->
    <span v-if="isEmoji" :class="iconClasses" role="img" aria-label="icon">
      {{ props.name }}
    </span>
  
    <!-- Iconify icon rendering (lazy-loaded) -->
    <IconifyIcon v-else :icon="props.name" :class="iconClasses" />
  </template>  