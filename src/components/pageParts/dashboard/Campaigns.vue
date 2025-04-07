<template>
  <v-container fluid>
    <!-- Main title + button -->
    <v-row 
      justify="space-between" 
      align="center" 
      class="mb-2"
    >
      <h2 
        class="text-h5 font-weight-bold" 
        :class="textClass"
      >
        Your Campaigns
      </h2>
      <RouterLink :to="ROUTES.NEW_CAMPAIGN">
        <v-btn
          color="secondary"
          class="text-white px-6 py-1 rounded-pill elevation-4"
          prepend-icon="mdi-calendar-plus"
        >
          New campaign
        </v-btn>
      </RouterLink>
    </v-row>

    <!-- Subtitle + table 1 -->
    <h3 
      class="text-h6 font-weight-bold mb-2" 
      :class="textClass"
    >
      Your campaigns to validate
    </h3>
    <CampaignTable 
      variant="validate" 
      :rows="toValidate" 
    />

    <!-- Subtitle + table 2 -->
    <h3 
      class="text-h6 font-weight-bold mt-6 mb-2" 
      :class="textClass"
    >
      Your scheduled campaigns
    </h3>
    <CampaignTable 
      variant="scheduled" 
      :rows="scheduled" 
    />

    <!-- Subtitle + table 3 -->
    <h3 
      class="text-h6 font-weight-bold mt-6 mb-2" 
      :class="textClass"
    >
      Your past campaigns
    </h3>
    <CampaignTable 
      variant="past" 
      :rows="past" 
    />
  </v-container>
</template>


<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import CampaignTable from './CampaignTable.vue'
import { ROUTES } from '@/router/paths.js'

const { current } = useTheme()

const textClass = computed(() =>
  current.value.dark ? 'text-c7ceda' : 'text-5f5f5f'
)

// Campaigns to be validated
const toValidate = [
  { name: 'Easter event', type: 'phone', step: '3 - Scheduling' },
  { name: 'Mothers day', type: 'phone', step: '2 - Visuals' },
]

// Programmed campaigns
const scheduled = [
  {
    name: 'February sales - sms - part 1',
    schedule: '22/02/2025 12:00',
    type: 'phone',
    volume: '12 000',
    price: '750.00 €',
  },
  {
    name: 'February sales - email - part 2',
    schedule: '22/02/2025 12:00',
    type: 'email',
    volume: '27 445',
    price: '125.69 €',
  },
]

// Past campaigns
const past = [
  {
    name: 'Valentine day - sale 50 %',
    schedule: '12/02/2025 12:00',
    type: 'phone',
    volume: '',
    price: '',
  },
  {
    name: 'New Year offers',
    schedule: '27/12/2024 12:00',
    type: 'email',
    volume: '',
    price: '',
  },
  {
    name: 'Christmas lights',
    schedule: '20/12/2024 12:00',
    type: 'email',
    volume: '',
    price: '',
  },
  {
    name: 'Christmas lights',
    schedule: '20/12/2024 12:00',
    type: 'email',
    volume: '',
    price: '',
  },
]
</script>

<style scoped>
.text-c7ceda {
  color: #C7CEDA;
}
.text-5f5f5f {
  color: #5F5F5F;
}
</style>
