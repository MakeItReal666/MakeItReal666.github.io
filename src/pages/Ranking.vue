<template>
  <v-container class="container">
    <v-row class="title">
      <span class="text-h5 font-weight-bold">Ranking Leaderboard</span>
    </v-row>
    <v-row justify="center" class="top-leaderboard">
      <v-col cols="1" align-self="end" class="rank-2">
        <v-row justify="center">
          <v-avatar size="100px" class="silver-frame">
            <v-img
              :src="
                tab == 'collaborators'
                  ? dummyCollaborators[1].avatar
                  : dummyCreators[1].avatar
              "
              alt="rank1"
            ></v-img>
          </v-avatar>
        </v-row>
        <v-row justify="center">
          <span
            class="text-capitalize text-subtitle-1 font-weight-bold"
            >{{
          }}</span>
        </v-row>
        <v-row justify="center">
          <span class="text-subtitle-1 font-weight-bold">Rank 2</span>
        </v-row>
      </v-col>
      <v-col cols="2" align-self="end" class="rank-1">
        <v-row justify="center">
          <v-avatar size="150px" class="gold-frame">
            <v-img
              :src="
                tab == 'collaborators'
                  ? dummyCollaborators[0].avatar
                  : dummyCreators[0].avatar
              "
              alt="rank1"
            ></v-img>
          </v-avatar>
        </v-row>
        <v-row justify="center">
          <span
            class="text-capitalize text-subtitle-1 font-weight-bold"
            >{{
          }}</span>
        </v-row>
        <v-row justify="center">
          <span class="text-subtitle-1 font-weight-bold">Rank 1</span>
        </v-row>
      </v-col>
      <v-col cols="1" align-self="end" class="rank-3">
        <v-row justify="center">
          <v-avatar size="100px" class="bronze-frame">
            <v-img
              :src="
                tab == 'collaborators'
                  ? dummyCollaborators[2].avatar
                  : dummyCreators[2].avatar
              "
              alt="rank3"
            ></v-img>
          </v-avatar>
        </v-row>
        <v-row justify="center">
          <span
            class="text-capitalize text-subtitle-1 font-weight-bold"
            >{{
          }}</span>
        </v-row>
        <v-row justify="center">
          <span class="text-subtitle-1 font-weight-bold">Rank 3</span>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="start" class="tab-panel">
      <v-col cols="12">
        <v-tabs v-model="tab" color="primary" align-tabs="center" grow>
          <v-tab value="collaborators">Collaborators</v-tab>
          <v-tab value="creators">Creators</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="collaborators">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <collaborators-table :data="dummyCollaborators" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>

          <v-window-item value="creators">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <creators-table :data="dummyCreators" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>
  <script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import CollaboratorsTable from "../components/CollaboratorsTable.vue";
import CreatorsTable from "../components/CreatorsTable.vue";
import { collaborators, creators } from "../mock";

export default defineComponent({
  components: {
    CollaboratorsTable,
    CreatorsTable,
  },
  setup() {
    const dummyCollaborators = ref(collaborators);
    const dummyCreators = ref(creators);
    const tab = ref("collaborators");

    onMounted(() => {
      dummyCreators.value.sort((a, b) => {
        const ratingComparison = b.rating - a.rating;
        const projectnoComparison = b.no_of_project - a.no_of_project;
        return ratingComparison !== 0 ? ratingComparison : projectnoComparison;
      });

      dummyCollaborators.value.sort((a, b) => {
        const ratingComparison = b.rating - a.rating;
        const contributionComparison = b.contribution - a.contribution;
        return ratingComparison !== 0
          ? ratingComparison
          : contributionComparison;
      });
    });

    return {
      tab,
      dummyCollaborators,
      dummyCreators,
    };
  },
});
</script>
  <style lang="sass" scoped>
.container
  padding: 2em
  width: 100%

.gold-frame
  border: 10px solid #FFCA28
  border-radius: 50%
  padding: 0px

.silver-frame
  border: 6px solid #F4F4F4
  border-radius: 50%
  padding: 0px

.bronze-frame
  border: 6px solid #FF8228
  border-radius: 50%
  padding: 0px
</style>
  