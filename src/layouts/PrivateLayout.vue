<template>
  <div :class="['d-flex', isMobile ? 'flex-column' : 'flex-row']">
    <!-- Sidebar solo and desktop -->
    <Sidebar 
      v-if="!isMobile" 
      class="sidebar-desktop" 
    />

    <!-- Main content with topbar and main -->
    <div class="flex-grow-1 d-flex flex-column">
      <Topbar />

      <v-main>
        <v-container class="pa-4">
          <slot />
        </v-container>
        <AppFooter />
      </v-main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

import Sidebar from '@/components/layoutParts/sidebar/Sidebar.vue'
import Topbar from '@/components/layoutParts/topbar/Topbar.vue'
import AppFooter from '@/components/layoutParts/footer/Footer.vue'

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)
</script>

<style scoped>
.sidebar-desktop {
  width: 260px;
  min-height: 100vh;
}
</style>
