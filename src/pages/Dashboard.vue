<template>
  <v-container 
    class="px-6 sm:px-8 md:px-12 py-4 pt-10" 
    style="max-width: 1440px"
  >
    <!-- Fila: Summary + grupo de 4 -->
    <v-row 
      class="mb-1" 
    >
      <!-- Summary Orders Graph -->
      <v-col 
        cols="12" 
        md="6"
      >
        <BaseCard variant="summary-orders-graph" />
      </v-col>

      <!-- Grupo de 4 cards -->
      <v-col 
        cols="12" 
        md="6"
      >
        <v-row 
          align="stretch" 
          dense
        >
          <v-col 
            cols="12" 
            sm="6" 
            class="mb-2"
          >
            <BaseCard 
              variant="payments" 
            />
          </v-col>

          <v-col 
            cols="12" 
            sm="6" 
            class="mb-2"
          >
            <BaseCard 
              variant="products" 
            />
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

    <!-- Fila: Tabla + Card derecha -->
    <v-row 
      class="mb-6" 
      align="stretch"
    >
      <v-col 
        cols="12" 
        md="7"
      >
        <BaseCard variant="product-payments" />
      </v-col>

      <v-col 
        cols="12" 
        md="5"
      >
        <BaseCard variant="customers" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BaseCard from "@/components/common/BaseCard.vue";
</script>
