<script setup lang="ts">
import { ref } from 'vue'

defineProps({
    title: String,
    subtitle: String,
    description: String,
    image: String,
    tags: Array<String>,
    location: String,
    date: String,
    link: String
})

const isStarred = ref(false);
const isClicked = ref(false);
const snackText = ref("Project Saved");

const toggleStar = () => {
    isStarred.value = !isStarred.value;
    isClicked.value = true;
    snackText.value = isStarred.value ? "Project Saved" : "Project Removed"
}
</script>

<template >
    <v-hover v-slot="{ isHovering, props }">
        <v-col>
            <v-card class="mx-auto mb-5 rounded-xl d-flex flex-column" max-width="315" height="555" elevation="2"
                v-bind="props">

                <v-expand-transition>
                    <v-container v-if="isHovering">
                        <v-container class="d-flex flex-row-reverse">
                            <v-icon :icon="isStarred ? 'mdi-star' : 'mdi-star-outline'" size="large"
                                @click="toggleStar"></v-icon>
                        </v-container>
                        <p class="description">
                            {{ description }}</p>
                    </v-container>

                    <div v-else>
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

                        <v-card-title>
                            <strong>{{ title }}</strong>
                        </v-card-title>

                        <v-card-subtitle>
                            {{ subtitle }}
                        </v-card-subtitle>

                        <v-container max-width="225">
                            <v-divider class="border-opacity-100 " :thickness="2"></v-divider>
                        </v-container>

                        <v-chip v-for="tag in tags" class="ma-2" variant="outlined">
                            {{ tag }}
                        </v-chip>
                    </div>
                </v-expand-transition>

                <v-spacer></v-spacer>

                <v-card-actions>
                    <v-container class="d-flex" v-if="!isHovering">
                        {{ location }}
                        <v-spacer> </v-spacer>
                        {{ date }}
                    </v-container>
                    <v-container class="mx-auto" v-else>
                        <router-link to="/project"><v-btn block rounded-xl size="x-large" id="testBtn">Join
                                Now</v-btn></router-link>
                    </v-container>
                </v-card-actions>

            </v-card>
        </v-col>
    </v-hover>

    <v-snackbar v-model="isClicked" :color="isStarred ? 'success' : 'error'">
        {{ snackText }}
    </v-snackbar>
</template>


<style >
#testBtn {
    color: white;
    background-color: #646cff;
}

.description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 15;
    white-space: normal;
}
</style>