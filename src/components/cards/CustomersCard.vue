<template>
  <div>
    <!-- Header -->
    <div class="d-flex justify-space-between mb-4">
      <div>
        <h6 
          class="text-h6 font-weight-semibold"
        >
          Customers
        </h6>
        <div 
          class="text-subtitle-2 text-textCard"
        >
          Last 7 days
        </div>
      </div>
      <div class="d-flex flex-column align-end">
        <div 
          class="text-h7 font-weight-semibold"
        >
          6,380
        </div>
        <v-chip
          density="default"
          size="x-small"
          variant="outlined"
          class="text-success mt-1"
          draggable="false"
          style="border: 1px solid currentColor; background-color: rgba(76,175,80,0.1);"
        >
          +26.5%
        </v-chip>
      </div>
    </div>

    <!-- Line chart -->
    <div class="mb-6">
      <apexchart
        type="line"
        height="120"
        :options="chartOptions"
        :series="chartSeries"
      />
    </div>

    <!-- Comparativas -->
    <div class="d-flex justify-space-between text-caption text-textCard mb-1">
      <span>April 07 – April 14</span>
      <span>6,380</span>
    </div>
    <div class="d-flex justify-space-between text-caption text-textCard">
      <span>Last Week</span>
      <span>4,298</span>
    </div>
  </div>
</template>

<script setup>
import ApexChart from 'vue3-apexcharts'

defineOptions({
  components: { apexchart: ApexChart }
})

const chartSeries = [
  {
    name: 'monthly earnings',
    data: [20, 10, 25, 15, 10, 18, 22],
  },
]

const chartOptions = {
  chart: {
    type: 'line',
    toolbar: { show: false },
    sparkline: { enabled: true }
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  colors: ['#0085DB'],
  markers: {
    size: 0,
    hover: {
      size: 5,
      sizeOffset: 2
    }
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    marker: { show: true },
    x: { show: false },
    y: {
      formatter: val => `monthly earnings: ${val}`
    }
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  xaxis: { labels: { show: false }, axisTicks: { show: false }, axisBorder: { show: false } },
  yaxis: { show: false },
}
</script>
