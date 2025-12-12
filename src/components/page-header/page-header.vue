<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="container">
    <h1 class="title">{{ props.title }}</h1>
    <p class="subtitle">{{ props.subtitle }}</p>

    <!-- slot extra -->
    <slot name="extra"></slot>

    <!-- default slot -->
    <slot></slot>
  </div>
</template>
