
<script setup>
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import UAvatar from '../Avatar.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps<ColorModeAvatarProps>()

const avatarProps = useForwardProps(reactiveOmit(props, 'light', 'dark'))
</script>

<template>
  <UAvatar v-bind="{ ...avatarProps, ...$attrs }" :src="light" class="dark:hidden" />
  <UAvatar v-bind="{ ...avatarProps, ...$attrs }" :src="dark" class="hidden dark:block" />
</template>
