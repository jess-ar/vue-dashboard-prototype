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
          or sign in with
        </span>
      </div>
      <!-- Form -->
      <v-form @submit.prevent="handleLogin">
        <!-- Username -->
        <div class="mb-4">
          <h3 
            class="mb-1 text-subtitle-2"
          >
            Email
          </h3>
          <v-text-field
            v-model="email"
            placeholder="info@wrappixel.com"
            type="email"
            variant="outlined"
            density="comfortable"
            hide-details
            class="custom-input mb-10"
            required
          />
        </div>
        <!-- Password -->
        <div class="mb-4">
          <h3 
            class="mb-1 text-subtitle-2"
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
            disabled
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="toggleShowPassword"
          />
        </div>
        <!-- Extras -->
        <div class="d-flex justify-space-between align-center text-caption mb-6">
          <v-checkbox
            hide-details
            label="Remember this Device"
            density="compact"
            class="ma-0 pa-0"
            style="color: #5F5F5F; font-size: 0.9rem;"
          />
          <a
            :href="ROUTES.FORGOT_PASSWORD"
            class="text-decoration-none ml-2"
            style="color: #1976d2; font-size: 0.9rem;"
          >
            Forgot Password?
          </a>
        </div>
        <!-- Submit -->
        <v-btn
          type="submit"
          block
          size="large"
          elevation="1"
          class="sign-btn text-none rounded-pill pa-6"
          style="background-color: #1976d2; color: white; font-weight: bold;"
        >
          Sign In
        </v-btn>
      </v-form>
      <!-- Register -->
      <div 
        class="text-center mt-4 font-weight-regular" 
        style="font-size: 0.9rem;"
      >
        <span style="color: #9e9e9e;">
          New to Digit+?
        </span>
        <RouterLink
          :to="ROUTES.REGISTER"
          class="text-decoration-none"
          style="color: #1976d2; margin-left: 4px;"
        >
          Create an account
        </RouterLink>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue"
import { users } from "@/mock/users.js"
import { ROUTES } from "@/router/paths.js"
import { useAuth } from "@/composables/useAuth.js"

const googleIcon = new URL('@/assets/icons/google.svg', import.meta.url).href
const microsoftIcon = new URL('@/assets/icons/microsoft.svg', import.meta.url).href

const email = ref("")
const password = ref("")
const showPassword = ref(false)
const { login } = useAuth()


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

<style scoped>

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
