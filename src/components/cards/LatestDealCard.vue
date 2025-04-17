<template>
  <div>
    <!-- Header -->
    <div class="d-flex justify-space-between mb-4">
      <div>
        <h6 
          class="text-h6 font-weight-semibold"
        >
          Latest Deal
        </h6>
        <div 
          class="text-subtitle-2 text-textCard mb-4"
        >
          Last 7 days
        </div>
      </div>
      <v-chip
        density="default"
        size="x-small"
        variant="outlined"
        class="text-success"
        draggable="false"
        style="border: 1px solid currentColor; background-color: rgba(76,175,80,0.1);"
      >
        86.5%
      </v-chip>
    </div>

    <!-- Progress section -->
    <div class="mb-2 d-flex justify-space-between">
      <div 
        class="text-subtitle-1 font-weight-semibold"
      >
        $98,500
      </div>
      <div 
        class="text-subtitle-1 font-weight-semibold"
      >
        $1,22,900
      </div>
    </div>
    <v-progress-linear
      :model-value="80"
      height="6"
      color="#0085DB"
      class="mb-2"
      bg-color="#E0E0E0"
      rounded
    />
    <div 
      class="text-caption text-textCard mb-10"
    >
      Coupons used: 18/22
    </div>

    <!-- Footer: Avatars -->
    <div>
      <div class="text-subtitle-1 text-textCard font-weight-medium mb-2">
        Recent Purchasers
      </div>
      <div 
        class="d-flex align-center" 
        style="gap: 6px;"
        role="group"
        aria-label="Avatars of recent purchasers"
      >
        <v-avatar 
          v-for="(user, index) in avatars" 
          :key="index" 
          size="32"
        >
          <img 
            :src="user" 
            :alt="`Avatar of purchaser ${index + 1}`"
          >
        </v-avatar>
        <div
          class="d-flex align-center justify-center rounded-circle"
          style="width: 32px; height: 32px; background-color: #EFF4F8; font-size: 13px;"
          role="img"
          aria-label="8 more purchasers"
        >
          +8
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const avatars = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4'
]
</script>
