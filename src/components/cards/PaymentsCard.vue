<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-2">
      <div>
        <div 
          class="text-subtitle-2 text-grey"
        >
          Payments
        </div>
        <div 
          class="text-h6 font-weight-bold"
        >
          12,389
        </div>
      </div>
      <div class="text-caption font-weight-medium text-warning bg-warning-light rounded-pill px-2 py-1">
        -3.8%
      </div>
    </div>

    <div 
      class="text-caption text-grey mb-3"
    >
      Last 7 days
    </div>

    <!-- Fake bar chart -->
    <div 
      class="d-flex justify-space-between mb-4" 
      style="height: 40px;"
    >
      <div 
        v-for="(day, index) in 7" 
        :key="index" 
        class="d-flex flex-column align-center"
      >
        <div 
          class="bg-grey-light rounded-pill" 
          style="width: 6px; 
          height: 20px;"
        >
        </div>
        <div 
          class="bg-primary rounded-pill mt-1" 
          style="width: 6px; 
          height: 14px;"
        >
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-caption text-grey">
      <v-radio-group 
        model-value="paypal" 
        column 
        dense 
        class="mb-1"
      >
        <v-radio 
          label="Paypal" 
          value="paypal" 
          class="text-body-2" 
        />
        <v-radio 
          label="Credit Card" 
          value="card" 
          class="text-body-2" 
        />
      </v-radio-group>
      <div class="text-caption d-flex justify-space-between">
        <span>Paypal</span><span>52%</span>
      </div>
      <div class="text-caption d-flex justify-space-between">
        <span>Credit Card</span><span>48%</span>
      </div>
    </div>
  </div>
</template>
