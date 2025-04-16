<template>
  <v-app-bar
    flat
    app
    height="80"
    class="px-12 pt-4 backdrop-blur-xl"
    color="transparent"
  >
    <v-sheet
      class="w-100 d-flex align-center px-6 py-3 rounded-xl elevation-2 ma-4"
      color="primary"
    >
      <!-- Menu button  -->
      <v-btn
        icon
        variant="text"
        class="icon-svg-btn mr-4"
        @click="toggleSidebar"
      >
        <span
          class="icon-svg"
          v-html="hamburgerSvg"
        ></span>
      </v-btn>
      <!-- Search -->
      <template v-if="!isMobile">
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
      </template>
      <template v-else>
        <v-btn 
          icon 
          variant="text"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
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
import { sidebarState } from '@/stores/sidebar.js'
import { computed } from 'vue'
import hamburgerSvg from '@/assets/icons/hamburger.svg?raw'


const theme = useTheme()
const router = useRouter()
const { user, logout } = useAuth()

const { mdAndDown } = useDisplay()
const isMobile = computed(() => mdAndDown.value)


const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'
}

const toggleSidebar = () => {
  if (isMobile.value) {
    sidebarState.isDrawerOpen = !sidebarState.isDrawerOpen
  } else {
    sidebarState.isCollapsed = !sidebarState.isCollapsed
  }
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

.icon-svg svg {
  width: 24px;
  height: 24px;
  display: block;
  fill: currentColor;
}

/* HOVER */
.icon-svg-btn {
  transition: background-color 0.3s ease;
  border-radius: 50%;
  padding: 8px;
}

.icon-svg-btn:hover {
  background-color: rgba(0, 133, 219, 0.1);
}

.icon-svg-btn:hover .icon-svg svg {
  color: #0085DB;
}
</style>

