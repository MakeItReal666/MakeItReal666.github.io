<script lang="ts">
import backgroundLayout from '../layouts/LoginLayout.vue';
import CardLayout from '../layouts/CardLayout.vue';
import { onMounted, defineComponent, ref } from "vue";
import { useRouter } from 'vue-router'; // Import the router from Vue Router

export default defineComponent({
    components: {
        backgroundLayout,
        CardLayout
    },
    setup() {
        const router = useRouter(); // Get the router instance
        const loginClicked = () => {
            // Set the 'login' key with the value '100' in sessionStorage
            sessionStorage.setItem('login', '100');
            // Redirect the user back to the "/page"
            router.push('/explore');
        };

        const signUpUrl = ref('');

        onMounted(() => {
            signUpUrl.value = window.location.origin + '/purpose';
        });

        return {
            loginClicked,
            signUpUrl
        };
    },
})
</script>

<template>
    <backgroundLayout>
        <CardLayout class="card-background" :closeBtn="true">
            <template #title>Login</template>
            <template #cardBody>
                <v-sheet class="ma-2 pa-2">
                    <v-text-field prepend-inner-icon="mdi-account-box" label="Username" variant="outlined"
                        hint="Enter your username" />
                </v-sheet>
                <v-sheet class="ma-2 pa-2">
                    <v-text-field prepend-inner-icon="mdi-lock" label="Password" variant="outlined"
                        hint="Enter your password to access this website" append-inner-icon="mdi-eye-off" />
                </v-sheet>
                <v-btn class="ma-4 pa-2 py-4" style="height: fit-content;" color="#B08BFE"
                    @click="loginClicked">Login</v-btn>
                <div class="d-flex mt-5">
                    <v-divider></v-divider>
                    <div class="px-6 font-weight-bold">OR</div>
                    <v-divider></v-divider>
                </div>
                <div class="d-flex justify-space-between">
                    <div class="ma-6"><img src="../assets/login-google-btn.jpg"></div>
                    <div class="ma-6"><img src="../assets/login-facebook-btn.jpg"></div>
                    <div class="ma-6"><img src="../assets/login-linkedin-btn.jpg"></div>
                    <div class="ma-6"><img src="../assets/login-orcid-btn.jpg"></div>
                </div>
                <div class="mx-auto" style="color:black">No account yet? <a :href=signUpUrl>Sign up</a></div>
            </template>
        </CardLayout>
    </backgroundLayout>
</template>
<style scoped>
.card-background {
    background-color: #FEFEFE;
}

a:hover {
    font-weight: bold;
}

.border-box {
    border: 2px solid black;
}
</style>
