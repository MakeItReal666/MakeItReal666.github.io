<template>
  <v-container>
    <v-row justify="end">
        <v-btn
          prepend-icon="mdi-chevron-left"
          color="primary"
          rounded="xl"
          variant="elevated"
          class="ma-2 "
          @click="ToHomepage()"
          >Back</v-btn
        >
    </v-row>
    <v-row justify="start">
      <v-col cols="12">
        <CreateProjectForm class="pa-5" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CreateProjectForm from "../components/CreateProjectForm.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    CreateProjectForm,
  },
  setup() {
    const router = useRouter();

    return {
      ToHomepage,
    };

    async function ToHomepage() {
      await router.push("/home");
    }
  },
});
</script>
