<template>
  <div class="step-action d-flex justify-end pa-4">
    <BaseButton
      :label="label"
      icon="mdi-arrow-right"
      variant="confirm"
      :to="to"
    />
  </div>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue'

</script>

<style scoped>
.step-action {
  width: 100%;
}
</style>
