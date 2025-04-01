<template>
  <v-navigation-drawer
    v-model="drawer"
    :permanent="!isMobile"
    :temporary="isMobile"
    app
    :width="sidebarWidth"
    class="bg-transparent"
    :class="{ collapsed: isCollapsed }"
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
              :class="!isRail ? 'mr-2' : ''"
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
          :title="item.title"
          :icon="item.icon"
          :path="item.path"
          :rail="isRail"
        />

        <v-divider class="my-4" />

        <!-- Collapse button -->
        <v-spacer />
        <v-list-item 
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
          <v-list-item-content v-if="!isRail">
            <v-list-item-title 
              class="font-weight-bold"
            >
              Collapse
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme, useDisplay } from 'vuetify'
import SidebarItem from './SidebarItem.vue'

const { mdAndDown } = useDisplay()
const isMobile = computed(() => mdAndDown.value)

const theme = useTheme()
const drawer = ref(true)
const isRail = ref(false)

const sidebarWidth = computed(() => {
  return isRail.value ? 95 : 230
})

const toggleRail = () => {
  isRail.value = !isRail.value
}

const items = [
  { title: "Dashboard", icon: "mdi-view-dashboard", path: "/dashboard" },
  { title: "Home", icon: "mdi-home", path: "/home" },
  { title: "Profile", icon: "mdi-account", path: "/profile" },
  { title: "Edit", icon: "mdi-pencil", path: "/edit" },
  { title: "Calendar", icon: "mdi-calendar", path: "/calendar" },
  { title: "Settings", icon: "mdi-cog", path: "/settings" },
  { title: "Exit", icon: "mdi-logout", path: "/exit" },
]
</script>

<style scoped>

.fill-height {
  height: 100%;
}

.collapsed .v-list-item {
  justify-content: center;
  :deep(.v-list-item-icon) {
    margin-right: 0;
  }
}

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
