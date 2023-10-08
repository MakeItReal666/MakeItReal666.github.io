<template>
  <v-row no-gutters>
    <!-- User recommendation -->
    <v-col cols="12" sm="3">
      <div class="me-5">
        <p class=" font-weight-bold my-5">User you might know</p>
        <v-card>
          <v-card-title>Based on your recent tags</v-card-title>
          <v-card-text>
            <v-chip v-for="data in userData.tags" class="me-1 mb-1" color="primary" variant="outlined">{{ data }}</v-chip>
            <v-divider class="my-3"></v-divider>
            <div v-for="data in userData.users" class="d-flex align-center mb-4">
              <img class="me-5" style="border-radius: 50%; height: 70px; width: 70px;" :src=avatar alt="userpic">
              <p>{{ data }}</p>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
    <!-- Feed -->
    <v-col cols="12" sm="5">
      <div class="me-5">
        <p class=" font-weight-bold my-5">Latest Feed</p>
        <v-card v-for="data in feedData" class="mb-3">
          <v-card-title style="background-color: var(--primary-color)
; color: white">
            <div class="d-flex justify-space-between">
              <p class="text-truncate">{{ data.name }}</p> <v-icon icon="mdi mdi-dots-vertical"></v-icon>
            </div>
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center my-3">
              <img class="me-3" style="border-radius: 50%; height: 40px; width: 40px;" :src=avatar alt="userpic">
              <p>{{ data.username }}</p>
            </div>
            <div class="mt-5">{{ data.description }}</div>
          </v-card-text>
        </v-card>
        <v-card class="text-center" style="border: 3px solid var(--primary-color);">
          <v-card-title>
            <p>You Caught Up!</p>
            <v-icon icon="mdi mdi-check-circle-outline" size="150"></v-icon>
          </v-card-title>
        </v-card>
      </div>
    </v-col>
    <!-- Project Recommendation -->
    <v-col cols="12" sm="4">
      <p class=" font-weight-bold my-5">Project you might be interested</p>
      <v-card v-for="data in projectData" class="mb-3">
        <v-card-title>
          {{ data.name }}
        </v-card-title>
        <v-card-text>
          <div class="d-flex align-center">
            <img class="me-3 mb-3" style="border-radius: 50%; height: 40px; width: 40px;" :src=avatar alt="userpic">
            <p>{{ data.creator }} + {{ data.amount }} People</p>
          </div>
          <v-chip v-for="tag in data.tags" class="me-1 mb-1" color="primary" variant="outlined">{{ tag }}</v-chip>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import userData from '../assets/homepage_user.json';
import feedData from '../assets/homepage_feed.json';
import projectData from '../assets/homepage_project.json';
import avatar from '../assets/user.png';

export default defineComponent({
  setup() { },
  data: () => {
    return {
      userData,
      feedData,
      projectData,
      avatar
    }
  }
});
</script>
<style lang="sass" scoped>
</style>
