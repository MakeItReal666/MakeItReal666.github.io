  
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import ProfileSection from '../components/ProfileSection.vue'
import InfoItem from '../components/InfoItem.vue';
import projectData from '../assets/projects.json'
import userData from '../assets/users.json'
import badgeData from '../assets/badges.json'

const route = useRoute()
const username= route.params.id
const isOwnProfile = ref(username == 'jessicaparker')

const userDetail = ref(userData[username as keyof typeof userData])

const badgeDialog = ref(false)

const isConnect = ref(true)

// data
const externalProfiles = ref([
  {
    title: 'jessicaparker@email.com',
    value: 1,
    color: 'black',
    icon: 'mdi-email',
  },
  {
    title: 'LinkedIn',
    value: 1,
    color: 'black',
    icon: 'mdi-linkedin',
  },
])

const projects = ref([
  {
    title: 'Own Projects',
    number: 0,
  },
  {
    title: 'Ongoing',
    number: 1,
    project_title: [projectData[0].name],
  },
  {
    title: 'Completed',
    number: 5,
    project_title: [projectData[4].name, projectData[5].name, projectData[6].name, projectData[7].name, projectData[8].name],
  },
])

const recommendedProjects = [projectData[2], projectData[6], projectData[7], projectData[4], projectData[3]]



</script>

<template>
  <v-row class="mx-16">
    <v-col cols="8" class="d-flex flex-column">
      <ProfileSection >
        <v-row>
          <v-col cols="4" class="d-flex align-center justify-center">
            <img v-if="isOwnProfile" aspect-ratio="9/16" src="../assets/user.png" />
            
            <img v-else="isOwnProfile" aspect-ratio="9/16" src="../assets/logo.svg" />
          </v-col>
          <v-col>
            <v-container>
              <v-row>
                <p class="text-h6 font-weight-bold ">
                  {{ userDetail.name }}</p>
              </v-row>
              <v-row>
                <p class="text-subtitle-2">{{userDetail.title}}</p>
              </v-row>
              <v-row>
                <p class="text-subtitle-2 text-grey-darken-1">Chicago, IL United States</p>
              </v-row>

              <v-row>
                <v-divider class="border-opacity-25 my-2"></v-divider>
              </v-row>

              <v-row v-if="isOwnProfile">
                <p class="text-h7 font-weight-bold">External Profiles</p>
              </v-row>
              <v-row v-if="isOwnProfile">
                <v-list>
                  <v-list-item v-for="e in externalProfiles" :key="e.title">
                    <v-list-item-content>
                      <v-list-item-title>
                        <!-- Wrap the title in an anchor tag -->
                        <a href="#" class="text-subtitle-2">{{ e.title }}</a>
                      </v-list-item-title>
                    </v-list-item-content>
                    <template v-slot:prepend>
                      <v-icon color="#646cff" :icon="e.icon"></v-icon>
                    </template>
                  </v-list-item>
                </v-list>
              </v-row>

              <v-container v-else class="d-flex flex-column justify-center align-center justify-space-between">
                <p class="text-h7 font-weight-medium my-5">Connect with the users to unlock their full profiles.</p>
                <v-btn color="primary" density="comfortable" :text="isConnect? 'Request Connect' : 'Cancel Request'" @click="isConnect = !isConnect"></v-btn>
              </v-container>
            </v-container>
          </v-col>
        </v-row>
      </ProfileSection>

      <ProfileSection title="About" font-size="text-h6">
        <p class="text-body-2">{{ userDetail.about }}</p>
      </ProfileSection>

      <div v-if="isOwnProfile">
        <ProfileSection title="Expertise" font-size="text-h6">
          <v-chip-group>
            <v-chip color="primary" variant="outlined">Front-end</v-chip>
            <v-chip color="primary" variant="outlined">Back-end</v-chip>
            <v-chip color="primary" variant="outlined">Full-stack</v-chip>
          </v-chip-group>
        </ProfileSection>

        <ProfileSection title="Projects" font-size="text-h6">
          <v-expansion-panels>
            <v-expansion-panel v-for="project in projects">
              <v-expansion-panel-title class="d-flex">
                {{ project.title }} <v-spacer></v-spacer><v-avatar class="ml-10" color="primary" size="x-small">{{
                  project.number }}</v-avatar>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-container v-if="project.number == 0" class="mx-auto font-weight-medium">Nothing to see here
                  <v-avatar class="ml-3" color="red" size="x-small"><v-icon icon="mdi-close"></v-icon></v-avatar>
                </v-container>
                <v-list-item v-else v-for="title in project.project_title">
                  <InfoItem :title="title" :show-avatar="false" show-divider />
                </v-list-item>
              </v-expansion-panel-text>

            </v-expansion-panel>

          </v-expansion-panels>
        </ProfileSection>


        <ProfileSection title="Reviews" font-size="text-h6">
          <InfoItem title="David Anderson" caption="Web Development | SEO">
            <v-avatar class="mr-2" color="primary">
              <v-icon icon="mdi-account-outline"></v-icon>
            </v-avatar>
          </InfoItem>
          <v-row>
            <v-container>
              <blockquote>
                <i class="text-body-2">"Jessica has contributed one of the most impressive function in my project. Working
                  with her is so productive."</i>
              </blockquote>
            </v-container>
          </v-row>
        </ProfileSection>

      </div>
    </v-col>
    <!-- Right Section -->
    <v-col>
      <ProfileSection title="Badges" @clickQuestion="badgeDialog = true" show-question>
        <InfoItem title="Bronze Contributor" caption="Contributed in at least 5 projects" icon="mdi-crown" show-avatar>
          <v-avatar size="default" class="bronze-frame">
            <v-icon icon="mdi-crown" style="color:var(--primary-color)"></v-icon>
          </v-avatar>
        </InfoItem>
      </ProfileSection>

      <ProfileSection title="Users you might know">
        <div v-for="user in userData">
          <InfoItem v-if="user.username != 'jessicaparker'" :title="user.name" :caption="user.title" :url="'/profile/'+user.username">
            <v-avatar class="mr-2" color="primary">
              <v-icon icon="mdi-account-outline"></v-icon>
            </v-avatar>
          </InfoItem>
          <v-divider></v-divider>
        </div>
      </ProfileSection>

      <ProfileSection title="Recommended Projects">
        <InfoItem v-for="project in recommendedProjects" :title="project.name" :caption="project.date"
          icon="mdi-calendar-range" :show-avatar="false" show-divider></InfoItem>
      </ProfileSection>
    </v-col>

  </v-row>

  <v-dialog v-model="badgeDialog" width="auto">
    <v-card>
      <v-card-title class="mx-auto mt-5 font-weight-bold">
        What are Badges?
      </v-card-title>
      <v-card-text class="text-center">
        We believe in recognizing and celebrating valuable contributions.<br /> Earn badges that showcase your dedication
        and expertise as you actively participate<br />in our impactful open science projects.
        <v-container class="d-flex justify-space-evenly my-5">
          <div v-for="badge in badgeData">
            <v-row class="d-flex justify-center">
              <v-avatar :class="badge.frame">
                <v-icon icon="mdi-crown" style="color:var(--primary-color)"></v-icon>
              </v-avatar>
            </v-row>
            <v-row>
              <InfoItem :title="badge.level" :caption="'> ' + badge.number + ' projects'" :show-avatar="false"
                is-center />
            </v-row>
          </div>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="badgeDialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="sass">
.gold-frame
    border: 6px solid #FFCA28
    border-radius: 50%
    padding: 0px

.silver-frame
    border: 6px solid #C0C0C0
    border-radius: 50%
    padding: 0px

.bronze-frame
    border: 6px solid #FF8228
    border-radius: 50%
    padding: 0px


</style>
  