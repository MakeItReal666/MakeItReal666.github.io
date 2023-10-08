<template>
  <v-row justify="start" class="tab-panel">
    <v-col cols="12">
      <v-tabs v-model="tab" color="primary" align-tabs="center" grow>
        <v-tab value="private">Private</v-tab>
        <v-tab value="group">Group</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="private">
          <v-row justify="start">
            <v-col cols="12">
              <v-list
                v-ripple
                lines="one"
                v-for="(item, index) in privateChat"
                :key="`${item.name}_${index}`"
              >
                <v-list-item
                  :key="item.name"
                  @click="(isDialogOpen = true), (nameVal = item.name)"
                  density="compact"
                >
                  <template v-slot:prepend>
                    <v-badge
                      :color="item.online_sts == 1 ? 'success' : 'error'"
                      icon="mdi-crown"
                      :text-color="
                        item.badge === 'gold'
                          ? 'badge-gold'
                          : item.badge === 'silver'
                          ? 'badge-silver'
                          : 'badge-bronze'
                      "
                    >
                      <v-avatar size="default" class="gold-frame">
                        <v-img
                          :alt="item.avatar.toString()"
                          :src="item.avatar"
                        ></v-img>
                      </v-avatar>
                    </v-badge>
                  </template>
                  <template v-slot:title>
                    <div v-html="item.name"></div>
                  </template>

                  <template v-slot:subtitle>
                    <div v-html="item.chat_detail"></div>
                  </template>

                  <template v-slot:append>
                    <v-badge
                      v-if="item.anonymous_sts == 1"
                      color="primary"
                      content="Anonymous"
                      inline
                    ></v-badge>
                  </template>
                </v-list-item>
                <v-divider />
              </v-list>
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="group">
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-list
                  lines="one"
                  v-for="(item, index) in groupChat"
                  :key="`${item.name}_${index}`"
                  v-ripple
                >
                  <v-list-item
                    :key="item.name"
                    @click="(isDialogOpen = true), (nameVal = item.group_name)"
                    density="compact"
                  >
                    <template v-slot:prepend>
                      <v-avatar size="default" class="gold-frame">
                        <v-img
                          :alt="item.avatar.toString()"
                          :src="item.avatar"
                        ></v-img>
                      </v-avatar>
                    </template>
                    <template v-slot:title>
                      <div v-html="item.group_name"></div>
                    </template>

                    <template v-slot:subtitle>
                      <div v-html="item.name + ' - ' + item.chat_detail"></div>
                    </template>
                  </v-list-item>
                  <v-divider />
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
  <chat-dialog
    :isDialogOpen="isDialogOpen"
    @close-dialog="isDialogOpen = false"
    :name="nameVal"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Private_Chat, Group_Chat } from "../mock";
import ChatDialog from "./ChatDialog.vue";

export default defineComponent({
  components: {
    ChatDialog,
  },
  setup() {
    const tab = ref("private");
    const privateChat = ref(Private_Chat);
    const groupChat = ref(Group_Chat);
    const isDialogOpen = ref(false);
    const nameVal = ref("");
    return {
      tab,
      privateChat,
      groupChat,
      isDialogOpen,
      nameVal,
    };
  },
});
</script>
<style lang="sass" scoped>
</style>
