<template>
  <v-card class="bg-white pa-14">
  <v-form @submit.prevent>
    <v-row align="center" justify="center">
      <v-col cols="8" align-self="start">
        <v-row align="center" justify="start" class="mr-5">
          <v-col cols="12">
            <v-row
              ><div class="text-subtitle-1 font-weight-bold">
                Project Title
              </div></v-row
            >
            <v-row
              ><v-text-field clearable variant="outlined"></v-text-field
            ></v-row>
          </v-col>
        </v-row>

        <v-row align="center" justify="start" class="mr-5">
          <v-col cols="12">
            <v-row
              ><div class="text-subtitle-1 font-weight-bold">
                Project Summary
              </div></v-row
            >
            <v-row
              ><v-text-field
                placeholder="Max 50 Characters"
                clearable
                variant="outlined"
              ></v-text-field
            ></v-row>
          </v-col>
        </v-row>

        <v-row align="center" justify="start" class="mr-5">
          <v-col cols="12">
            <v-row
              ><div class="text-subtitle-1 font-weight-bold">
                Project Description
              </div></v-row
            >
            <v-row
              ><v-textarea
                counter
                auto-grow
                clearable
                variant="outlined"
              ></v-textarea
            ></v-row>
          </v-col>
        </v-row>

        <v-row align="center" justify="start" class="mr-5">
          <v-col cols="12">
            <v-row
              ><div class="text-subtitle-1 font-weight-bold">
                Project Completion
              </div></v-row
            >
            <v-row
              ><v-slider
                :min="0"
                :max="100"
                :step="1"
                thumb-label
                class="pt-10"
              >
                <template v-slot:thumb-label="{ modelValue }">
                  {{ modelValue }}%
                </template></v-slider
              ></v-row
            >
          </v-col>
        </v-row>

        <v-row align="center" justify="start" class="mr-5" style="padding-bottom: 22px;">
          <v-col cols="12">
            <v-row
              ><div class="text-subtitle-1 font-weight-bold">
                Project Members
              </div></v-row
            >
            <v-row
              ><v-autocomplete
                chips
                hide-details
                hide-no-data
                hide-selected
                multiple
                single-line
                variant="outlined"
                closable-chips
                rules=""
              ></v-autocomplete
            ></v-row>
          </v-col>
        </v-row>

        <v-row align="center" justify="start" class="mr-5">
          <v-col cols="12">
            <v-row
              ><div class="text-subtitle-1 font-weight-bold">
                Main Project Location
              </div></v-row
            >
            <v-row
              ><v-text-field clearable variant="outlined"></v-text-field
            ></v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col align-self="start">
        <v-row align="start" justify="start" class="mr-5">
          <v-col cols="12">
            <v-row
              ><div class="text-subtitle-1 font-weight-bold">
                Cover Photo
              </div></v-row
            >
            <v-row
              ><v-file-input
                clearable
                show-size
                accept="image/*"
                prepend-icon=""
                variant="outlined"
                prepend-inner-icon="mdi-camera"
              ></v-file-input
            ></v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="3" align-self="center">
        <v-btn type="submit" color="secondary" rounded="xl" variant="elevated" block class="mt-2">Create Project</v-btn>
      </v-col>
      <v-col cols="2" align-self="center">
        <v-btn color="secondary" variant="outlined" rounded="xl" block class="mt-2">Clear</v-btn>
      </v-col>
    </v-row>
  </v-form>
</v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
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
