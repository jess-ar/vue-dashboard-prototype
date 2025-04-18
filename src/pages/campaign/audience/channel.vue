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
      :style="{
        width: '110%',
        maxWidth: '1140px',
        margin: '0 auto'
      }"
    >
      <!-- MAIN LAYOUT: icon + options -->
      <div
        :style="{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '32px' : '50px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: isMobile ? '24px 16px' : '5px',
          flexWrap: 'wrap'
        }"
      >
        <!-- Left column: icon -->
        <div
          :style="{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: 600,
            fontSize: '16px',
            color: textColor,
            width: isMobile ? 'auto' : '100px'
          }"
        >
          <img
            :src="channel === 'sms' ? smsIcon : emailIcon"
            :alt="channel + ' icon'"
            :style="{
              width: '80px',
              height: 'auto',
              marginBottom: '8px'
            }"
          >
          <span>{{ channel.toUpperCase() }}</span>
        </div>
        <!-- Right column: options -->
        <div
          :style="{
            flex: 1,
            border: `1.5px solid ${textColor}`,
            padding: '32px',
            borderRadius: '16px',
            backgroundColor: primaryColor,
            width: '100%',
            boxSizing: 'border-box'
          }"
        >
          <!-- Back button -->
          <div style="margin-bottom: 16px;">
            <BaseButton 
              variant="backSmall" 
              @click="router.push(ROUTES.AUDIENCE_INDEX)"
            >
              Back
            </BaseButton>
          </div>
          <h2 
            :style="{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: textColor
            }"
          >
            Audience selection
          </h2>
          <!-- Option 1 -->
          <div
            class="option-block"
            :class="{ selected: selectedOption === 'upload' }"
            @click="selectedOption = 'upload'; isDialogOpen = true"
          >
            <div class="option-flex">
              <div style="min-width: 240px;">
                <v-radio
                  label="You have a list of contacts? Drop it here:"
                  value="upload"
                  :model-value="selectedOption"
                  hide-details
                />
              </div>
              <div 
                class="box mt-2" 
                style="flex: 1;"
              >
                <div class="dropzone">
                  📥 Drop your file here
                </div>
              </div>
            </div>
          </div>
          <!-- Option 2 -->
          <div
            class="option-block"
            :class="{ selected: selectedOption === 'reuse' }"
            @click="selectedOption = 'reuse'"
          >
            <div class="option-flex">
              <div style="min-width: 240px;">
                <v-radio
                  label="Reuse the list from a previous campaign:"
                  value="reuse"
                  :model-value="selectedOption"
                  hide-details
                />
              </div>
              <div
                style="
                  display: flex;
                  align-items: flex-end;
                  gap: 10px;
                  flex-wrap: wrap;
                  flex: 1;
                  margin-top: 8px;
                "
              >
                <div 
                  class="box mt-2" 
                  style="flex: 1;"
                >
                  <v-select
                    v-model="selectedList"
                    :items="lists"
                    item-title="name"
                    item-value="id"
                    label="Choose a list"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                  />
                </div>
                <BaseButton
                  v-if="selectedList"
                  variant="optionCheck"
                  @click="() => {}"
                />
              </div>
            </div>
          </div>
          <!-- Option 3 -->
          <div
            class="option-block"
            :class="{ selected: selectedOption === 'people' }"
            @click="selectedOption = 'people'"
          >
            <div class="option-flex">
              <div style="min-width: 240px;">
                <v-radio
                  label="Use the People Database service"
                  value="people"
                  :model-value="selectedOption"
                  hide-details
                />
              </div>
              <div class="mt-2 ml-14 flex-1">
                <BaseButton 
                  variant="lookContacts" 
                  @click="() => {}"
                >
                  Look for contacts
                </BaseButton>
              </div>
            </div>
          </div>
          <!-- Continue -->
          <div style="margin-top: 22px; display: flex; justify-content: flex-end;">
            <BaseButton 
              variant="continueStep" 
              @click="router.push(ROUTES.AUDIENCE_FILTERS)"
            >
              Continue
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </StepLayout>
  <v-dialog
    v-model="isDialogOpen"
    max-width="800"
    persistent
    scrollable
  >
    <v-card>
      <v-card-title 
        class="text-h6 font-bold"
      >
        Use my own contacts list
      </v-card-title>
      <v-card-text>
        <ContactMappingModal 
          v-if="isDialogOpen && selectedOption === 'upload'"
          @close="handleContactMappingClose" 
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import StepLayout from '@/components/common/StepLayout.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { useTheme } from 'vuetify'
import ContactMappingModal from '@/components/campaignSteps/audience/modals/ContactMappingModal.vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router/paths'

const router = useRouter()

const { current: theme } = useTheme()
const textColor = computed(() => theme.value.colors.textColor)
const primaryColor = computed(() => theme.value.colors.primary)


const channel = ref(localStorage.getItem('campaignChannel') || 'sms')


const selectedOption = ref(null)
const selectedList = ref('')
const isDialogOpen = ref(false)

const lists = [
  { id: 'xmas', name: '[SMS] Christmas lights (12 451)' },
  { id: 'valentine', name: '[SMS] Valentine day – sale 50% (7 840)' }
]

function handleContactMappingClose(data) {
  isDialogOpen.value = false
  if (data) {
    console.log('Mapped data:', data)
  }
}

const smsIcon = new URL('@/assets/icons/sms.svg', import.meta.url).href
const emailIcon = new URL('@/assets/icons/email.svg', import.meta.url).href

const isMobile = window.innerWidth < 768

function goBack() {
  router.push(ROUTES.DASHBOARD)
}

function goToVisuals() {
  router.push(ROUTES.VISUALS_INDEX)
}

</script>

<style scoped>
.option-block {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.dropzone {
  width: 100%;
  height: 100px;
  border: 2px dashed #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  background: var(--v-theme-surface);
  color: var(--v-theme-textColor);
  box-sizing: border-box;
}

.option-flex {
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: flex-start;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .option-flex {
    flex-direction: column;
  }
}
</style>
