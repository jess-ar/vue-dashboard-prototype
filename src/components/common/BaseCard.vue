<template>
  <div
    class="base-card"
    :class="computedClass"
    :style="computedStyle"
  >
    <component 
      :is="currentComponent"
      v-bind="propsToPass"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

import PaymentsCard from '@/components/cards/PaymentsCard.vue'
import ProductsCard from '@/components/cards/ProductsCard.vue'
import LatestDealCard from '@/components/cards/LatestDealCard.vue'
import CustomersCard from '@/components/cards/CustomersCard.vue'
import SummaryOrdersGraphCard from '@/components/cards/SummaryOrdersGraphCard.vue'

import HomeWelcomeCard from '@/components/cards/home/HomeWelcomeCard.vue'
import HomeQuickActionsCard from '@/components/cards/home/HomeQuickActionsCard.vue'
import HomeNotificationsCard from '@/components/cards/home/HomeNotificationsCard.vue'

const props = defineProps({
  variant: { type: String, required: true },
  user: { type: Object, default: () => ({}) },
  stat: { type: Object, default: () => ({}) }
})

const componentMap = {
  'payments': PaymentsCard,
  'products': ProductsCard,
  'latest-deal': LatestDealCard,
  'customers': CustomersCard,
  'summary-orders-graph': SummaryOrdersGraphCard,

  'home-welcome': HomeWelcomeCard,
  'home-quick-actions': HomeQuickActionsCard,
  'home-notifications': HomeNotificationsCard
}

const currentComponent = computed(() => componentMap[props.variant] || null)
const propsToPass = computed(() => ({ ...props }))

const computedClass = computed(() => [
  'pa-4',
  'rounded-xl',
  'd-flex',
  'flex-column',
  'justify-space-between',
  'elevation-1',
  'bg-cardColor'
])

const computedStyle = computed(() => ({
  minHeight: props.variant === 'stat' ? '195px' : '185px',
  height: '100%'
}))
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
</style>
