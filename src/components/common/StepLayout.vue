<template>
  <div class="step-layout">
    <!-- Step Header -->
    <StepHeader 
      :current-step="currentStep"
      :show-steps="showSteps"
      @navigate="$emit('navigate', $event)"
    />

    <!-- Page content -->
    <div class="step-content">
      <slot></slot>
    </div>

    <!-- Buttons -->
    <div class="step-footer">
      <BaseButton 
        :variant="backVariant" 
        @click="$emit('back')"
      >
        {{ backLabel }}
      </BaseButton>

      <BaseButton 
        :variant="nextVariant" 
        :disabled="nextDisabled"
        @click="$emit('next')"
      >
        {{ nextLabel }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentStep: {
    type: String,
    required: true
  },
  showSteps: {
    type: Boolean,
    default: true
  },
  backLabel: {
    type: String,
    default: 'Back'
  },
  nextLabel: {
    type: String,
    default: 'Next'
  },
  backVariant: {
    type: String,
    default: 'return'
  },
  nextVariant: {
    type: String,
    default: 'step2'
  },
  nextDisabled: {
    type: Boolean,
    default: false
  }
})


defineEmits(['back', 'next', 'navigate'])
</script>

<style scoped>
.step-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 2px;
  width: 100%;
}

.step-content {
  margin-top: 32px;
  width: 100%;
  max-width: 1140px;
}

.step-footer {
  margin-top: 40px;
  width: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
}
</style>
