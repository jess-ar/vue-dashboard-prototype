<template>
  <v-btn
    class="custom-btn d-flex align-center"
    :class="[
      selected.colorClass,
      { 'text-white text-body-1 font-bold': props.variant !== 'backSmall' }
    ]"
    :height="`${selected.height}px`"
    :width="`${selected.width}px`"
    :style="{
      paddingInline: selected.paddingX,
      borderRadius: '999px',
      backgroundColor: selected.bg === 'transparent' ? 'transparent' : `var(--v-theme-${selected.bg})`,
      boxShadow: selected.bg === 'transparent' ? 'none' : undefined
    }"

    @click="emit('click')"
  >
    <!-- Custom circle icon (only if useCircleIcon is set to true) -->
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

    <!-- Normal icon if there is no circle -->
    <v-icon
      v-else-if="icon || selected.icon"
      class="mr-1"
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
import { useTheme } from 'vuetify'


const { current: theme } = useTheme()

const isDark = computed(() => theme.value.dark)

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
  backSmall: {
    width: 'auto',
    height: 32,
    colorClass: 'text-button2',
    bg: 'transparent',
    icon: 'mdi-arrow-left',
    useCircleIcon: false,
  },
  optionCheck: {
    width: 20,
    height: 40,
    colorClass: 'bg-accent',
    icon: 'mdi-check',
  },
  lookContacts: {
    width: 250,
    height: 30,
    colorClass: 'bg-button2',
    paddingX: '20px',
    icon: 'mdi-magnify',
  },
  addFilter: {
    width: 220,
    height: 47,
    colorClass: 'bg-surface text-textColor',
    bg: 'black',
    paddingX: '20px',
    icon: 'mdi-plus-circle',
    useCircleIcon: true,
  },
  chipFilter: { 
    width: 'auto', 
    height: 31, 
    colorClass: 'bg-surface text-terciary', 
    bg: 'white', 
    paddingX: '12px', 
    icon: 'mdi-close', 
    useCircleIcon: false 
  },
  chipFilterNoIcon: { 
    width: 180, 
    height: 31, 
    colorClass: 'bg-surface text-terciary', 
    bg: 'white', 
    paddingX: '12px', 
    useCircleIcon: false 
  },
  chipFilterWide: { 
    width: 150, 
    height: 35, 
    colorClass: 'bg-surface text-terciary', 
    bg: 'white', 
    paddingX: '16px', 
    icon: 'mdi-close', 
    useCircleIcon: false 
  },
  chipFilterWideNoIcon: { 
    width: 150, 
    height: 35, 
    colorClass: 'bg-surface text-terciary', 
    bg: 'white', 
    paddingX: '16px', 
    useCircleIcon: false 
  },
  confirmAudience: {
    width: 224,
    height: 45,
    colorClass: 'bg-button2 text-white',
    bg: 'button2',
    paddingX: '22px',
    icon: 'mdi-check',
    useCircleIcon: true
  },
  calculateVolume: {
    width: 'auto',
    height: 44,
    colorClass: 'bg-surface text-textColor',
    bg: 'textColor',
    paddingX: '20px',
    icon: 'mdi-magnify',
    useCircleIcon: true,
  },
  chooseAudience: {
    width: 250,
    height: 50,
    colorClass: 'bg-button2 text-white',
    bg: 'button2',
    paddingX: '24px',
    icon: 'mdi-check',
    useCircleIcon: true,
  },
  continueStep: {
    width: 140,
    height: 48,
    colorClass: 'bg-secondary text-white',
    bg: 'secondary',
    paddingX: '24px',
    icon: 'mdi-arrow-right',
    useCircleIcon: false
  },
  modalOk: { 
    width: 50, 
    height: 44, 
    colorClass: 'bg-green text-white', 
    bg: 'green', paddingX: '20px' 
  },
  modalCancel: { 
    width: 100, 
    height: 44, 
    colorClass: 'bg-surface text-textColor', 
    bg: 'white', 
    paddingX: '20px' 
  }
}

const selected = computed(() => {
  const base = variants[props.variant] || variants.step2

  if (isDark.value && base.bg === 'white') {
    return {
      ...base,
      colorClass: 'bg-surface text-textColor',
      bg: 'surface'
    }
  }

  return base
})

</script>

<style scoped>
.v-btn {
  text-transform: none;
  letter-spacing: normal;
}

.custom-btn {
  max-width: 100%;
}

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
