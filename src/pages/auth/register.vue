<template>
  <v-container
    fluid
    class="d-flex align-center justify-center"
    style="min-height: 100vh;"
  >
    <!-- Main card -->
    <v-card
      class="pa-6 mx-auto ma-8"
      elevation="8"
      rounded="xl"
      color="white"
      style="width: 100%; max-width: 470px; min-height: 400px;"
    >
      <!-- Logo -->
      <div class="d-flex align-center justify-center gap-4 mb-5">
        <img
          src="/favicon.svg"
          alt="Digit+ logo"
          width="40"
          height="40"
        >
        <h2 class="text-h5 font-weight-bold mb-0 mr-4">
          Digit +
        </h2>
      </div>
      <!-- Login social -->
      <div 
        class="d-flex flex-row" 
        style="gap: 15px;"
      >
        <!-- Google -->
        <v-btn
          size="small"
          variant="flat"
          elevation="0"
          class="text-none font-weight-semibold flex-grow-1 pt-3 pb-8"
          style="border: 1px solid #d9d9d9; background-color: white;"
          @click="loginWithGoogle"
        >
          <img 
            :src="googleIcon" 
            alt="Google logo" 
            width="20" 
            class="mr-2"
          >
          <span class="d-none d-sm-inline">Sign in with Google</span>
          <span class="d-inline d-sm-none">Google</span>
        </v-btn>
        <!-- Microsoft -->
        <v-btn
          size="small"
          variant="flat"
          elevation="0"
          class="text-none font-weight-semibold flex-grow-1 pt-3 pb-8"
          style="border: 1px solid #d9d9d9; background-color: white;"
          @click="loginWithMicrosoft"
        >
          <img 
            :src="microsoftIcon" 
            alt="Microsoft logo" 
            width="20" 
            class="mr-2"
          >
          <span class="d-none d-sm-inline">Sign in with Microsoft</span>
          <span class="d-inline d-sm-none">Microsoft</span>
        </v-btn>
      </div>
      <!-- Divider -->
      <div 
        class="auth-divider my-6 pb-2 position-relative d-flex justify-center align-center" 
        style="width: 100%; height: 1px;"
      >
        <div
          class="position-absolute"
          style="top: 0; left: 0; width: 100%; border-top: 1px solid rgba(0, 0, 0, 0.12); z-index: 0;"
        ></div>
        <span
          class="text-subtitle-2 text-grey px-5 py-2 position-relative"
          style="z-index: 1; background-color: white;"
        >
          or sign Up with
        </span>
      </div>
      <!-- Form -->
      <v-form @submit.prevent="handleRegister">
        <!-- Name -->
        <div class="mb-8">
          <h3 
            class="mb-1 text-subtitle-2"
          >
            Name
          </h3>
          <v-text-field
            v-model="name"
            placeholder="Jean Dupont"
            variant="outlined"
            density="comfortable"
            hide-details
            class="custom-input"
            required
          />
        </div>
        <!-- Email -->
        <div class="mb-8">
          <h3 
            class="text-subtitle-2"
          >
            Email Address
          </h3>
          <v-text-field
            v-model="email"
            placeholder="jean@example.com"
            type="email"
            variant="outlined"
            density="comfortable"
            hide-details
            class="custom-input"
            required
          />
        </div>
        <!-- Password -->
        <div class="mb-10">
          <h3 
            class="text-subtitle-2"
          >
            Password
          </h3>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••"
            variant="outlined"
            density="comfortable"
            hide-details
            class="custom-input"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            required
            @click:append-inner="showPassword = !showPassword"
          />
        </div>
        <!-- Submit -->
        <v-btn
          type="submit"
          block
          size="large"
          elevation="0"
          class="sign-btn text-none rounded-pill pa-6"
          style="background-color: #1976d2; color: white; font-weight: bold;"
        >
          Sign Up
        </v-btn>
      </v-form>
      <!-- Login redirect -->
      <div 
        class="text-center mt-6 font-weight-regular" 
        style="font-size: 0.9rem;"
      >
        <span style="color: #9e9e9e;">
          Already have an Account?
        </span>
        <RouterLink
          :to="ROUTES.LOGIN"
          class="text-decoration-none"
          style="color: #1976d2; margin-left: 4px;"
        >
          Sign In
        </RouterLink>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth.js'
import { ROUTES } from '@/router/paths.js'
import { users } from '@/mock/users.js'

const googleIcon = new URL('@/assets/icons/google.svg', import.meta.url).href
const microsoftIcon = new URL('@/assets/icons/microsoft.svg', import.meta.url).href

const email = ref('')
const password = ref('')
const name = ref('')
const showPassword = ref(false)
const { login } = useAuth()

const handleRegister = () => {
  const existingUser = users.find((u) => u.email === email.value.trim().toLowerCase())
  if (existingUser) {
    alert('Email already registered')
    return
  }

  const newUser = {
    email: email.value.trim().toLowerCase(),
    password: password.value,
    name: name.value.trim()
  }

  users.push(newUser)
  login(newUser)
}

const loginWithGoogle = () => alert('Google login pending')
const loginWithMicrosoft = () => alert('Microsoft login pending')
</script>

<style scoped>
.custom-input-label {
  color: #2A3547;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  opacity: 1;
}

.custom-input .v-field {
  border-radius: 8px;
  border: 1px solid #e0e0e0c8 !important;
  box-shadow: none !important;
}

.custom-input input:disabled {
  background-color: #f9f9f9;
  color: #a1a1a1;
}

.sign-btn {
  background-color: #0284ff;
  color: white;
  font-weight: bold;
  box-shadow: 0 6px 10px rgba(2, 133, 255, 0.218) !important;
  transition: all 0.3s ease;
}

.sign-btn:hover {
  background-color: #0077e6;
  box-shadow: 0 8px 16px rgba(2, 132, 255, 0.5);
}

</style>
