<!-- HomeQuickActionsCard.vue -->
<template>
  <div class="quick-actions">
    <h3 
      class="text-subtitle-1 font-weight-medium mb-4"
    >
      Quick actions
    </h3>
    <v-btn 
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

<style scoped>
.quick-actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
