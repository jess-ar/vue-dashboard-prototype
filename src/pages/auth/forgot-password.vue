<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card 
      class="pa-6" 
      max-width="420" 
      elevation="10" 
      rounded="xl"
    >
      <div class="text-center mb-6">
        <v-icon 
          size="48" 
          color="primary"
        >
          mdi-lock-reset
        </v-icon>
        <h2 
          class="text-h5 font-weight-bold mt-2"
        >
          Forgot your password?
        </h2>
        <p 
          class="text-body-2 mt-2"
        >
          Enter your email and we’ll send you a reset link.
        </p>
      </div>

      <v-form @submit.prevent="handleSubmit">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          variant="outlined"
          density="comfortable"
          required
          class="mb-4"
        />

        <v-btn 
          type="submit" 
          color="primary" 
          block 
          size="large" 
          class="mb-2"
        >
          Send reset link
        </v-btn>

        <RouterLink 
          :to="ROUTES.LOGIN" 
          class="text-caption text-primary text-decoration-none"
        >
          Back to login
        </RouterLink>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { ROUTES } from '@/router/paths.js'

const email = ref('')

const handleSubmit = () => {
  // Aquí puedes integrar con tu lógica real
  alert(`Reset link sent to ${email.value}`)
  email.value = ''
}
</script>
