<script setup lang="ts">
  import { computed } from 'vue'
  import theme from '@/themes/card'
  
  export interface CardProps {
    title?: string
    description?: string
    variant?: 'default' | 'outline' | 'elevated' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    hover?: boolean
    clickable?: boolean
  }
  
  const {
    variant = 'default',
    size = 'md',
    hover = false,
    clickable = false,
    title,
    description
  } = defineProps<CardProps>()
  
  const emit = defineEmits<{
    click: [event: MouseEvent]
  }>()
  
  const ui = computed(() =>
    theme({
      variant,
      size,
      hover
    })
  )
  
  const handleClick = (event: MouseEvent) => {
    if (clickable) {
      emit('click', event)
    }
  }
  </script>  