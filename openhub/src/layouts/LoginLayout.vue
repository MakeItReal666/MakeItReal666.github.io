<template>
  <div class="background full-screen-background">
    <!-- Your content here -->
    <v-container>
      <slot></slot>
    </v-container>
  </div>
</template>
  
<style>
.background {
  background-image: url('../assets/login-background.png');
  /* Adjust the path to your image file */
  background-size: cover;
  /* Optional: Scale the image to cover the entire element */
  background-repeat: no-repeat;
  /* Optional: Prevent image repetition */
}

.full-screen-background {
  width: 100%;
  /* Set width to 100% of the viewport width */
  height: 100vh;
  /* Set height to 100% of the viewport height */
  margin: 0;
  /* Remove any margin */
  padding: 0;
  /* Remove any padding */
  position: fixed;
  /* Optionally, use 'fixed' for a fixed position or 'absolute' for absolute position */
  top: 0;
  /* For fixed/absolute positioning, anchor to the top */
  left: 0;
  /* For fixed/absolute positioning, anchor to the left */
  /* Your other styling here, e.g., background-image, background-size, etc. */
}</style>