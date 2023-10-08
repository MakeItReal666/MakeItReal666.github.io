<script lang="ts">
import backgroundLayout from '../layouts/LoginLayout.vue';
import CardLayout from '../layouts/CardLayout.vue';
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    components: {
        backgroundLayout,
        CardLayout
    },
    setup() {
        const router = useRouter(); // Get the router instance
        const homepageClick = () =>{
            router.push("/explore");
        }
        return {
            homepageClick
        }
    },
})
</script>

<template>
    <backgroundLayout>
        <CardLayout class="card-background">
            <template #cardBody>
                <v-sheet id="cardBody" class="d-flex flex-column justify-space-around ma-2 pa-2" @click="homepageClick">
                    <v-progress-circular class="mx-auto" indeterminate color="purple" size="x-large"></v-progress-circular>
                    <div class="text-h5 text-center ">Hang on while we matching your interest</div>
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
