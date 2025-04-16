<template>
  <v-container 
    class="mx-auto px-8" 
    style="max-width: 1440px"
  >
    <!-- Row welcome -->
    <v-row 
      class="my-4" 
      align="stretch"
    >
      <v-col 
        cols="12" 
        md="6"
      >
        <BaseCard 
          variant="home-welcome" 
          :user="user" 
        />
      </v-col>

      <v-col 
        cols="12" 
        md="6"
      >
        <BaseCard variant="home-quick-actions" />
      </v-col>
    </v-row>

    <!-- Row de notificaciones -->
    <v-row 
      class="my-4" 
      align="stretch"
    >
      <v-col 
        cols="12" 
        md="6"
      >
        <BaseCard variant="home-notifications" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { users } from '@/mock/users.js'
import BaseCard from '@/components/common/BaseCard.vue'


const user = users[0] || { name: 'User' }
</script>

