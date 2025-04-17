<template>
  <!-- Upper part: Summary -->
  <div
    class="d-flex flex-column flex-md-row justify-space-between align-center pb-2"
    role="region"
    aria-label="Weekly sales summary"
  >
    <!-- Left column -->
    <div class="flex-1 pe-md-8">
      <h6 class="text-h6 font-weight-semibold mb-1">
        Congratulations Jonathan
      </h6>
      <p class="text-subtitle-2 text-textCard pb-1 font-weight-medium">
        You have done 38% more sales
      </p>

      <v-list 
        class="pa-0 bg-transparent" 
        role="list" 
        aria-label="Order summary statuses"
      >
        <v-list-item class="pa-0 mb-3">
          <template #prepend>
            <v-avatar 
              size="40" 
              class="bg-success-light" 
              aria-hidden="true"
            >
              <v-icon 
                color="success"
              >
                mdi-cart
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
              aria-hidden="true"
            >
              <v-icon 
                color="warning"
              >
                mdi-alert-circle-outline
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
              aria-hidden="true"
            >
              <v-icon 
                color="info"
              >
                mdi-truck-outline
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
      style="margin-bottom: -35px; margin-right: -16px;"
      aria-hidden="true"
    >
      <img
        src="@/assets/images/man-working-on-laptop.png"
        alt="Illustration of a person working on laptop"
        class="w-100"
        style="max-width: 250px; min-width: 180px; object-fit: contain;"
      >
    </div>
  </div>

  <v-divider class="my-4" />

  <!-- Bottom: Graphic -->
  <div 
    role="region" 
    aria-label="Total orders chart section"
  >
    <div class="d-flex justify-space-between align-center mb-4 flex-wrap">
      <div class="mb-2">
        <h6 class="text-h6 font-weight-semibold mb-1">
          Total Orders
        </h6>
        <p class="text-subtitle-2 text-textCard pb-1 font-weight-medium">
          Weekly order updates
        </p>
      </div>

      <v-select
        v-model="selectedRange"
        :items="['March 2023', 'April 2023', 'May 2023']"
        density="compact"
        variant="outlined"
        hide-details
        class="select-responsive bg-cardColor text-textCard no-blue"
        :menu-props="{ contentClass: 'bg-cardColor text-textCard no-blue' }"
        aria-label="Select month"
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
  { name: 'Orders', data: [4, 16, 12, 18, 24, 20, 28] },
  { name: 'Comparative', data: [3, 14, 13, 15, 18, 19, 25] }
])

const chartOptions = ref({
  chart: {
    type: 'line',
    toolbar: { show: false },
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      style: {
        colors: 'var(--v-theme-on-surface)',
        fontSize: '12px'
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: 'var(--v-theme-on-surface)',
        fontSize: '12px'
      }
    }
  },
  tooltip: { theme: 'dark' },
  grid: {
    borderColor: 'rgba(0,0,0,0.05)',
    strokeDashArray: 4
  },
  colors: ['#4FB0FF', '#90CAF9'],
  legend: { show: false }
})

defineOptions({
  components: { apexchart: ApexChart }
})
</script>


<style scoped>

.select-responsive {
  max-width: 150px;
  min-width: 110px;
}

@media (max-width: 600px) {
  .select-responsive {
    width: 100% !important;
    max-width: none !important;
  }
}

</style>