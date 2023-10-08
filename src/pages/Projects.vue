<template>
    <div class="d-flex justify-space-between align-center">
        <h1 class="text-h4 font-weight-bold my-5">Your Current Active Projects</h1>
        <div class="d-flex align-center">
            <p class="me-3 font-weight-bold">Sort By</p>
            <v-select class="d-flex align-center" v-model="select" :items="items" item-title="state"
                item-value="abbr" label="Select" persistent-hint return-object single-line></v-select>
        </div>
    </div>
    <v-card class="mb-4" v-for="data in projectData" @click="ToProjectDetail()">
        <v-row no-gutters>
            <v-col cols="12" sm="3">
                <v-img cover :src="data.image_url" height="120" alt="project_img" class='pa-0 ma-0'></v-img>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex align-center text-truncate"><v-card-title class="">
                    <p>{{ data.name }}</p>
                </v-card-title></v-col>
            <v-col cols="12" sm="3" class="d-flex align-center">
                <v-card-text class="d-flex justify-space-evenly">
                    <p class="text-h5">{{ data.percentage }} %</p>
                    <div class="d-flex align-center">
                        <p class="text-h5">{{ data.count }}</p>
                        <v-icon icon="mdi mdi-account" size="30"></v-icon>
                    </div>
                </v-card-text>
            </v-col>
        </v-row>
    </v-card>
    <br><br>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import projectData from '../assets/projectpage_list.json';
import { useRouter } from "vue-router";
import _ from 'lodash';

let pData = _.sortBy(projectData, (e:any) => { return e.percentage; });

export default defineComponent({
    setup() {
        const router = useRouter();

        async function ToProjectDetail() {
            await router.push("/project");
        }

        return {
            ToProjectDetail
        }
    },
    data() {
        return {
            projectData: pData,
            select: { state: 'percentage', abbr: 'p' },
            items: [
                { state: 'percentage', abbr: 'p' },
                { state: 'count', abbr: 'c' },
            ]
        }
    },
});
</script>
<style lang="sass" scoped>
</style>
  