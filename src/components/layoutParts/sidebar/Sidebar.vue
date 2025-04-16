<template>
  <v-navigation-drawer
    v-model="drawer"
    :permanent="!isMobile"
    :temporary="isMobile"
    :rail="!isMobile && isRail"
    app
    location="left"
    :width="sidebarWidth"
    mobile-breakpoint="960"
    class="bg-cardColor ma-4 mr-10 mt-5 rounded-xl"
    :style="railStyles"
  >
    <v-list class="d-flex flex-column flex-grow-1 mr-4">
      <!-- Logo -->
      <v-list-item
        :style="isMobile 
          ? { padding: '0' } 
          : isRail 
            ? { padding: '8px 0', justifyContent: 'center' } 
            : { padding: '8px 0 0 0' }"
      >
        <v-list-item-content
          class="d-flex align-center"
          :style="{
            paddingLeft: isMobile.value || isRail ? '0' : '28px',
            justifyContent: isRail ? 'center' : 'flex-start'
          }"
        >
          <img
            :src="theme.global.name.value === 'dark' ? '/favicon.white.svg' : '/favicon.svg'"
            alt="Logo Digit+"
            width="28"
            height="28"
          >
          <span 
            v-if="!isRail" 
            class="font-weight-bold text-h5 ml-2"
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
        :mobile="isMobile"
      />

      <v-divider class="my-4" />
      <v-spacer />
    </v-list>
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
  get: () => isMobile.value ? false : sidebarState.isCollapsed,
  set: (val) => sidebarState.isCollapsed = val
})

const sidebarWidth = computed(() => {
  if (isMobile.value) return 240
  return isRail.value ? 72 : 270
})

const railStyles = computed(() => {
  return (!isMobile.value && isRail.value)
    ? {
        width: '72px',
        minWidth: '72px',
        maxWidth: '72px'
      }
    : {}
})

watch(isMobile, (val) => {
  if (val) sidebarState.isCollapsed = false
})

const items = [
  { title: 'Home', icon: 'mdi-home', path: ROUTES.HOME },
  { title: 'Dashboard', icon: 'mdi-view-dashboard', path: ROUTES.DASHBOARD },
  { title: 'Campaigns', icon: 'mdi-format-list-bulleted', path: ROUTES.CAMPAIGNS },
  { title: 'Edit', icon: 'mdi-pencil', path: ROUTES.EDIT },
  { title: 'Profile', icon: 'mdi-account', path: ROUTES.PROFILE },
  { title: 'Settings', icon: 'mdi-cog', path: ROUTES.SETTINGS },
  { title: 'Test', icon: 'mdi-flask-outline', path: ROUTES.TEST },
  { title: 'Exit', icon: 'mdi-logout', action: 'logout' }
]
</script>
