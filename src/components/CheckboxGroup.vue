<script setup lang="ts">
  import { computed } from 'vue'
  import checkboxGroupTheme from '@/themes/checkbox-group'
  import UCheckbox from './Checkbox.vue'
  import Icon from './Icon.vue'
  
  export interface CheckboxOption {
    label: string
    value: any
    description?: string
    disabled?: boolean
    icon?: string
  }
  
  export interface CheckboxGroupProps {
    modelValue?: any[]
    options?: CheckboxOption[]
    label?: string
    description?: string
    error?: string
    orientation?: 'vertical' | 'horizontal'
    disabled?: boolean
    required?: boolean
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'success' | 'warning' | 'error'
    class?: string | object | any[]
    icon?: string
    ui?: {
      root?: string
      label?: string
      description?: string
      error?: string
      fieldset?: string
      legend?: string
      container?: string
      items?: string
    }
  }
  
  const props = withDefaults(defineProps<CheckboxGroupProps>(), {
    modelValue: () => [],
    options: () => [],
    orientation: 'vertical',
    disabled: false,
    required: false,
    size: 'md',
    color: 'primary'
  })
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: any[]): void
  }>()
  
  const ui = computed(() =>
    checkboxGroupTheme({
      orientation: props.orientation
    })
  )
  
  const isChecked = (value: any) => {
    return props.modelValue.includes(value)
  }
  
  const handleChange = (value: any, checked: boolean) => {
    let newValue = [...props.modelValue]
  
    if (checked) {
      if (!newValue.includes(value)) newValue.push(value)
    } else {
      newValue = newValue.filter((v) => v !== value)
    }
  
    emit('update:modelValue', newValue)
  }
  
  /* -----------------------------
    Polaris → Iconify mapping fix
  ------------------------------- */
  const polarisToIconify: Record<string, string> = {
    SearchMajor: 'mdi:magnify',
    SettingsMajor: 'mdi:cog',
    LockMajor: 'mdi:lock',
    CancelMajor: 'mdi:close-circle',
    InfoMajor: 'mdi:information',
    TextSizeMajor: 'mdi:format-size',
    AlertMajor: 'mdi:alert',
  }
  
  const getOptionIcon = (icon?: string) => {
    return icon ? polarisToIconify[icon] || icon : ''
  }
  
  const groupIcon = computed(() => getOptionIcon(props.icon))
  </script>
  
  <template>
    <div :class="ui.root({ class: [props.ui?.root, props.class] })">
      <label
        v-if="label"
        :class="ui.label({ class: props.ui?.label })"
        class="flex items-center gap-2"
      >
        <!-- Use groupIcon instead of raw icon -->
        <Icon
          v-if="icon"
          :name="groupIcon"
          class="text-muted"
        />
  
        <span>{{ label }}</span>
  
        <span v-if="required" class="text-error">*</span>
      </label>
  
      <p
        v-if="description"
        :class="ui.description({ class: props.ui?.description })"
      >
        {{ description }}
      </p>
  
      <div :class="ui.items({ class: props.ui?.items })">
        <slot>
          <UCheckbox
            v-for="(option, index) in options"
            :key="index"
            :model-value="isChecked(option.value)"
            :label="option.label"
            :description="option.description"
            :disabled="disabled || option.disabled"
            :size="size"
            :color="color"
            :value="option.value"
            :icon="getOptionIcon(option.icon)"
            @update:model-value="(checked) =>
              handleChange(option.value, checked)
            "
          />
        </slot>
      </div>
  
      <p v-if="error" :class="ui.error({ class: props.ui?.error })">
        {{ error }}
      </p>
    </div>
  </template>  