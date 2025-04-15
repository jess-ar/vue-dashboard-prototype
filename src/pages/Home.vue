<template>
  <v-container 
    class="mx-auto px-4" 
    style="max-width: 1440px"
  >
    <!-- Welcome Block -->
    <v-row class="mt-4">
      <v-col cols="12">
        <h1 class="text-h5 font-weight-bold mb-2">
          Welcome, {{ user.name }}
        </h1>
        <p class="text-subtitle-1 textCard">
          Let's get started by exploring your dashboard.
        </p>
      </v-col>
    </v-row>

    <!-- Shortcut Cards -->
    <v-row 
      class="mt-2" 
      align="stretch"
    >
      <v-col
        v-for="card in homeCards"
        :key="card.title"
        cols="12"
        sm="4"
      >
        <BaseCard
          variant="home-card"
          :home-route="card.to"
          :home-label="card.title"
          :home-icon="card.icon"
          class="pa-4 rounded-xl elevation-1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BaseCard from '@/components/Common/BaseCard'
import { users } from '@/mock/users.js'

const user = users[0] || { name: 'User' }

const homeCards = [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/dashboard'
  },
  {
    title: 'Campaigns',
    icon: 'mdi-bullhorn',
    to: '/campaigns'
  },
  {
    title: 'Edit',
    icon: 'mdi-pencil-outline',
    to: '/edit'
  }
]
</script>
