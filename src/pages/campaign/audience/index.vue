<template>
  <StepLayout
    current-step="audience"
    :show-steps="true"
    back-label="Back to dashboard"
    back-variant="return"
    next-label="Step 2 – Visuals"
    next-variant="step2"
    :next-disabled="false"
    @back="goBack"
    @next="goToVisuals"
  >
    <div
      class="audience-container"
      :style="{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px 2px',
        width: '100%'
      }"
    >
      <!-- Channel selection -->
      <div
        class="audience-wrapper py-16"
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          maxWidth: '100%'
        }"
      >
        <p
          :style="{
            marginBottom: '24px',
            fontSize: '0.95rem',
            textAlign: 'center',
            color: textColor,
            maxWidth: '500px'
          }"
        >
          Please select the channel you want to use for this campaign.
        </p>

        <div
          :style="{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '100px',
            maxWidth: '100%'
          }"
        >
          <div
            v-for="option in options"
            :key="option.id"
            class="option-card"
            :class="{ selected: selected === option.id }"
            :style="{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              border: '3px solid',
              borderColor: selected === option.id ? '#529BC5' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              width: '150px',
              height: '200px',
              outline: 'none'
            }"
            role="button"
            tabindex="0"
            :aria-label="`Select ${option.label}`"
            @click="selectOption(option.id)"
            @keyup.enter="selectOption(option.id)"
            @keyup.space="selectOption(option.id)"
          >
            <img
              :src="option.icon"
              :alt="option.label"
              :class="['option-icon', option.id === 'sms' ? 'icon-sms' : 'icon-email']"
            >
            <p :style="{ marginTop: '16px', fontWeight: 500, fontSize: '0.95rem' }">
              {{ option.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </StepLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'
import StepLayout from '@/components/common/StepLayout.vue'
import { ROUTES } from '@/router/paths'

const { current: theme } = useTheme()
const textColor = computed(() => theme.value.colors.textColor)

const router = useRouter()
const selected = ref(null)

const smsIcon = new URL('@/assets/icons/sms.svg', import.meta.url).href
const emailIcon = new URL('@/assets/icons/email.svg', import.meta.url).href

const options = [
  { id: 'sms', label: 'SMS', icon: smsIcon },
  { id: 'email', label: 'Email', icon: emailIcon }
]

function selectOption(id) {
  selected.value = id
  localStorage.setItem('campaignChannel', id)
  router.push(ROUTES.AUDIENCE_CHANNEL)
}

function goToVisuals() {
  router.push(ROUTES.VISUALS_INDEX)
}

function goBack() {
  router.push(ROUTES.DASHBOARD)
}
</script>

<style scoped>
.option-icon {
  height: auto;
}

.icon-sms {
  width: 60px;
}

.icon-email {
  width: 120px;
}

.option-card:hover {
  border-color: #529BC5;
  box-shadow: 0 0 0 3px rgb(82, 155, 197);
}

.option-card.selected {
  border: 3px solid #529BC5;
}

@media (max-width: 500px) {
  .option-card {
    width: 120px !important;
    height: 160px !important;
  }

  .icon-sms {
    width: 50px !important;
  }

  .icon-email {
    width: 80px !important;
  }
}
</style>
