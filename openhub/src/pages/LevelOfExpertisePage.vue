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
        const routeName = '/loading';
        return {
            routeName
        }
    },
    data: () => ({
        tags: [
            'Expert',
            'Advance',
            'Intermediate',
            'Beginner'
        ],
    }),

})
</script>

<template>
    <backgroundLayout>
        <CardLayout class="card-background" :reverseBtn="true" :proceed-btn="true" :routeName="routeName">
            <template #title>Level of Expertise</template>
            <template #cardBody>
                <v-sheet id="cardBody" class="d-flex flex-column justify-space-around ma-2 pa-2">
                    <v-chip-group class="d-flex flex-column" selected-class="text-deep-purple-accent-4">
                        <v-chip class="mx-1 text-center text-h6 pa-3 px-6" size="200px" v-for="tag in tags" :key="tag">
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

#cardBody {
    height: 400px;
}

.border-box {
    border: 2px solid black;
}

.v-btn:hover {
    background-color: #D0ACFE;
    color: white;
}
</style>
