<template>
  <v-dialog v-model="isDialogOpen" width="30vw">
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>User's Detail</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close-dialog')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>
        <v-row class="top" justify="center">
          <v-col cols="12" class="pa-4">
            <v-row justify="center">
              <v-badge
                :text-color="
                  rowVal?.badge === 'gold'
                    ? 'badge-gold'
                    : rowVal?.badge === 'silver'
                    ? 'badge-silver'
                    : 'badge-bronze'
                "
                icon="mdi-crown"
                class="badge"
              >
                <v-avatar size="150px">
                  <v-img
                    :src="rowVal?.avatar"
                  ></v-img>
                </v-avatar>
              </v-badge>
            </v-row>
          </v-col>
          <v-col cols="12" class="pa-4">
            <v-row justify="center" class=" text-subtitle-1 font-weight-bold">
              {{ rowVal?.name }}
            </v-row>
            <v-row justify="center"
              ><v-rating
                readonly
                :length="5"
                :size="25"
                :model-value="rowVal?.rating"
                active-color="yellow"
            /></v-row>
          </v-col>
        </v-row>
        <v-row class="bottom">
          <v-col cols="12"> </v-col>
        </v-row>
      </v-card-text>
      <v-card-text class="bg-grey-lighten-4 ma-4 rounded">
        <v-row justify="start" v-if="rowVal?.skillArr.length">
          <v-col cols="12" align-self="center">
            <v-chip
              class="ma-1"
              v-for="(skill, index) in rowVal.skillArr"
              :key="index"
              color="primary"
            >
              {{ skill }}
            </v-chip>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="2" align-self="center" class="ma-1">
            <v-img
              v-if="rowVal?.country_code"
              :width="25"
              aspect-ratio="16/9"
              cover
              :src="getFlagIcon(rowVal?.country_code)"
            ></v-img>
          </v-col>
          <v-col cols="9">
            <span class="text-body-2"
              >{{ rowVal?.country }},{{ rowVal?.city }}</span
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RankingList } from "../mock";
export interface Collaborators {
  name: string;
  badge: string;
  rating: number;
  total_project?: number;
  total_project_contribution?: number;
  points: number;
  skillArr: string[];
  city: string;
  country: string;
  countrycode: string;
}

export default defineComponent({
  props: {
    isDialogOpen: {
      type: Boolean,
      required: true,
    },
    rowVal: {
      type: Object as PropType<RankingList | undefined>,
      required: true,
    },
  },
  setup() {
    return {
      getFlagIcon,
    };

    function getFlagIcon(countryCode: string) {
      return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${countryCode.toLowerCase()}.svg`;
    }
  },
});
</script>
<style lang="sass">
.badge
  .v-badge__wrapper
    .v-badge__badge
      height: 30px
      width: 30px
      bottom: calc(100% - 29px) !important
      left: calc(100% - 29px) !important
      border-radius: 20px
    .v-icon
      font-size: 1.25rem
</style>
