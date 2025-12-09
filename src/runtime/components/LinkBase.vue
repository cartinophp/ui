
<script setup>
import { Primitive } from 'reka-ui'

const props = defineProps({
  as: 'button',
  type: 'button'
})

function onClickWrapper(e) {
  if (props.disabled) {
    e.stopPropagation()
    e.preventDefault()
    return
  }

  if (props.onClick) {
    for (const onClick of Array.isArray(props.onClick) ? props.onClick : [props.onClick]) {
      onClick(e)
    }
  }

  if (props.href && props.navigate && !props.isExternal) {
    props.navigate(e)
  }
}
</script>

<template>
  <Primitive
    v-bind="href ? {
      'as': 'a',
      'href': disabled ? undefined : href,
      'aria-disabled': disabled ? 'true' : undefined,
      'role': disabled ? 'link' : undefined,
      'tabindex': disabled ? -1 : undefined
    } : as === 'button' ? {
      as,
      type,
      disabled
    } : {
      as
    }"
    :rel="rel"
    :target="target"
    @click="onClickWrapper"
  >
    <slot />
  </Primitive>
</template>
