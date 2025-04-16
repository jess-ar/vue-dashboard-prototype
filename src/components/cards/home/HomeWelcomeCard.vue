<!-- HomeWelcomeCard.vue -->
<template>
  <div class="home-welcome">
    <h2 class="text-h5 font-weight-medium mb-2">
      Welcome back, {{ user.name }} 👋
    </h2>
    <p class="text-body-2 text-medium-emphasis">
      Let's get started with your next campaign.
    </p>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>
.home-welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
