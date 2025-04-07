<template>
  <v-container
    fluid
    class="d-flex align-center justify-center"
    style="min-height: 100vh;"
  >
    <v-card
      class="pa-10 mx-auto"
      elevation="8"
      rounded="xl"
      color="white"
      style="width: 100%; max-width: 480px;"
    >
      <!-- Logo -->
      <div class="d-flex align-center justify-center gap-4 mb-6">
        <img 
          src="/favicon.svg" 
          alt="Digit+ logo" 
          width="48" 
          height="48" 
        >
        <h2 
          class="text-h5 font-weight-bold mb-0 ml-2"
        >
          Digit +
        </h2>
      </div>

      <!-- Description -->
      <p
        class="text-center text-body-1 mb-8"
        style="color: #607d8b"
      >
        Please enter the email address associated with your account and we will email you a link to reset your password.
      </p>

      <!-- Form -->
      <v-form @submit.prevent="handleReset">
        <div class="mb-6">
          <div 
            class="custom-input-label"
          >
            Email Address
          </div>
          <v-text-field
            v-model="email"
            type="email"
            placeholder="you@example.com"
            variant="outlined"
            density="comfortable"
            hide-details
            class="custom-input"
            required
          />
        </div>

        <!-- Send button -->
        <v-btn
          type="submit"
          block
          size="large"
          elevation="0"
          class="text-none rounded-pill pa-7 mb-4"
          style="
            background-color: #1976d2;
            color: white;
            font-weight: 500;
            box-shadow: 0 6px 12px rgba(2, 132, 255, 0.3);
          "
        >
          Forgot Password
        </v-btn>

        <!-- Back to login -->
        <RouterLink :to="ROUTES.LOGIN">
          <v-btn
            block
            size="large"
            elevation="0"
            class="text-none text-decoration-none rounded-pill pa-7"
            style="
              background-color: #e3f2fd;
              color: #0284ff;
              font-weight: 500;
              box-shadow: 0 6px 12px rgba(2, 132, 255, 0.15);
            "
          >
            Back To Login
          </v-btn>
        </RouterLink>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { ROUTES } from '@/router/paths.js'

const email = ref('')
const handleReset = () => {
  alert(`Reset link sent to ${email.value}`)
}
</script>

<style scoped>
.custom-input-label {
  color: #2a3547;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.custom-input .v-field {
  border-radius: 8px;
  border: 1px solid #e0e0e0c8 !important;
  box-shadow: none !important;
}

.custom-input input {
  color: #1a1a1a;
}
</style>
