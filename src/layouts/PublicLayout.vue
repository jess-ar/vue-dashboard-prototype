<template>
  <v-main style="background-color: #eaf3fc;">
    <div class="decor-wrapper">
      <!-- Decorative images behind the content -->
      <img 
        src="/shapes/yellow-circle.svg" 
        alt="" 
        class="decor-circle" 
      >
      <img 
        src="/shapes/blue-splash.svg" 
        alt="" 
        class="decor-splash" 
      >

      <!-- Page within the layout -->
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </v-main>
</template>

<style scoped>
.decor-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.content-wrapper {
  position: relative;
  z-index: 2;
}

.decor-circle {
  position: absolute;
  bottom: -60px;
  left: -90px;
  width: 240px;
  z-index: 1;
}

.decor-splash {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 260px;
  z-index: 1;
}

@media (max-width: 600px) {
  .decor-circle {
    width: 150px;
    bottom: -40px;
    left: -40px;
  }

  .decor-splash {
    width: 150px;
    top: -30px;
    right: -30px;
  }
}

</style>
