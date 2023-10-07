<script setup>
import { ref } from 'vue'

const platformName = ref("Open Hub")
var username = ref("jaker")
var password = "123123"
</script>

<template>
    <v-container>

            <div class="text-center">
                <v-chip class="ma-2">
                    Default
                </v-chip>

                <v-chip class="ma-2" color="primary">
                    Primary
                </v-chip>

                <v-chip class="ma-2" color="secondary">
                    Secondary
                </v-chip>

                <v-chip class="ma-2" color="red" text-color="white">
                    Red Chip
                </v-chip>

                <v-chip class="ma-2" color="green" text-color="white">
                    Green Chip
                </v-chip>
            </div>

    </v-container>
</template>