<script lang="ts">
import backgroundLayout from '../layouts/LoginLayout.vue';
import CardLayout from '../layouts/CardLayout.vue';
import { defineComponent} from "vue";

export default defineComponent({
    components: {
        backgroundLayout,
        CardLayout
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
            </template>
        </CardLayout>
    </backgroundLayout>
</template>