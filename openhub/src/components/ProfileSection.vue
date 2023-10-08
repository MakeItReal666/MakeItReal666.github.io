<template>
    <v-container class="rounded-lg mb-2" elevated="4" fluid style="background-color: white; position:relative;">
        <v-btn v-if="showEdit" density="comfortable" class="position-absolute" size="small" icon="mdi-pencil"
            style="top:1.0rem; right: 1.0rem;">
        </v-btn>
        <p v-if="title" class="d-flex align-center font-weight-bold mb-4" :class="fontSize">
            {{ title }}
            <v-btn v-if="showQuestion" icon="mdi-help-circle" class="ml-4" density="compact" elevation="0" size="small" @click="$emit('clickQuestion')">
            </v-btn>
        </p>
        <slot></slot>
    </v-container>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    fontSize: String,
    showQuestion: {
        type: Boolean,
        default: false
    },
    showEdit: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped></style>
