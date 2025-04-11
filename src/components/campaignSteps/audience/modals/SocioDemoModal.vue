<template>
  <div class="socio-demo-modal">
    <div class="section">
      <h3>Age range</h3>
      <div class="button-group">
        <BaseButton
          v-for="option in ageOptions"
          :key="option"
          variant="chipFilterNoIcon"
          :active="form.age.includes(option)"
          @click="toggleOption('age', option)"
        >
          {{ option }}
        </BaseButton>
      </div>
    </div>

    <div class="section">
      <h3>Sex</h3>
      <div class="button-group">
        <BaseButton
          v-for="option in sexOptions"
          :key="option"
          variant="chipFilter"
          :active="form.sex.includes(option)"
          @click="toggleOption('sex', option)"
        >
          {{ option }}
        </BaseButton>
      </div>
    </div>

    <div class="section">
      <h3>Monthly income range</h3>
      <div class="button-group">
        <BaseButton
          v-for="option in incomeOptions"
          :key="option"
          variant="chipFilterWideNoIcon"
          :active="form.income.includes(option)"
          @click="toggleOption('income', option)"
        >
          {{ option }}
        </BaseButton>
      </div>
    </div>

    <div class="section">
      <h3>Other</h3>
      <div class="button-group">
        <BaseButton
          v-for="option in otherOptions"
          :key="option"
          variant="chipFilterWideNoIcon"
          :active="form.other.includes(option)"
          @click="toggleOption('other', option)"
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
  age: [],
  sex: [],
  income: [],
  other: []
})

const ageOptions = ['18 - 25', '25 - 50', '50 - 75', '75 - 100']
const sexOptions = ['Men', 'Women']
const incomeOptions = ['< 1 500€', '1 500€ - 2 500€', '2 500€ - 3 500€', '3 500€ - 4 500€', '4 500€ - 5 500€', '> 5 500€']
const otherOptions = ['With child(ren)', 'Student', 'Retired']

function toggleOption(category, option) {
  const list = form.value[category]
  const index = list.indexOf(option)
  if (index === -1) {
    list.push(option)
  } else {
    list.splice(index, 1)
  }
}
</script>

<style scoped>
.socio-demo-modal {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
