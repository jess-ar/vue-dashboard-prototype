<template>
  <div class="pa-6">
    <StepHeader
      :current-step="currentStep"
      @navigate="navigateToStep"
    />

    <!-- The dynamic component according to the step -->
    <component 
      :is="stepComponent" 
      ref="stepRef"
    />

    <div class="d-flex justify-space-between mt-8">
      <!-- Paso 0 con canal ya seleccionado -->
      <BaseButton
        v-if="stepIndex === 0 && stepRef?.value?.channelSelected"
        variant="backStep"
        @click="stepRef.value.channelSelected = false"
      >
        Back to channel selection
      </BaseButton>

      <!-- Paso 0 sin canal aún seleccionado -->
      <BaseButton
        v-else-if="stepIndex === 0"
        variant="return"
        @click="goToDashboard"
      >
        Return to dashboard
      </BaseButton>

      <!-- Otros pasos -->
      <BaseButton
        v-else
        variant="backStep"
        @click="goBack"
      >
        Back
      </BaseButton>

      <!-- Botón de avanzar -->
      <BaseButton
        :variant="currentStepVariant"
        @click="goNext"
      >
        {{ nextLabel }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/paths'
import StepAudience from '@/components/campaignSteps/audience/StepAudience.vue'
import StepVisuals from '@/components/campaignSteps/visuals/StepVisuals.vue'
import StepScheduling from '@/components/campaignSteps/scheduling/StepScheduling.vue'
import StepValidation from '@/components/campaignSteps/validation/StepValidation.vue'
import StepConfirmation from '@/components/campaignSteps/confirmation/StepConfirmation.vue'
import StepHeader from '@/components/common/StepHeader.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const router = useRouter()

const steps = ['audience', 'visuals', 'scheduling', 'validation', 'confirmation']
const stepIndex = ref(0)
const stepRef = ref(null)

const currentStep = computed(() => steps[stepIndex.value])

const stepComponent = computed(() => {
  switch (currentStep.value) {
    case 'audience': return StepAudience
    case 'visuals': return StepVisuals
    case 'scheduling': return StepScheduling
    case 'validation': return StepValidation
    case 'confirmation': return StepConfirmation
    default: return StepAudience
  }
})

function goNext() {
  if (stepIndex.value < steps.length - 1) {
    stepIndex.value++
  } else {
    console.log('Send campaign 🎉')
  }
}

function goBack() {
  if (stepIndex.value > 0) {
    stepIndex.value--
  }
}

function goToDashboard() {
  router.push(ROUTES.DASHBOARD)
}

function navigateToStep(stepId) {
  const index = steps.indexOf(stepId)
  if (index !== -1) {
    stepIndex.value = index
  }
}

const nextLabel = computed(() => {
  const nextSteps = {
    audience: 'Step 2 – Visuals',
    visuals: 'Step 3 – Scheduling',
    scheduling: 'Step 4 – Validation',
    validation: 'Step 5 – Confirmation',
    confirmation: 'Send campaign 🎉',
  }
  return nextSteps[currentStep.value]
})

const currentStepVariant = computed(() => {
  if (currentStep.value === 'confirmation') return 'send'
  if (currentStep.value === 'validation') return 'confirmPay'
  return `step${stepIndex.value + 2}`
})
</script>
