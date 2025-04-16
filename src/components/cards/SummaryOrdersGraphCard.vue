<template>
  <!-- Upper part: Summary -->
  <div class="d-flex flex-column flex-md-row justify-space-between align-center pb-2">
    <!-- Left column -->
    <div class="flex-1 pe-md-8">
      <h5 class="text-h5 font-weight-semibold mb-1">
        Congratulations Jonathan
      </h5>
      <div class="text-subtitle-1 text-grey pb-1 font-weight-medium">
        You have done 38% more sales
      </div>

      <v-list class="pa-0 bg-transparent">
        <v-list-item class="pa-0 mb-3">
          <template #prepend>
            <v-avatar 
              size="40" 
              class="bg-success-light"
            >
              <v-icon 
                color="success"
              >
                mdi-trash-can
              </v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="text-body-1 font-weight-semibold">
            64 new orders
          </v-list-item-title>
          <v-list-item-subtitle class="text-subtitle-2 text-grey font-weight-medium">
            Processing
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item class="pa-0 mb-3">
          <template #prepend>
            <v-avatar 
              size="40" 
              class="bg-warning-light"
            >
              <v-icon 
                color="warning"
              >
                mdi-book-outline
              </v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="text-body-1 font-weight-semibold">
            4 orders
          </v-list-item-title>
          <v-list-item-subtitle class="text-subtitle-2 text-grey font-weight-medium">
            On hold
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item class="pa-0">
          <template #prepend>
            <v-avatar 
              size="40" 
              class="bg-info-light"
            >
              <v-icon 
                color="info"
              >
                mdi-truck-delivery-outline
              </v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="text-body-1 font-weight-semibold">
            12 orders
          </v-list-item-title>
          <v-list-item-subtitle class="text-subtitle-2 text-grey font-weight-medium">
            Delivered
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </div>

    <!-- Right column: image -->
    <div 
      class="align-self-end" 
      style="margin-bottom: -30px; 
      margin-right: -16px;"
    >
      <img
        src="@/assets/images/man-working-on-laptop.png"
        alt="Illustration"
        class="w-100"
        style="max-width: 250px; min-width: 180px; object-fit: contain;"
      >
    </div>
  </div>

  <v-divider class="my-4" />

  <!-- Bottom: Graphic -->
  <div>
    <div class="d-flex justify-space-between align-center mb-4 flex-wrap">
      <div class="mb-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Total Orders
        </h5>
        <div class="text-subtitle-1 text-grey pb-1 font-weight-medium">
          Weekly order updates
        </div>
      </div>

      <v-select
        v-model="selectedRange"
        density="compact"
        variant="outlined"
        :items="['This Week', 'Last Week']"
        class="w-auto"
        hide-details
      />
    </div>

    <apexchart
      :options="chartOptions"
      :series="chartSeries"
      height="220"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ApexChart from 'vue3-apexcharts'

const selectedRange = ref('This Week')

const chartSeries = ref([
  {
    name: 'Orders',
    data: [4, 16, 12, 18, 24, 20, 28]
  },
  {
    name: 'Comparative',
    data: [3, 14, 13, 15, 18, 19, 25]
  }
])

const chartOptions = ref({
  chart: {
    type: 'line',
    toolbar: { show: false },
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: { style: { colors: 'var(--v-theme-on-surface)' } }
  },
  yaxis: {
    labels: { style: { colors: 'var(--v-theme-on-surface)' } }
  },
  tooltip: { theme: 'dark' },
  grid: {
    borderColor: 'rgba(255,255,255,0.1)',
    strokeDashArray: 4
  },
  colors: ['#4FB0FF', '#90CAF9']
})

defineOptions({
  components: {
    apexchart: ApexChart
  }
})
</script>
