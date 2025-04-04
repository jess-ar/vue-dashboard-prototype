<template>
  <v-list-item
    :class="[
      'rounded-e-xl my-1 d-flex align-center',
      isActive ? 'bg-surface' : ''
    ]"
    link
    @click="navigate"
  >
    <v-icon
      :style="{ color: color }"
      :class="isRail ? 'mr-0' : 'mr-3'"
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
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const props = defineProps({
  item: { type: Object, required: true },
  rail: { type: Boolean, required: true }
})

const { logout } = useAuth()
const theme = useTheme()
const router = useRouter()
const route = useRoute()

const isActive = computed(() =>
  props.item.path ? route.path === props.item.path : false
)

const color = computed(() =>
  isActive.value
    ? theme.current.value.colors.textAccent
    : theme.current.value.colors.textColor
)

const navigate = () => {
  if (props.item.action === 'logout') {
    logout()
  } else if (props.item.path && !isActive.value) {
    router.push(props.item.path)
  }
}

</script>

<style scoped>
.v-list-item-title {
  font-weight: bold;
  color: inherit;
}
</style>
