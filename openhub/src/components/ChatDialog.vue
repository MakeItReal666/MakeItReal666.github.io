<template>
  <v-dialog v-model="isDialogOpen" width="30vw">
    <v-card>
      <v-toolbar dark color="secondary">
        <v-toolbar-title>{{ name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close-dialog')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-img :src="chat_sample"></v-img>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import chat_sample from "../assets/chat_sample.png";

export default defineComponent({
  props: {
    isDialogOpen: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      chat_sample,
    };
  },
});
</script>
<style lang="sass">
.badge
  .v-badge__wrapper
    .v-badge__badge
      height: 30px
      width: 30px
      bottom: calc(100% - 29px) !important
      left: calc(100% - 29px) !important
      border-radius: 20px
    .v-icon
      font-size: 1.25rem
</style>
