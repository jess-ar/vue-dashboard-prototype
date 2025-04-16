<template>
  <v-container 
    class="mx-auto px-8" 
    style="max-width: 1440px"
  >
    <v-row 
      class="my-4" 
      align="stretch"
    >
      <!-- Summary Orders Graph -->
      <v-col 
        cols="12" 
        md="6"
      >
        <BaseCard 
          variant="summary-orders-graph" 
        />
      </v-col>

      <!-- group -->
      <v-col 
        cols="12" 
        md="6"
      >
        <v-row dense>
          <v-col 
            cols="12" 
            sm="6"
          >
            <BaseCard variant="payments" />
          </v-col>

          <v-col 
            cols="12" 
            sm="6"
          >
            <BaseCard variant="products" />
          </v-col>

          <v-col 
            cols="12" 
            sm="6"
          >
            <BaseCard variant="latest-deal" />
          </v-col>

          <v-col 
            cols="12" 
            sm="6"
          >
            <BaseCard variant="customers" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BaseCard from "@/components/common/BaseCard.vue";
</script>
