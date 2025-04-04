<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card 
      class="pa-6" 
      max-width="400" 
      elevation="10" 
      rounded="xl"
    >
      <!-- Toggle de tema -->
      <v-btn
        icon
        variant="text"
        class="ma-0 pa-0 float-right"
        style="position: absolute; 
        top: 16px; 
        right: 16px"
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

      <!-- Formulario -->
      <v-form @submit.prevent="handleLogin">
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
          Sign In
        </v-btn>
      </v-form>

      <!-- Extras -->
      <div class="d-flex justify-space-between text-caption mb-4">
        <v-checkbox 
          hide-details 
          label="Remember me" 
        />
        <a
          :href="ROUTES.FORGOT_PASSWORD"
          class="text-decoration-none"
          :style="{ color: 'var(--v-theme-textAccent)' }"
        >
          Forgot password?
        </a>
      </div>

      <div class="text-center text-caption">
        New to Digit+?
        <RouterLink
          :to="ROUTES.REGISTER"
          class="text-decoration-none"
          :style="{ color: 'var(--v-theme-textAccent)' }"
        >
          Create an account
        </RouterLink>
      </div>
    </v-card>
    <v-expansion-panels 
      multiple 
      class="mt-4"
    >
      <v-expansion-panel>
        <v-expansion-panel-title>
          Ver usuarios de prueba
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <ul class="text-caption pl-4">
            <li><strong>jean@example.com</strong></li>
            <li><strong>marie@example.com</strong></li>
            <li><strong>ada@example.com</strong></li>
          </ul>
          <p 
            class="text-caption mt-2"
          > 
            Puedes usar cualquier contraseña.
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import { ref } from "vue"
import { useTheme } from "vuetify"
import { users } from "@/mock/users.js"
import { ROUTES } from "@/router/paths.js"
import { useAuth } from "@/composables/useAuth.js"

const email = ref("")
const password = ref("")
const showPassword = ref(false)
const { login } = useAuth()
const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === "dark" ? "light" : "dark"
}

const handleLogin = () => {
  const user = users.find(
    (u) => u.email === email.value.trim().toLowerCase()
  )

  if (!user) {
    alert("Invalid email")
    return
  }

  try {
    login(user)
  } catch (err) {
    console.error("Error logging in:", err)
    alert("There was a problem. Please try again.")
  }
}

</script>
