<template>
  <div class="d-flex justify-space-between align-center mt-8">
    <BaseButton
      icon="mdi-arrow-left"
      variant="dashboard"
      @click="goBack"
    >
      Back to dashboard
    </BaseButton>

    <BaseButton
      v-if="canContinue"
      :icon="nextIcon"
      :variant="nextVariant"
      @click="goNext"
    >
      {{ nextLabel }}
    </BaseButton>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentStep: { type: String, required: true },
  theme: { type: String, default: 'light' },
  canContinue: { type: Boolean, default: true },
})

const emit = defineEmits(['next', 'back'])

function goNext() {
  emit('next')
}
function goBack() {
  emit('back')
}

const nextIcon = computed(() =>
  props.currentStep === 'validation' ? 'mdi-credit-card' : 'mdi-chevron-right'
)

const nextLabel = computed(() => {
  const map = {
    audience: 'Step 2 – Visuals',
    visuals: 'Step 3 – Scheduling',
    scheduling: 'Step 4 – Validation',
    validation: 'Confirm and Pay',
  }
  return map[props.currentStep] || 'Next'
})

const nextVariant = computed(() => {
  return props.currentStep === 'validation' ? 'confirmPay' : 'step2'
})
</script>
