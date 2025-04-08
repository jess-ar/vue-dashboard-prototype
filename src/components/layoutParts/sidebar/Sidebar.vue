<template>
  <v-navigation-drawer
    v-model="drawer"
    :permanent="!isMobile"
    :temporary="isMobile"
    app
    location="left"
    :width="sidebarWidth"
    class="bg-transparent animated-drawer z-[9999]"
    mobile-breakpoint="960"
  >
    <v-sheet 
      class="ma-4 rounded-xl elevation-2 d-flex flex-column"
      color="primary"
      style="height: calc(100% - 100px)"
    >
      <v-list class="d-flex flex-column flex-grow-1">
        <!-- Logo and name -->
        <v-list-item>
          <v-list-item-content class="d-flex align-center">
            <img
              :src="theme.global.name.value === 'dark' ? '/favicon.white.svg' : '/favicon.svg'"
              alt="Logo Digit+"
              width="28"
              height="28"
            >
            <span 
              v-if="!isRail" 
              class="font-weight-bold text-body-1"
            >
              Digit +
            </span>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-4" />

        <!-- Menu items -->
        <SidebarItem
          v-for="item in items"
          :key="item.title"
          :item="item"
          :rail="isRail"
        />

        <v-divider class="my-4" />

        <!-- Collapse button -->
        <v-spacer />
        <v-list-item 
          v-if="!isMobile"
          link
          :class="{ 'rail-mode': isRail }"
          class="collapse-item"
          @click="toggleRail"
        >
          <v-list-item-icon>
            <v-icon>
              {{ isRail ? "mdi-chevron-right" : "mdi-chevron-left" }}
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useTheme, useDisplay } from 'vuetify'
import SidebarItem from './SidebarItem.vue'
import { sidebarState } from '@/stores/sidebar'
import { ROUTES } from '@/router/paths'

const theme = useTheme()

const { mdAndDown } = useDisplay()
const isMobile = computed(() => mdAndDown.value)

const drawer = computed({
  get: () => sidebarState.isDrawerOpen,
  set: (val) => sidebarState.isDrawerOpen = val
})

const isRail = computed({
  get: () => sidebarState.isCollapsed,
  set: (val) => sidebarState.isCollapsed = val
})

const toggleRail = () => {
  isRail.value = !isRail.value
}

const sidebarWidth = computed(() => {
  if (isMobile.value) return 180
  return isRail.value ? 92 : 230 
})

watch(isMobile, (val) => {
  if (!val) drawer.value = true
})

const items = [
  { title: 'home', icon: 'mdi-home', path: ROUTES.HOME },
  { title: 'dashboard', icon: 'mdi-view-dashboard', path: ROUTES.DASHBOARD },
  { title: 'profile', icon: 'mdi-account', path: ROUTES.PROFILE },
  { title: 'edit', icon: 'mdi-pencil', path: ROUTES.EDIT },
  { title: 'calendar', icon: 'mdi-calendar', path: ROUTES.CALENDAR },
  { title: 'settings', icon: 'mdi-cog', path: ROUTES.SETTINGS },
  { title: 'exit', icon: 'mdi-logout', action: 'logout' },
]
</script>

<style scoped>
.collapsed {
  transition: width 0.3s ease;
}

.collapsed .v-list-item {
  padding-left: 0;
  padding-right: 0;
  justify-content: center;
}

.collapsed :deep(.v-list-item-icon) {
  margin: 0 auto;
  justify-content: center;
}

.collapsed :deep(.v-list-item-content) {
  display: none;
}

</style>
