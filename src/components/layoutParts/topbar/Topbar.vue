<template>
  <v-app-bar
    flat
    app
    height="80"
    class="px-4 pt-4"
    color="transparent"
  >
    <v-sheet
      class="w-100 d-flex align-center px-6 py-3 rounded-xl elevation-2 ma-4"
      color="primary"
    >
      <!-- Menu button only visible on mobile -->
      <v-btn 
        v-if="isMobile" 
        icon 
        variant="text" 
        @click="toggleDrawer"
      >
        <v-icon>
          {{ sidebarState.isDrawerOpen ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
        </v-icon>
      </v-btn>

      <!-- Search -->
      <v-text-field
        density="compact"
        hide-details
        variant="solo-filled"
        rounded
        prepend-inner-icon="mdi-magnify"
        placeholder="Try searching..."
        :style="{ maxWidth: '280px' }"
        class="w-full md:w-auto"
      />

      <v-spacer />

      <!-- Dark mode -->
      <v-btn 
        icon 
        variant="text" 
        @click="toggleTheme"
      >
        <v-icon>
          {{ theme.global.name.value === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
        </v-icon>
      </v-btn>

      <!-- Notifications -->
      <v-btn 
        icon 
        variant="text"
      >
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <!-- Avatar with menu -->
      <v-menu offset-y>
        <template #activator="{ props }">
          <v-btn 
            v-bind="props" 
            icon
          >
            <v-avatar size="36">
              <img 
                :src="user?.avatar || '/default-avatar.svg'" 
                alt="profile image" 
              >
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title class="font-weight-bold">
              {{ user?.name || user?.email || 'Guest' }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="handleLogout">
            <v-list-item-title>Log out</v-list-item-title>
            <v-icon end>
              mdi-logout
            </v-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-sheet>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth.js'
import { useDisplay } from 'vuetify'
import { sidebarState, toggleDrawer } from '@/stores/sidebar.js'

const theme = useTheme()
const router = useRouter()
const { user, logout } = useAuth()
const { mdAndDown } = useDisplay()
const isMobile = mdAndDown

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'
}

const handleLogout = () => {
  logout()
  router.replace('/login')
}
</script>

<style scoped>
@media (max-width: 600px) {
  .v-app-bar .v-icon {
    margin-right: 1px;
    margin-left: 1px;
    padding-left: 1px;
    padding-right: 1px;
  }
}
</style>
