<template>
    <div id="app" class="fullscreen" style="background-color: #eeeeee;">
      <router-view />
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'App',
  });
  </script>
  <style lang="sass">
  .fullscreen
    height: 100vh
  </style>
  