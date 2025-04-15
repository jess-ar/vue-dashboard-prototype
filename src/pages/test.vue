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
        md="7"
      >
        <BaseCard 
          variant="hero" 
          :user="user"
        />
      </v-col>
      <v-col 
        cols="12" 
        md="5"
      >
        <v-row>
          <v-col 
            v-for="stat in smallStatsGroup1" 
            :key="stat.title" 
            cols="6"
          >
            <BaseCard 
              variant="stat" 
              :stat="stat" 
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row 
      class="my-4" 
      align="stretch"
    >
      <v-col 
        cols="12" 
        md="6"
      >
        <BaseCard 
          variant="campaign" 
          :progress="68" 
        />
      </v-col>
      <v-col 
        cols="12" 
        md="6"
      >
        <BaseCard 
          variant="congrats-summary" 
          date="April 14" 
        />
      </v-col>
    </v-row>

    <v-row 
      class="my-4" 
      align="stretch"
    >
      <v-col cols="6">
        <BaseCard 
          variant="audience"
          date="April 14"  
        />
      </v-col>

      <v-col cols="6">
        <BaseCard variant="orders-graph" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BaseCard from "@/components/Common/BaseCard";
import { users } from "@/mock/users.js";

const user = users[0];

const smallStatsGroup1 = [
  {
    title: "12 campaigns",
    subtitle: "Running this week",
    bottomText: "+38% active boost",
    colorClass: "text-success",
  },
  {
    title: "7 drafts",
    subtitle: "Pending approval",
    bottomText: "Review needed",
    colorClass: "text-warning",
  },
  {
    title: "3 countries",
    subtitle: "Targeted regions",
    bottomText: "Spain, France, Italy",
    colorClass: "text-medium-emphasis",
  },
  {
    title: "52% email",
    subtitle: "Channel distribution",
    bottomText: "SMS 48%",
    colorClass: "text-error",
  },
];
</script>
