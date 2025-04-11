<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      gap: '120px'
    }"
  >
    <div
      :style="{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }"
    >
      <div
        :style="{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px'
        }"
      >
        <BaseButton
          v-for="option in interests"
          :key="option"
          class="ml-4"
          variant="chipFilterWideNoIcon"
          :active="form.selected.includes(option)"
          @click="toggleOption(option)"
        >
          {{ option }}
        </BaseButton>
      </div>
    </div>

    <v-card-actions>
      <v-spacer />
      <BaseButton 
        variant="modalCancel" 
        @click="emit('close')"
      >
        Cancel
      </BaseButton>
      <BaseButton 
        variant="modalOk" 
        @click="emit('close', form)"
      >
        OK
      </BaseButton>
    </v-card-actions>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'

const emit = defineEmits(['close'])

const form = ref({
  selected: []
})

const interests = [
  'Travel', 'Health', 'Food', 'Drinks',
  'Gardening', 'Animals', 'Cars', 'Cinema'
]

function toggleOption(option) {
  const index = form.value.selected.indexOf(option)
  if (index === -1) {
    form.value.selected.push(option)
  } else {
    form.value.selected.splice(index, 1)
  }
}
</script>
