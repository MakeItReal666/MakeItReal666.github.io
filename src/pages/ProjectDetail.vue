<template>
    <h1 class="text-h3 font-weight-bold my-5">NetworKing: Space Communications and Navigation (SCaN) App</h1>
    <v-container>
        <v-carousel hide-delimiter-background
    show-arrows="hover">
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>
    </v-container>

    <br><br>

    <v-card class="my-5">
        <v-tabs v-model="tab" bg-color="deep-purple-accent-4" centered stacked>
            <v-tab value="about">
                ABOUT
            </v-tab>

            <v-tab value="goals">
                GOALS
            </v-tab>

            <v-tab value="teams">
                TEAMS
            </v-tab>
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item value="about">
                <v-card v-for="content in aboutData.description">
                    <v-card-title>{{ content.title }}</v-card-title>
                    <v-card-text>{{ content.content }}</v-card-text>
                </v-card>
            </v-window-item>

            <v-window-item value="goals" class="py-10">
                <h1 class="text-h3 font-weight-bold text-center my-15">74%</h1>

                <div class="mx-10">
                    <v-progress-linear model-value="74" color="light-blue" height="20" striped>
                        <template v-slot:default="{ value }">
                            <strong>{{ Math.ceil(value) }}%</strong>
                        </template>
                    </v-progress-linear>
                    <div class="d-flex justify-space-between">
                        <h4>0%</h4>
                        <h4>100%</h4>
                    </div>
                </div>
                <br>
            </v-window-item>

            <v-window-item value="teams">
                <v-card>
                    <v-card-title>
                        <h1 class="text-h3 font-weight-bold my-5">Members</h1>
                    </v-card-title>
                    <v-card-text v-for="data in teamsData" class="d-flex">
                        <img class="me-5" style="border-radius: 50%; height: 100px; width: 100px;" :src=avatar alt="userpic">
                        <v-card >
                            <v-card-title>{{ data.username }}</v-card-title>
                            <v-card-text>{{ data.about }}</v-card-text>
                        </v-card>
                    </v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
    </v-card>
    <br><br>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import aboutData from '../assets/projectdetailpage_about.json';
import teamsData from '../assets/projectdetailpage_teams.json';
import avatar from '../assets/user.png';

export default defineComponent({
    setup() {
    },
    data() {
        return {
            tab: null,
            aboutData,
            teamsData,
            avatar
        }

    }
});
</script>
<style lang="sass" scoped>
</style>
  