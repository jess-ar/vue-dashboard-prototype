<template>
  <v-app>
    <div :class="['d-flex', isMobile ? 'flex-column' : 'flex-row']">
      <Sidebar />

      <div class="flex-grow-1 d-flex flex-column min-h-screen">
        <Topbar />

        <v-main class="flex-grow-1 mx-8">
          <slot></slot>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

import Sidebar from '@/components/layoutParts/sidebar/Sidebar.vue'
import Topbar from '@/components/layoutParts/topbar/Topbar.vue'

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)
</script>

<style scoped>
.sidebar-desktop {
  width: 260px;
  min-height: 100vh;
}
</style>
