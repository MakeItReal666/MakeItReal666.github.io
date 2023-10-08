<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'; // Import the router from Vue Router

export default defineComponent({
    props: {
        reverseBtn: {
            type: [String, Number, Boolean],
            default: null,
        },
        proceedBtn: {
            type: [String, Number, Boolean],
            default: null,
        },
        closeBtn: {
            type: [String, Number, Boolean],
            default: null,
        },
        routeName: {
            type: [String],
            default: null,
        },
    },
    setup() {
        const router = useRouter(); // Get the router instance
        const nextBtnClick = (routeName: string) => {
            // Redirect the user back to the "/page"
            router.push(routeName);
        };

        return {
            nextBtnClick
        }
    },
    computed: {
        bothPropsNotNull() {
            return this.reverseBtn !== null && this.proceedBtn !== null;
        },
        closeBtnNotNull() {
            return this.closeBtn !== null && this.closeBtn !== undefined;
        },
    },
    methods: {
        handleCloseButtonClick() {
            // Use window.history.back() to navigate back to the previous page
            window.history.back();
        }
    },
});

</script>

<template>
    <v-card class="mx-auto" max-width="50vw">
        <div class="d-flex flex-column mb-6">
            <div v-if="closeBtnNotNull" class="d-flex justify-end">
                <v-btn icon="mdi-close" round="true" @click="handleCloseButtonClick" flat></v-btn>
            </div>
            <div id="title" style="color:black">
                <slot name="title"></slot>
            </div>
            <slot name="cardBody"></slot>
            <div class="d-flex justify-space-between" v-if="bothPropsNotNull">
                <v-btn class="ml-4 px-15" @click="nextBtnClick(routeName)" flat>Skip</v-btn>
                <v-btn class="mr-4 px-15" color="#9250FE" @click="nextBtnClick(routeName)">Next</v-btn>
            </div>
        </div>
    </v-card>
</template>

<style scoped>
#form-layout {
    max-width: 600px;
    border: 2px solid black;
    border-radius: 10px;
    margin: auto;
}

#title {
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
}
</style>