<template>
  <v-app-bar
    flat
    app
    height="80"
    weight="30"
    class="px-4 pt-4"
    color="transparent"
  >
    <v-sheet
      class="w-100 d-flex align-center px-6 py-3 rounded-xl elevation-2 ma-4"
      color="primary"
    >
      <!-- Simulated search engine -->
      <v-text-field
        density="compact"
        hide-details
        variant="solo-filled"
        rounded
        prepend-inner-icon="mdi-magnify"
        placeholder="Try searching..."
        class="mr-4"
        style="max-width: 280px"
      />

      <v-spacer />

      <!-- Dark mode -->
      <v-btn 
        icon 
        variant="text" 
        class="mr-2"
        @click="toggleTheme" 
      >
        <v-icon>
          {{ theme.global.name.value === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
        </v-icon>
      </v-btn>

      <!-- Notification -->
      <v-btn 
        icon 
        variant="text" 
        class="mr-2"
      >
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <!-- Avatar + number -->
      <v-avatar 
        class="mr-2" 
        size="36"
      >
        <img 
          src="https://randomuser.me/api/portraits/women/79.jpg" 
          alt="profile image"
        >
      </v-avatar>
      <div class="d-none d-md-flex flex-column">
        <span class="text-body-2 font-weight-medium">Jean</span>
        <span class="text-caption">Dupont</span>
      </div>
    </v-sheet>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'
}
</script>
