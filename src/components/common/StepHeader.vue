<template>
  <div class="step-header">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="step"
      :class="{ active: index + 1 === currentStep }"
    >
      <span class="label">{{ step }}</span>
      <span class="badge">{{ index + 1 }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  steps: {
    type: Array,
    default: () => ['Audience', 'Visuals', 'Scheduling', 'Validation', 'Confirmation'],
  },
  currentStep: {
    type: Number,
    default: 1,
  },
})
</script>

<style scoped>
.step-header {
  display: flex;
  background-color: white;
  padding: 8px;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}

.step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px;
  font-weight: bold;
  color: var(--v-theme-textColor);
}

.step.active {
  background-color: var(--v-theme-secondary);
  color: white;
}

.step .badge {
  background-color: black;
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
