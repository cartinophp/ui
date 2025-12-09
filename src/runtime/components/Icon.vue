
<script setup>
import { useForwardProps } from 'reka-ui'
import { reactivePick } from '@vueuse/core'

const props = defineProps()

const iconProps = useForwardProps(reactivePick(props, 'name', 'mode', 'size', 'customize'))
</script>

<template>
  <Icon v-if="typeof name === 'string'" v-bind="iconProps" />
  <component :is="name" v-else />
</template>
