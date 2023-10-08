<template>
    <a :href="url">
        <div class="d-flex">
            <v-col class=" flex-grow-0" v-if="showAvatar">

                <slot></slot>

            </v-col>

            <v-container class="d-flex flex-grow-1">
                <div class="align-self-center">
                    <v-row :class="isCenter ? 'mx-auto' : ''">
                        <p class="title text-h7 font-weight-medium me-auto">{{ title }}</p>
                    </v-row>
                    <v-row class="d-flex align-center">
                        <v-icon v-if="icon" :icon="icon" class="mr-2 text-grey-darken-2" size="x-small"></v-icon>
                        <p class="text-caption font-weight-light text-grey-darken-2">{{ caption }}</p>
                    </v-row>
                </div>
            </v-container>
        </div>
    </a>

    <v-divider v-if="showDivider"></v-divider>
</template>

<script setup lang="ts">


defineProps({
    title: String,
    caption: String,
    icon: String,
    url: {
        type: String,
        default: "#"
    },
    showAvatar: { type: Boolean, default: true },
    showDivider: { type: Boolean, default: false },
    isCenter: { type: Boolean, default: false },
})
</script>

<style scoped>
.title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
}
</style>