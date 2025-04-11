<template>
  <v-container 
    fluid 
    class="pt-10 pa-6"
  >
    <!-- Welcome -->
    <v-row justify="left">
      <v-col 
        cols="12" 
        md="10" 
        lg="8"
      >
        <h2 class="text-h4 font-weight-bold mb-2 pt-10">
          👋 Welcome, {{ userName }}!
        </h2>
        <p class="text-subtitle-1 text-md-start">
          Let’s make the most of your campaigns today 🚀
        </p>
      </v-col>
    </v-row>

    <!-- Shortcuts -->
    <v-row 
      justify="center" 
      align="stretch" 
      class="mt-8"
    >
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12"
        sm="6"
        md="4"
        class="mb-4"
      >
        <v-card
          class="pa-4 hoverable-card d-flex flex-column justify-space-between"
          :class="{ 'h-100': mdAndUp }"
          elevation="2"
          @click="$router.push(card.route)"
        >
          <v-icon 
            color="tectColor" 
            size="36" 
            class="mb-2"
          >
            {{ card.icon }}
          </v-icon>
          <div 
            class="text-h6"
          >
            {{ card.title }}
          </div>
          <p 
            class="text-caption"
          >
            {{ card.description }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from "vue"
import { useAuth } from "@/composables/useAuth.js"
import { useDisplay } from "vuetify"

const { user } = useAuth()
const { mdAndUp } = useDisplay()

const userName = computed(() => {
  if (!user.value || typeof user.value !== "object") return "Guest"
  return user.value.name || "Guest"
})

const cards = [
  {
    icon: "mdi-view-dashboard",
    title: "Go to Dashboard",
    description: "View campaign stats and global insights",
    route: "/dashboard",
  },
  {
    icon: "mdi-calendar",
    title: "View Calendar",
    description: "Check scheduled campaigns and activities",
    route: "/calendar",
  },
  {
    icon: "mdi-pencil",
    title: "Create/Edit Campaign",
    description: "Start or update your marketing campaigns",
    route: "/edit",
  },
]
</script>

<style scoped>
.hoverable-card {
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s;
}
.hoverable-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}
</style>

