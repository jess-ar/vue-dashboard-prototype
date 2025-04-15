<template>
  <div
    class="base-card"
    :class="computedClass"
    :style="computedStyle"
  >
    <template v-if="variant === 'hero'">
      <div class="d-flex align-center mb-4">
        <v-avatar 
          size="56" 
          class="me-4"
        >
          <img 
            :src="user?.avatar" 
            :alt="user?.name" 
          >
        </v-avatar>
        <div>
          <h3 class="text-h5 font-weight-bold mb-1">
            Congratulations, {{ user?.name }}!
          </h3>
          <p class="text-body-2 textCard">
            Your campaign engagement is up by 38%
          </p>
        </div>
      </div>
      <v-divider class="my-4" />
      <div>
        <div 
          class="text-caption textCard mb-1"
        >
          Audience Overview
        </div>
        <div 
          class="text-body-2 textCard mb-2"
        >
          Weekly targeting insights
        </div>
        <v-sparkline
          class="text-graphPrimary"
          :model-value="[4, 16, 12, 18, 24, 20, 28]"
          height="80"
          smooth
          auto-draw
          :auto-draw-duration="1500"
          fill
          stroke-linecap="round"
        />
      </div>
    </template>

    <template v-else-if="variant === 'stat'">
      <div 
        class="text-caption textCard mb-2"
      >
        {{ stat.subtitle }}
      </div>
      <div 
        class="text-h6 font-weight-bold mb-1"
      >
        {{ stat.title }}
      </div>
      <div 
        :class="[stat.colorClass, 'text-body-2']"
      >
        {{ stat.bottomText }}
      </div>
    </template>

    <template v-else-if="variant === 'campaign'">
      <div class="d-flex justify-space-between align-center mb-4">
        <div>
          <div 
            class="text-caption textCard mb-1"
          >
            Campaign Reach
          </div>
          <div 
            class="text-h6 font-weight-bold"
          >
            18,200
          </div>
          <div 
            class="text-success text-body-2 mb-2"
          >
            +32.1%
          </div>
          <div 
            class="text-body-2 textCard"
          >
            Compared to last campaign
          </div>
        </div>
        <v-progress-circular
          :model-value="progress || 0"
          size="80"
          width="10"
          rotate="-90"
          class="ms-4 text-graphPrimary"
        >
          <span class="text-caption">{{ progress }}%</span>
        </v-progress-circular>
      </div>
    </template>

    <template v-else-if="variant === 'audience'">
      <div 
        class="text-caption textCard mb-2"
      >
        New Audience Segments
      </div>
      <div 
        class="text-h6 font-weight-bold mb-1"
      >
        5,120
      </div>
      <div 
        class="text-success text-body-2 mb-4"
      >
        +14.3%
      </div>
      <div 
        class="text-body-2 textCard"
      >
        Last update: {{ date || 'N/A' }}
      </div>
    </template>

    <template v-if="variant === 'congrats-summary'">
      <div class="d-flex flex-column flex-md-row justify-space-between align-center w-100 h-100">
        <!-- Left side: Texts and icons -->
        <div class="flex-1 pe-md-8">
          <h3 class="text-h6 font-weight-bold mb-1">
            Congratulations Jonathan
          </h3>
          <p class="text-subtitle-1 textCard mb-4">
            You have done 38% more sales
          </p>

          <ul 
            class="pa-0 ma-0" 
            style="list-style: none;"
          >
            <li 
              class="d-flex align-center mb-4"
            >
              <v-avatar 
                size="40" 
                class="me-4" 
                color="success" 
                variant="flat"
              >
                <v-icon 
                  size="20" 
                  color="white"
                >
                  mdi-cart
                </v-icon>
              </v-avatar>
              <div>
                <h6 
                  class="mb-1 text-subtitle-1 font-weight-semibold"
                >
                  64 new orders
                </h6>
                <p 
                  class="text-subtitle-2 textCard font-weight-medium"
                >
                  Processing
                </p>
              </div>
            </li>

            <li class="d-flex align-center mb-4">
              <v-avatar 
                size="40" 
                class="me-4" 
                color="warning" 
                variant="flat"
              >
                <v-icon 
                  size="20" 
                  color="white"
                >
                  mdi-timer-sand
                </v-icon>
              </v-avatar>
              <div>
                <h6 
                  class="mb-1 text-subtitle-1 font-weight-semibold"
                >
                  4 orders
                </h6>
                <p 
                  class="text-subtitle-2 textCard font-weight-medium"
                >
                  On hold
                </p>
              </div>
            </li>

            <li class="d-flex align-center">
              <v-avatar 
                size="40" 
                class="me-4" 
                color="info" 
                variant="flat"
              >
                <v-icon 
                  size="20" 
                  color="white"
                >
                  mdi-truck-delivery
                </v-icon>
              </v-avatar>
              <div>
                <h6 
                  class="mb-1 text-subtitle-1 font-weight-semibold"
                >
                  12 orders
                </h6>
                <p 
                  class="text-subtitle-2 textCard font-weight-medium"
                >
                  Delivered
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right side: Image -->
        <div class="mt-6 mt-md-0">
          <img 
            src="@/assets/images/man-working-on-laptop.png" 
            alt="Man working on laptop" 
            class="w-100" 
            style="max-width: 220px;"
          >
        </div>
      </div>
    </template>

    <template v-else-if="variant === 'orders-graph'">
      <div>
        <div class="d-sm-flex justify-space-between align-center mb-4">
          <div>
            <h5 
              class="text-h6 mb-1 font-weight-semibold"
            >
              Total Orders
            </h5>
            <div class="text-subtitle-1 textCard">
              Weekly order updates
            </div>
          </div>
          <v-select
            v-model="selectedRange"
            density="compact"
            variant="outlined"
            hide-details
            :items="['This Week', 'March 2023', 'April 2023', 'May 2023']"
            class="select-graph"
          />
        </div>
        <apexchart
          height="260"
          type="line"
          :options="chartOptions"
          :series="chartSeries"
        />
      </div>
    </template>
    <template v-if="variant === 'home-card'">
      <router-link
        :to="homeRoute"
        class="d-flex flex-column align-center justify-center text-center text-decoration-none"
        style="height: 100%;"
      >
        <v-avatar 
          size="56" 
          class="mb-3" 
          color="secondary"
        >
          <v-icon 
            size="32" 
            color="white"
          >
            {{ homeIcon }}
          </v-icon>
        </v-avatar>
        <div class="text-subtitle-1 font-weight-medium text-textCard">
          {{ homeLabel }}
        </div>
      </router-link>
    </template>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import ApexChart from 'vue3-apexcharts'

defineExpose()
defineOptions({
  components: {
    apexchart: ApexChart
  }
})

const selectedRange = ref('This Week')

const props = defineProps({
  variant: {
    type: String,
    required: true
  },
  user: {
    type: Object,
    default: () => ({})
  },
  stat: {
    type: Object,
    default: () => ({})
  },
  progress: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  },
  homeRoute: {
  type: String,
  default: '/'
  },
  homeLabel: {
    type: String,
    default: 'Go'
  },
  homeIcon: {
    type: String,
    default: 'mdi-home'
}
})

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

const computedClass = computed(() => {
  return [
    'pa-4',
    'rounded-xl',
    'd-flex',
    'flex-column',
    'justify-space-between',
    'elevation-1',
    'bg-cardColor'
  ]
})

const computedStyle = computed(() => {
  return {
    minHeight: props.variant === 'stat' ? '195px' : '185px',
    height: '100%'
  }
})
</script>

<style scoped>
.base-card {
  transition: background-color 0.3s ease, color 0.3s ease;
}

@media (max-width: 960px) {
  .base-card {
    padding: 16px !important;
  }
}

.border-md-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.select-graph {
  max-width: 160px;
  min-width: 130px;
  align-self: flex-start;
}
</style>
