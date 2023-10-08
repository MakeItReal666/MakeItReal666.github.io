<script setup lang="ts">
import { ref } from 'vue'
import jsonData from '../assets/projects.json'
import fieldData from '../assets/field.json'
import ProjectCard from '../components/ProjectCard.vue'
import _ from 'lodash';

let data = ref(_.sampleSize(jsonData, 6))
let field = ref(fieldData);

let randomiseProject = () => {
    data.value = _.sampleSize(jsonData, 6)
}

</script>

<template>
    <v-navigation-drawer :width="300">
        <v-container>
            <h1 class="text-h3 font-weight-bold">Explore</h1>
            <p class="text-subtitle-1 text-grey-darken-1">Recommended for you</p>
        </v-container>
        <v-list-item link v-for="title in field" :title="title"></v-list-item>
        <v-container class="d-flex justify-space-evenly align-center">
            <p>Not Feeling It? Refresh</p>
            <v-btn @click="randomiseProject()" icon="mdi mdi-refresh" style="background-color: rgb(237, 237, 237);">
            </v-btn>
        </v-container>
    </v-navigation-drawer>

    <v-container>
        <v-row>
            <v-chip variant="outlined" label><strong>Best Matches</strong></v-chip>
        </v-row>
        <v-row>
            <v-col v-for="project in data" cols="12" sm="4">
                <ProjectCard :title="project.name" :subtitle="project.level_of_expertise" :description="project.description"
                    :tags="project.tags" :location="project.location" :date="project.date" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>

</style>