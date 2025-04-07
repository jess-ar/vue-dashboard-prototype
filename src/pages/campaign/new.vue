<template>
  <v-container class="pa-8">
    <!-- StepAction centrado arriba -->
    <v-row 
      justify="center" 
      align="center" 
      class="mb-8"
    >
      <StepHeader :current-step="1" />
    </v-row>

    <!-- Botón fijo abajo a la derecha -->
    <v-row 
      justify="end" 
      class="mt-auto"
    >
      <BaseButton 
        label="Step 2 - Visuals" 
        icon="mdi-calendar-plus" 
        variant="confirm"
        class="mt-16"
      />
    </v-row>
  </v-container>
</template>

<script setup>
import StepHeader from '@/components/common/StepHeader.vue'
import BaseButton from '@/components/common/BaseButton.vue'
</script>
