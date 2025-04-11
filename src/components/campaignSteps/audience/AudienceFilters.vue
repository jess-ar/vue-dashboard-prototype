<template>
  <div
    :style="{
      width: '110%',
      maxWidth: '1140px',
      margin: '0 auto'
    }"
  >
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
          :style="{ width: '80px', marginBottom: '8px' }"
        >
        <span>{{ channel.toUpperCase() }}</span>
      </div>
      <!-- Main box -->
      <div
        :style="{
          flex: 1,
          border: `1.5px solid ${textColor}`,
          padding: '32px',
          borderRadius: '16px',
          backgroundColor: primaryColor,
          width: '100%',
          boxSizing: 'border-box',
          minHeight: '500px'
        }"
      >
        <!-- Back button -->
        <div style="margin-bottom: 16px;">
          <BaseButton 
            variant="backSmall" 
            @click="emit('back')"
          >
            Back
          </BaseButton>
        </div>

        <h2 :style="{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px', color: textColor }">
          Audience selection
        </h2>

        <!--filters -->
        <div class="filters-grid">
          <div 
            v-for="(group, index) in filters" 
            :key="index" 
            class="filter-column"
          >
            <BaseButton 
              variant="addFilter" 
              @click="() => openModal(group.label)" 
            >
              {{ group.label }}
            </BaseButton>

            <div class="chip-container">
              <BaseButton
                v-for="(item, i) in group.selected"
                :key="i"
                variant="chipFilter"
                @click="() => removeItem(index, i)"
              >
                {{ item }}
              </BaseButton>
            </div>
          </div>
        </div>

        <hr 
          :style="{ margin: '24px 0', borderColor: textColor }" 
        >

        <!-- Footer -->
        <div class="footer">
          <BaseButton variant="calculateVolume">
            Calculate the available volume
          </BaseButton>

          <div class="volumes">
            <p :style="{ color: textColor }">
              Volume SMS found: 14 237 contacts
            </p>
            <p :style="{ color: textColor }">
              Volume Email found: 24 371 contacts
            </p>
          </div>

          <BaseButton 
            variant="chooseAudience" 
            @click="emit('next')"
          >
            Choose this audience
          </BaseButton>
        </div>
        <!-- Continue -->
        <div style="margin-top: 22px; display: flex; justify-content: flex-end;">
          <BaseButton 
            variant="continueStep" 
            @click="emit('next')"
          >
            Continue
          </BaseButton>
        </div>
      </div>
    </div>
  </div>   
  <v-dialog 
    v-model="isDialogOpen" 
    max-width="800"
  >
    <v-card>
      <v-card-title>{{ currentModal }}</v-card-title>
      <v-card-text>
        <GeographicAreaModal
          v-if="currentModal === 'Geographic area'"
          @close="handleGeographicClose"
        />
        <SocioDemoModal
          v-if="currentModal === 'Socio-demo criteria'"
          @close="handleSocioDemoClose"
        />
        <InterestModal
          v-else-if="currentModal === 'Centre of interest'"
          @close="handleInterestClose"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { useTheme } from 'vuetify'
import GeographicAreaModal from '@/components/campaignSteps/audience/modals/GeographicAreaModal.vue'
import SocioDemoModal from '@/components/campaignSteps/audience/modals/SocioDemoModal.vue'
import InterestModal from '@/components/campaignSteps/audience/modals/InterestModal.vue'


const emit = defineEmits(['back', 'next'])

const { current: theme } = useTheme()
const textColor = computed(() => theme.value.colors.textColor)
const primaryColor = computed(() => theme.value.colors.primary)

defineProps({
  channel: {
    type: String,
    required: true
  }
})

const smsIcon = new URL('@/assets/icons/sms.svg', import.meta.url).href
const emailIcon = new URL('@/assets/icons/email.svg', import.meta.url).href
const isMobile = window.innerWidth < 768

const filters = ref([
  { label: 'Geographic area', selected: [] },
  { label: 'Socio-demo criteria', selected: ['18 - 25', 'Men', 'Women'] },
  { label: 'Centre of interest', selected: ['Animals'] }
])

const isDialogOpen = ref(false)
const currentModal = ref(null)

function openModal(label) {
  currentModal.value = label
  isDialogOpen.value = true
}

function removeItem(groupIndex, itemIndex) {
  filters.value[groupIndex].selected.splice(itemIndex, 1)
}

function handleGeographicClose(data) {
  if (data) {
    filters.value[0].selected = data.country 
  }
  isDialogOpen.value = false
}

function handleSocioDemoClose(data) {
  if (data) {
    filters.value[1].selected = [...data.age, ...data.sex, ...data.income, ...data.other]
  }
  isDialogOpen.value = false
}

function handleInterestClose(data) {
  if (Array.isArray(data?.selected)) {
    filters.value[2].selected = [...data.selected]
  }
  isDialogOpen.value = false
  currentModal.value = null
}

</script>

<style scoped>
.filters-grid {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.filter-column {
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chip-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.volumes p {
  margin: 0;
  font-size: 0.88rem;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: nowrap;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
