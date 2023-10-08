<template>
  <div class="h-100 bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

      <v-btn class="mt-16 text-blue" color="white" variant="flat" :to="route"
        >Go Home</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref /*onMounted, inject */ } from "vue";

export default defineComponent({
  setup() {
    const route = ref("/signUpLogin");

    return { route };
  },
});
</script>
