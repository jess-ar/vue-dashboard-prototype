<template>
  <v-container class="pa-4">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h4 font-weight-bold mb-4">
          📊 Your campaigns
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <Campaigns />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Campaigns from '@/components/pageParts/dashboard/Campaigns.vue'
</script>
