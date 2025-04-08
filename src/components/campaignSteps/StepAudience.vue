<template>
  <div class="audience-container">
    <div class="audience-wrapper pt-16 pb-16">
      <div
        v-for="option in options"
        :key="option.id"
        class="option-card mr-16"
        :class="[
          selected === option.id ? 'selected' : '',
          option.id === 'sms' ? 'option-sms' : 'option-email'
        ]"
        @click="selectOption(option.id)"
      >
        <img
          :src="option.icon"
          :alt="option.label"
          class="option-icon"
        >
        <p 
          class="option-label"
        >
          {{ option.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const smsIcon = new URL('@/assets/icons/sms.svg', import.meta.url).href
const emailIcon = new URL('@/assets/icons/email.svg', import.meta.url).href

const selected = ref('sms')

const options = [
  { id: 'sms', label: 'SMS', icon: smsIcon },
  { id: 'email', label: 'Email', icon: emailIcon }
]

function selectOption(id) {
  selected.value = id
}
</script>

<style scoped>
.audience-container {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.audience-wrapper {
  display: flex;
  gap: 60px;
  max-width: 600px;
  flex-wrap: wrap;
  justify-content: center;
}

/* base card */
.option-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
  transition: border 0.2s ease;
}

.option-card.selected {
  border-color: #529BC5;
}

.option-sms {
  width: 150px;
  height: 200px;
  padding-top: 32px;
  padding-bottom: 24px;
}

.option-email {
  width: 190px;
  height: 200px;
}

.option-icon {
  height: auto;
}

.option-sms .option-icon {
  width: 70px;
}

.option-email .option-icon {
  width: 150px;
}

.option-label {
  margin-top: 16px;
  font-weight: 500;
  font-size: 0.95rem;
}
</style>
