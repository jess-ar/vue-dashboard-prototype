<template>
  <div>
    <!-- Header -->
    <div class="d-flex justify-space-between mb-4">
      <div>
        <h6 
          class="text-h6 font-weight-semibold"
        >
          Products
        </h6>
        <div 
          class="text-subtitle-2 text-textCard mb-4"
        >
          Last 7 days
        </div>
      </div>
      <div 
        class="d-flex flex-column align-end"
      >
        <div 
          class="text-h7 font-weight-semibold"
        >
          432
        </div>
        <v-chip
          density="default"
          size="x-small"
          variant="outlined"
          class="text-success"
          draggable="false"
          style="border: 1px solid currentColor; background-color: rgba(76,175,80,0.1);"
        >
          26.5%
        </v-chip>
      </div>
    </div>

    <!-- Donut chart -->
    <div class="my-4 mb-10 d-flex justify-center">
      <apexchart
        type="donut"
        width="120"
        height="120"
        :options="chartOptions"
        :series="chartSeries"
      />
    </div>

    <!-- Footer -->
    <p class="text-subtitle-1 text-textCard font-weight-medium text-center pb-1">
      $18k Profit more than last month
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ApexChart from 'vue3-apexcharts'

defineOptions({
  components: { apexchart: ApexChart }
})

const chartSeries = ref([70, 18, 12])

const chartOptions = ref({
  chart: {
    type: 'donut',
    width: 120,
    height: 120,
    sparkline: { enabled: true }
  },
  labels: ['2022', '2021', '2020'],
  colors: ['#0085DB', '#FB977D', '#5EC8FA'],
  plotOptions: {
    pie: {
      customScale: 0.9,
      donut: { size: '75%' }
    }
  },
  legend: { show: false },
  tooltip: {
    enabled: true,
    style: {
      fontFamily: 'Plus Jakarta Sans',
      fontSize: '12px'
    }
  },
  dataLabels: { enabled: false },
  stroke: { width: 0 },
  theme: {
    monochrome: { enabled: false }
  }
})
</script>
