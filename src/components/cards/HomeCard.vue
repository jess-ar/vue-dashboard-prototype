<template>
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

<script setup>
defineProps({
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
</script>
