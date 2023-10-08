<template>
  <v-card>
    <v-layout style="background-color: #eeeeee;">
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="primary" prominent>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="2" class="pr-8">
            <router-link to="/home"><v-row justify="end"><v-img max-width="64"
                  src="src/assets/logo.svg"></v-img></v-row></router-link>
          </v-col>
          <v-col cols="5" class="px-8">
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              :label="
                search.length == 0
                  ? 'Search for anything, user, projects and more!'
                  : ''
              "
              hide-details
              density="compact"
              variant="solo"
            ></v-text-field
          ></v-col>
          <v-col cols="5" align-self="center">
            <v-row justify="start" align="center">
              <v-btn class="mx-2" @click="ToExplore()"><v-col>
                  <v-row justify="center">
                    <v-icon>mdi-compass</v-icon>
                  </v-row>
                  <v-row justify="center" class="text-subtitle-2">Explore</v-row>
                </v-col>
              </v-btn>
              <v-btn class="mx-2" @click="ToRanking()"><v-col>
                  <v-row justify="center">
                    <v-icon>mdi-chevron-triple-up</v-icon>
                  </v-row>
                  <v-row justify="center" class="text-subtitle-2">Ranking</v-row>
                </v-col>
              </v-btn>
              <v-btn class="mx-2" @click="ToProfile()"><v-col>
                  <v-row justify="center">
                    <v-icon>mdi-account</v-icon>
                  </v-row>
                  <v-row justify="center" class="text-subtitle-2">Profile</v-row>
                </v-col>
              </v-btn>
              <v-col cols="2" class="pr-8">
            <login-avatar color="grey"/>
          </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-app-bar>

      <v-navigation-drawer
        v-model="chatvisible"
        temporary
        :class="chatvisible ? 'chatbox-active' : 'chatbox-inactive'"
        location="right"
        v-if="login"
      >
        <v-list style="padding: 0">
          <v-list-item
            class="chat-bar bg-secondary"
            prepend-icon="mdi-chat"
            :append-icon="
              chatvisible ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'
            "
            title="Chat"
            variant="text"
            @click="chatvisible = !chatvisible"
          ></v-list-item>
        </v-list>
        <v-divider />
        <v-list-item>
          <message-list />
        </v-list-item>
      </v-navigation-drawer>

      <v-main class="router-view">
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import LoginAvatar from "../components/LoginAvatar.vue";
import MessageList from "../components/MessageList.vue";
export default defineComponent({
  components: {
    MessageList,
    LoginAvatar,
  },
  setup() {
    const drawer = ref(false);
    const router = useRouter();
    const search = ref("");
    const chatvisible = ref(false);
    const login = ref(sessionStorage.getItem('login'));

    return {
      drawer,
      search,
      ToExplore,
      ToRanking,
      ToProfile,
      chatvisible,
      ToProjectRegistration,
      login
    };
    async function ToProjectRegistration() {
      await router.push("/createproject");
    }
    async function ToExplore() {
      await router.push("/explore");
    }
    async function ToRanking() {
      await router.push("/ranking");
    }
    async function ToProfile() {
      await router.push("/profile/jessicaparker");
    }
  },
});
</script>
<style lang="sass">
.fixed
  position: fixed
  bottom: 0

.chatbox-active
  min-width: 30vw
  min-height: calc(100vh - 64px)
  transform: translateY(0%) !important

.chatbox-inactive
  min-width: 30vw
  min-height: calc(100vh - 64px)
  transform: translateY(90%) !important

.chat-bar
  height: 10vh

.router-view 
  margin: 0 auto
  max-width: 1280px
  background-color: #eeeeee
</style>