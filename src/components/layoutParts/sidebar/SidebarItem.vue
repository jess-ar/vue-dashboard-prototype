<template>
  <div>
    <v-list-item
      :style="isActive ? { backgroundColor: '#0085DB1F' } : {}"
      class="rounded-e-xl my-1 d-flex align-center"
      link
      @click="handleClick"
    >
      <v-icon
        :class="isRail ? 'mr-0' : 'mr-3'"
        :style="{ color: color }"
      >
        {{ item.icon }}
      </v-icon>

      <span
        v-if="!rail"
        class="text-body-2 font-weight-medium"
        :style="{ color: color }"
      >
        {{ item.title }}
      </span>
    </v-list-item>

    <v-dialog 
      v-model="confirmLogout" 
      max-width="400"
      height="150"
    >
      <v-card class="pa-4">
        <v-card-title class="text-h6 pt-4">
          Are you sure you want to log out?
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn 
            variant="text" 
            @click="confirmLogout = false"
          >
            Cancel
          </v-btn>
          <v-btn 
            color="error" 
            @click="logoutAndRedirect"
          >
            Log out
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { sidebarState } from '@/stores/sidebar.js'

const props = defineProps({
  item: { type: Object, required: true },
  rail: { type: Boolean, required: true }
})

const confirmLogout = ref(false)
const theme = useTheme()
const router = useRouter()
const route = useRoute()
const { logout } = useAuth()

const isActive = computed(() =>
  props.item.path ? route.path === props.item.path : false
)

const color = computed(() =>
  isActive.value
    ? theme.current.value.colors.textAccent
    : theme.current.value.colors.textColor
)

const handleClick = () => {
  if (props.item.action === 'logout') {
    confirmLogout.value = true
  } else if (props.item.path && !isActive.value) {
    router.push(props.item.path)
  }
}

const logoutAndRedirect = () => {
  confirmLogout.value = false
  logout()
  router.push('/login')
  if (window.innerWidth < 960) {
    sidebarState.isDrawerOpen = false
  }
}
</script>

<style scoped>
.bg-activeBackground {
  background-color: var(--v-theme-activeBackground);
}
</style>
