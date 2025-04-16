<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-2">
      <div 
        class="text-subtitle-2 text-grey"
      >
        Latest Deal
      </div>
      <div class="text-caption font-weight-medium text-success bg-success-light rounded-pill px-2 py-1">
        86.5%
      </div>
    </div>

    <div 
      class="text-caption text-grey mb-3"
    >
      Last 7 days
    </div>

    <div class="d-flex justify-space-between align-center mb-1">
      <span class="font-weight-bold text-h6">$98,500</span>
      <span class="text-caption text-grey">$1,22,900</span>
    </div>

    <div 
      class="rounded bg-grey-light" 
      style="height: 6px;"
    >
      <div
        class="bg-primary rounded"
        style="height: 6px; width: 80%;"
      ></div>
    </div>

    <!-- Voucher info -->
    <div 
      class="text-caption text-grey mt-1 mb-3"
    >
      Coupons used: 18/22
    </div>

    <!-- Avatars of buyers -->
    <div 
      class="text-caption text-grey mb-1"
    >
      Recent Purchasers
    </div>
    <div class="d-flex align-center">
      <v-avatar
        v-for="(avatar, index) in avatars"
        :key="index"
        size="32"
        class="me-1"
      >
        <img 
          :src="avatar" 
          :alt="'User ' + index" 
        >
      </v-avatar>
      <div
        class="bg-grey-light text-caption font-weight-medium rounded-circle d-flex align-center justify-center"
        style="width: 32px; height: 32px;"
      >
        +8
      </div>
    </div>
  </div>
</template>

<script setup>
const avatars = [
  'https://i.pravatar.cc/32?u=a',
  'https://i.pravatar.cc/32?u=b',
  'https://i.pravatar.cc/32?u=c',
  'https://i.pravatar.cc/32?u=d'
]
</script>
