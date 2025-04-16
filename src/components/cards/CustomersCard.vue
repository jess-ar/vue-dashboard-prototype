<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-2">
      <div 
        class="text-subtitle-2 text-grey"
      >
        Customers
      </div>
      <div class="text-caption font-weight-medium text-success bg-success-light rounded-pill px-2 py-1">
        +26.5%
      </div>
    </div>

    <div 
      class="text-h6 font-weight-bold mb-1"
    >
      6,380
    </div>
    <div 
      class="text-caption text-grey mb-4"
    >
      Last 7 days
    </div>

    <!-- Line graph fake -->
    <div class="w-100 mb-4">
      <svg 
        viewBox="0 0 100 30" 
        width="100%" 
        height="40"
      >
        <polyline
          fill="none"
          stroke="#2196F3"
          stroke-width="2"
          points="0,25 20,10 40,20 60,12 80,15 100,10"
        />
      </svg>
    </div>

    <!-- Dates and comparative data -->
    <div 
      class="text-caption text-grey mb-1"
    >
      April 07 – April 14
    </div>
    <div class="text-caption d-flex justify-space-between">
      <span>This Week</span><span>6,380</span>
    </div>
    <div class="text-caption d-flex justify-space-between">
      <span>Last Week</span><span>4,298</span>
    </div>
  </div>
</template>
