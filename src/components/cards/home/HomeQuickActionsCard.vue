<template>
  <div style="display: flex; flex-direction: column; justify-content: center; height: 100%;">
    <h3 class="text-subtitle-1 font-weight-medium mb-4">
      Quick actions
    </h3>
    <v-btn
      :to="ROUTES.AUDIENCE_INDEX"
      variant="tonal"
      prepend-icon="mdi-plus"
      class="mb-2"
      block
    >
      New campaign
    </v-btn>
    <v-btn
      variant="tonal"
      prepend-icon="mdi-chart-bar"
      block
    >
      View reports
    </v-btn>
  </div>
</template>

<script setup>
import { ROUTES } from '@/router/paths.js'
</script>
