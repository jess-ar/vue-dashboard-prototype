<template>
  <v-container 
    class="mx-auto px-4" 
    style="max-width: 1440px"
  >
    <v-row 
      class="my-4" 
      align="stretch"
    >
      <v-col 
        cols="12" 
        md="6"
      >
        <BaseCard 
          variant="congrats-summary" 
          date="April 14" 
        />
      </v-col>
      <v-col 
        cols="12" 
        md="6"
      >
        <BaseCard 
          variant="campaign" 
          :progress="68" 
        />
      </v-col>
    </v-row>

    <v-row 
      class="my-4" 
      align="stretch"
    >
      <v-col cols="6">
        <BaseCard 
          variant="orders-graph" 
        />   
      </v-col>
      <v-col cols="6">
        <BaseCard 
          variant="audience"
          date="April 14"  
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BaseCard from "@/components/Common/BaseCard";

</script>
