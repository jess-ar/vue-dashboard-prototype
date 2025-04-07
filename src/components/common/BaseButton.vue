<template>
  <v-btn
    :block="block"
    :variant="computedVariant"
    :color="computedColor"
    :class="
      ['base-btn', variant, { active }] +
        (small ? ' text-caption py-1 px-2' : ' py-3 px-5')
    "
    :to="to"
    :href="href"
    :elevation="elevation"
    class="rounded-pill text-none"
    v-bind="$attrs"
  >
    <v-icon 
      v-if="icon" 
      :size="iconSize" 
      class="mr-2"
    >
      {{ icon }}
    </v-icon>
    <span class="font-weight-bold">{{ label }}</span>
  </v-btn>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: String,
  icon: String,
  variant: {
    type: String,
    default: "primary", // step, secondary, danger, ghost, confirm, etc.
  },
  active: Boolean,
  block: Boolean,
  small: Boolean,
  to: String,
  href: String,
  elevation: {
    type: [Number, String],
    default: 2,
  },
  iconSize: {
    type: [Number, String],
    default: 20,
  },
});

const computedColor = computed(() => {
  switch (props.variant) {
    case "step":
      return props.active ? "accent" : "#D1D5DB";
    case "danger":
      return "#dc2626";
    case "ghost":
      return "transparent";
    case "secondary":
      return "secondary";
    case "confirm":
      return "#529BC5";
    case "primary":
    default:
      return "secondary";
  }
});

const computedVariant = computed(() => {
  return props.variant === "ghost" ? "outlined" : "flat";
});
</script>

<style scoped>
.base-btn.step.active {
  background-color: var(--v-theme-accent) !important;
  color: white;
}

.base-btn.step:not(.active) {
  background-color: white;
  color: black;
  border: 1px solid #cfcfcf;
}

.base-btn.danger {
  background-color: #dc2626 !important;
  color: white;
}

.base-btn.ghost {
  background-color: transparent !important;
  color: var(--v-theme-textColor);
  border: 1px solid #d1d5db;
}

.base-btn.confirm {
  background-color: #529BC5 !important;
  color: white;
}

.base-btn.secondary {
  background-color: var(--v-theme-secondary);
  color: white;
}
</style>
