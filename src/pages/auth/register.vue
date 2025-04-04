<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card 
      class="pa-16" 
      max-width="400" 
      elevation="10" 
      rounded="xl"
    >
      <!-- Toggle de tema -->
      <v-btn
        icon
        variant="text"
        class="ma-0 pa-0 float-right"
        style="position: absolute; top: 16px; right: 16px"
        @click="toggleTheme"
      >
        <v-icon>
          {{ theme.global.name.value === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
        </v-icon>
      </v-btn>

      <!-- Logo + Nombre -->
      <div class="text-center mb-6 mt-4">
        <img
          :src="theme.global.name.value === 'dark' ? '/favicon.white.svg' : '/favicon.svg'"
          alt="Digit+ logo"
          width="48"
          height="48"
          class="mb-2"
        >
        <h2 
          class="text-h5 font-weight-bold mt-2"
        >
          Digit +
        </h2>
      </div>

      <!-- Formulario de registro -->
      <v-form @submit.prevent="handleRegister">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          density="comfortable"
          variant="outlined"
          rounded
          class="mb-4"
          required
        />

        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          density="comfortable"
          variant="outlined"
          rounded
          class="mb-4"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
        />

        <v-btn
          type="submit"
          color="primary"
          size="large"
          block
          class="mb-4"
        >
          Registrarse
        </v-btn>
      </v-form>

      <!-- Link a login -->
      <div class="text-center text-caption">
        Already have an account?
        <RouterLink
          :to="ROUTES.LOGIN"
          class="text-primary text-decoration-none"
        >
          Sign in
        </RouterLink>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { ROUTES } from '@/router/paths.js'
import { useAuth } from '@/composables/useAuth.js'
import { users } from '@/mock/users.js'

const theme = useTheme()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const { login } = useAuth()

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === 'dark' ? 'light' : 'dark'
}

const handleRegister = () => {
  const existingUser = users.find((u) => u.email === email.value.trim().toLowerCase())

  if (existingUser) {
    alert('Email already registered')
    return
  }

  const newUser = {
    email: email.value.trim().toLowerCase(),
    password: password.value,
    name: email.value.split('@')[0]
  }

  users.push(newUser)

  login(newUser)
}
</script>
