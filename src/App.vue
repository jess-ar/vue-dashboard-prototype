<template>
  <v-app>
    <v-main class="d-flex flex-row min-h-screen">
      <Sidebar />

      <div class="flex-grow-1 d-flex flex-column">
        <Topbar />
        
        <div class="flex-grow-1 px-6 py-4">
          <router-view />
        </div>

        <div
          class="text-caption px-6 pb-4 text-center text-sm-end"
          :style="{ color: 'var(--v-theme-text)' }"
        >
          © 2025 Digit +
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import Topbar from '@/components/layout/topbar/Topbar.vue';
import Sidebar from '@/components/layout/sidebar/Sidebar.vue'
</script>
