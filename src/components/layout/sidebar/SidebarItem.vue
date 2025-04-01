<template>
  <v-list-item
    :class="[
      'rounded-e-xl my-1 mr-2 d-flex align-center',
      isActive ? 'bg-surface' : ''
    ]"
    link
    @click="navigate"
  >
    <v-icon
      :style="{ color: color }"
      class="mr-3"
    >
      {{ icon }}
    </v-icon>

    <span
      v-if="!rail"
      class="text-body-2 font-weight-medium"
      :style="{ color: color }"
    >
      {{ title }}
    </span>
  </v-list-item>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  path: { type: String, required: true },
  rail: { type: Boolean, required: true },
  active: { type: Boolean, required: true }
})

const theme = useTheme()
const router = useRouter()
const route = useRoute()

const isActive = computed(() => route.path === props.path)

const color = computed(() =>
  isActive.value
    ? theme.current.value.colors.textAccent
    : theme.current.value.colors.textColor
)

const navigate = () => {
  if (!isActive.value) router.push(props.path)
}
</script>

<style scoped>
.v-list-item-title {
  font-weight: bold;
  color: inherit;
}
</style>
