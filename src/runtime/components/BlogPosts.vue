<!-- eslint-disable vue/block-tag-newline -->

<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { omit } from '../utils'
import { tv } from '../utils/tv'
import UBlogPost from './BlogPost.vue'

const props = defineProps({
  orientation: 'horizontal'
})
const slots = defineSlots()

const getProxySlots = () => omit(slots, ['default'])

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.blogPosts || {}) }))
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" :class="ui({ orientation, class: props.class })">
    <slot>
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
        :orientation="orientation === 'vertical' ? 'horizontal' : 'vertical'"
        v-bind="post"
      >
        <template v-for="(_, name) in getProxySlots()" #[name]="slotData">
          <slot :name="name" v-bind="slotData" :post="post" />
        </template>
      </UBlogPost>
    </slot>
  </Primitive>
</template>
