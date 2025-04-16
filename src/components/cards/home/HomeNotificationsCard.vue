<!-- HomeNotificationsCard.vue -->
<template>
  <div class="notifications-summary">
    <h3 
      class="text-subtitle-1 font-weight-medium mb-2"
    >
      Notifications
    </h3>
    <ul class="text-body-2 pl-4">
      <li>2 campaigns pending approval</li>
      <li>5 new sign-ups today</li>
      <li>No issues detected</li>
    </ul>
  </div>
</template>

<style scoped>
.notifications-summary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
