<template>
  <v-btn
    class="custom-btn text-white text-body-1 font-bold d-flex align-center"
    :height="`${selected.height}px`"
    :width="`${selected.width}px`"
    :class="[selected.colorClass]"
    :style="{
      paddingInline: selected.paddingX,
      borderRadius: '999px',
    }"
    @click="emit('click')"
  >
    <!-- Custom circle icon (solo si useCircleIcon está en true) -->
    <div
      v-if="selected.useCircleIcon"
      class="mr-3 d-flex align-center justify-center"
      :style="{
        backgroundColor: 'white',
        borderRadius: '999px',
        width: '24px',
        height: '24px',
      }"
    >
      <v-icon 
        :color="selected.bg" 
        size="16"
      >
        {{ icon || selected.icon }}
      </v-icon>
    </div>

    <!-- Normal icon si no hay circulito -->
    <v-icon
      v-else-if="icon || selected.icon"
      class="mr-2"
      size="18"
    >
      {{ icon || selected.icon }}
    </v-icon>
    <slot>
    </slot>
  </v-btn>
</template>


<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click'])


const props = defineProps({
  variant: {
    type: String,
    required: true,
  },
  icon: {
  type: String,
  default: '',
}})

const variants = {
  newCampaign: {
    width: 240,
    height: 70,
    colorClass: 'bg-secondary',
    bg: 'secondary',
    paddingX: '24px',
    icon: 'mdi-calendar',
  },
  return: {
  width: 250,
  height: 57,
  colorClass: 'bg-terciary',
  bg: 'terciary',
  paddingX: '28px',
  icon: 'mdi-close',
  useCircleIcon: true,
  },
  backStep: {
  width: 150,
  height: 57,
  colorClass: 'bg-terciary',
  bg: 'terciary',
  paddingX: '28px',
  icon: 'mdi-chevron-left',
  useCircleIcon: true,
  },
  step1: {
    width: 280,
    height: 57,
    colorClass: 'bg-terciary',
    bg: 'terciary',
    paddingX: '31px',
    icon: 'mdi-chevron-left',
    useCircleIcon: true,
  },
  step2: {
    width: 250,
    height: 57,
    colorClass: 'bg-secondary',
    bg: 'secondary',
    paddingX: '35px',
    icon: 'mdi-chevron-right',
    useCircleIcon: true,
  },
  step3: {
    width: 250,
    height: 57,
    colorClass: 'bg-secondary',
    bg: 'secondary',
    paddingX: '18px',
    icon: 'mdi-chevron-right',
    useCircleIcon: true,
  },
  step4: {
    width: 250,
    height: 57,
    colorClass: 'bg-secondary',
    bg: 'secondary',
    paddingX: '18px',
    icon: 'mdi-chevron-right',
    useCircleIcon: true,
  },
  confirmPay: {
    width: 250,
    height: 57,
    colorClass: 'bg-secondary',
    bg: 'secondary',
    paddingX: '25px',
    icon: 'mdi-chevron-right',
    useCircleIcon: true,
  },
  dashboard: {
    width: 250,
    height: 57,
    colorClass: 'bg-secondary',
    bg: 'secondary',
    paddingX: '10px',
    icon: 'mdi-arrow-left',
  },
}

const selected = computed(() => {
  return variants[props.variant] || variants.step2
})
</script>

<style scoped>
.v-btn {
  text-transform: none;
  letter-spacing: normal;
}

/* responsive settings */
@media (max-width: 600px) {
  .custom-btn {
    font-size: 0.75rem !important;
    height: 45px !important;
    width: auto !important;
    padding-inline: 16px !important;
  }

  .custom-btn .v-icon {
    font-size: 14px !important;
  }

  .custom-btn > div[style*="width: 24px"] {
    width: 20px !important;
    height: 20px !important;
  }
}

</style>
