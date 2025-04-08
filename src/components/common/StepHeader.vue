<template>
  <div
    class="step-header d-flex rounded-pill px-4 py-3 mx-auto bg-primary"
    style="font-size: 0.875rem;"
    role="list"
  >
    <div
      v-for="(step, index) in steps"
      :key="step.id"
      role="listitem"
      class="d-flex align-center mx-2 px-4 py-2 rounded-pill transition-all cursor-pointer"
      :class="[
        index === currentStepIndex ? 'bg-secondary text-black shadow-md' : 'text-textColor',
      ]"
      :aria-current="index === currentStepIndex ? 'step' : undefined"
      style="font-weight: 500; flex-shrink: 0;"
      @click="emit('navigate', step.id)"
    >
      <span class="mr-2">{{ step.label }}</span>
      <div
        class="rounded-circle d-flex align-center justify-center ml-2"
        :class="index === currentStepIndex ? 'bg-black text-white' : 'bg-grey-darken-3 text-white'"
        style="width: 24px; height: 24px; font-size: 0.875rem;"
      >
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentStep: { type: String, required: true },
})

const emit = defineEmits(['navigate'])

const steps = [
  { id: 'audience', label: 'Audience' },
  { id: 'visuals', label: 'Visuals' },
  { id: 'scheduling', label: 'Scheduling' },
  { id: 'validation', label: 'Validation' },
  { id: 'confirmation', label: 'Confirmation' },
]

const currentStepIndex = computed(() =>
  steps.findIndex((step) => step.id === props.currentStep)
)
</script>

<style scoped>
.step-header {
  max-width: 800px;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.step-header::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

@media (max-width: 600px) {
  .step-header {
    border-radius: 0;
    padding-inline: 1rem;
    justify-content: flex-start;
    gap: 0.5rem;
  }
}
</style>
