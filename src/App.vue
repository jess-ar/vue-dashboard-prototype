<template>
  <router-view v-slot="{ Component }">
    <PublicLayout v-if="isAuthRoute">
      <component 
        :is="Component" 
        :key="$route.fullPath"
      />
    </PublicLayout>

    <PrivateLayout v-else-if="isAuthenticated && Component">
      <component 
        :is="Component" 
        :key="$route.fullPath" 
      />
    </PrivateLayout>

    <!-- Fallback -->
    <div 
      v-else 
      class="pa-10 text-center text-red text-h6"
    >
      ❌ Unauthorized or unknown route.
      <code>{{ $route.fullPath }}</code>
    </div>
  </router-view>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { ROUTES } from '@/router/paths.js'
import { isAuthenticated } from '@/composables/useAuth.js'

import PublicLayout from '@/layouts/PublicLayout.vue'
import PrivateLayout from '@/layouts/PrivateLayout.vue'

const route = useRoute()
const currentPath = ref(route.path)

watchEffect(() => {
  currentPath.value = route.path
})

const publicRoutes = [
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.FORGOT_PASSWORD
]

const isAuthRoute = computed(() =>
  publicRoutes.some(p => currentPath.value.startsWith(p))
)
</script>
