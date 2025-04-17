<template>
  <div>
    <!-- Header -->
    <div class="d-flex justify-space-between mb-4">
      <div>
        <h6 
          class="text-h6 font-weight-semibold"
        >
          Payments
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
          12,389
        </div>
        <v-chip
          density="default"
          size="x-small"
          variant="outlined"
          class="text-warning mt-1"
          draggable="false"
          style="border: 1px solid currentColor; background-color: rgba(255,152,0,0.1);"
        >
          -3.8%
        </v-chip>
      </div>
    </div>

    <!-- ApexChart -->
    <div class="mb-4">
      <ApexChart
        type="bar"
        height="150"
        :options="chartOptions"
        :series="series"
      />
    </div>

    <!-- Legend -->
    <ul
      role="list"
      aria-label="Payment methods"
      style="display: flex; flex-direction: column; gap: 8px; padding: 0; margin: 0;"
    >
      <li
        v-for="opt in options"
        :key="opt.value"
        class="d-flex justify-space-between align-center"
      >
        <div class="d-flex align-center">
          <div
            :style="{
              width: '14px',
              height: '13px',
              border: '2px solid ' + (opt.value === 'paypal' ? '#0085DB' : '#C0C4CC'),
              borderRadius: '50%',
              boxSizing: 'border-box'
            }"
            aria-hidden="true"
          ></div>
          <span class="text-body-2 text-textCard ml-2">{{ opt.label }}</span>
        </div>
        <span class="text-body-2 font-weight-regular text-textCard">
          {{ opt.perc }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ApexChart from 'vue3-apexcharts'

const bars = [
  { grey: 26, blue: 16 },
  { grey: 32, blue: 22 },
  { grey: 30, blue: 18 },
  { grey: 29, blue: 19 },
  { grey: 31, blue: 21 },
  { grey: 32, blue: 22 },
  { grey: 28, blue: 18 }
]

const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const series = [
  {
    name: 'Credit Card',
    data: bars.map(b => b.grey),
  },
  {
    name: 'Paypal',
    data: bars.map(b => b.blue),
  },
]

const chartOptions = {
  chart: {
    type: 'bar',
    stacked: true,
    toolbar: { show: false },
    animations: { enabled: true },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      borderRadius: 3,
    },
  },
  dataLabels: { enabled: false },
  tooltip: {
    enabled: true,
    theme: 'dark',
  },
  xaxis: {
    categories: labels,
    labels: {
      show: true,
      style: {
        colors: '#A0A4AB',
        fontSize: '12px',
      },
    },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
  yaxis: { show: false },
  grid: {
    padding: { bottom: 10 },
    show: false,
  },
  colors: ['#C0C4CC', '#0085DB'],
  legend: { show: false },
}

const options = [
  { value: 'paypal', label: 'Paypal', perc: '52%' },
  { value: 'card', label: 'Credit Card', perc: '48%' }
]
</script>
