<script setup>
import { Primitive } from 'reka-ui'
import { Link as InertiaLink } from '@inertiajs/vue3'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps(), {
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
}
</script>

<template>
  <InertiaLink
    v-if="!!href && !isExternal && !disabled"
    :href="href"
    v-bind="{
      rel,
      target,
      ...$attrs
    }"
    @click="onClickWrapper"
  >
    <slot />
  </InertiaLink>
  <Primitive
    v-else
    v-bind="href ? {
      'as': 'a',
      'href': disabled ? undefined : href,
      'aria-disabled': disabled ? 'true' : undefined,
      'role': disabled ? 'link' : undefined,
      'tabindex': disabled ? -1 : undefined,
      'rel': rel,
      'target': target,
      ...$attrs
    } : as === 'button' ? {
      as,
      type,
      disabled,
      ...$attrs
    } : {
      as,
      ...$attrs
    }"
    @click="onClickWrapper"
  >
    <slot />
  </Primitive>
</template>
