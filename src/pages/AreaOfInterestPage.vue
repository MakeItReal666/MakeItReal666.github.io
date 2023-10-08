<script lang="ts">
import backgroundLayout from '../layouts/LoginLayout.vue';
import CardLayout from '../layouts/CardLayout.vue';
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        backgroundLayout,
        CardLayout
    },
    setup() {
        const routeName = '/levelOfExpertise';
        return {
            routeName
        }
    },
    data: () => ({
      tags: [
        'Space',
        'Machine Learning',
        'Robotic',
        'Artificial Intelligence',
        'Data',
        'Agriculture',
        'Nature',
        ' Bird',
        'Aquatic',
        'Animal',
        'Diseases',
        'Plant',
        'Insects',
        'Food Security'
      ],
    }),
})
</script>

<template>
    <backgroundLayout>
        <CardLayout class="card-background" :reverseBtn="true" :proceed-btn="true" :routeName="routeName">
            <template #title>Area of Interest</template>
            <template #cardBody>
                <v-sheet class="ma-2 pa-2">
                    <v-chip-group class="d-flex flex-wrap " multiple selected-class="text-primary">
                        <v-chip class="py-3 px-6 mx-1" v-for="tag in tags" :key="tag">
                            {{ tag }}
                        </v-chip>
                    </v-chip-group>
                </v-sheet>
            </template>
        </CardLayout>
    </backgroundLayout>
</template>

<style scoped>
.card-background {
    background-color: #FEFEFE;
}

.border-box {
    border: 2px solid black;
}
</style>
