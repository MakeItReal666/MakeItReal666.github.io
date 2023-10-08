<template>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="data"
    item-value="name"
    class="elevation-1"
    :page="currentPage"
    hide-default-footer
  >
    <template v-slot:headers="{ columns }">
      <tr>
        <template v-for="column in columns" :key="column.key">
          <td
            v-if="column.key == 'rank'"
            class="bg-grey text-center font-weight-bold"
          >
            {{ column.title }}
          </td>
          <td v-else class="text-center font-weight-bold">
            {{ column.title }}
          </td>
        </template>
      </tr>
    </template>
    <template v-slot:item="{ item, index }">
      <tr
        v-ripple
        style="cursor: pointer"
        @click="(isDialogOpen = true), (rowVal = item)"
      >
        <td class="bg-grey text-center font-weight-bold">{{ index + 1 }}</td>
        <td class="text-center">
          <v-row justify="center" align="center" class="ma-0">
            <v-col cols="3"
              ><v-avatar size="50px">
                <v-img :src="item.avatar" alt="rank1"></v-img> </v-avatar
            ></v-col>
            <v-col cols="4">{{ item.name }}</v-col>
          </v-row>
        </td>
        <td class="text-center">
          <v-rating
            readonly
            :length="5"
            :size="25"
            :model-value="item.rating"
            active-color="yellow"
          />
        </td>
        <td class="text-center">{{ item.contribution }}</td>
      </tr>
    </template>
    <template #bottom></template>
  </v-data-table>
  <v-pagination v-model="currentPage" :length="pageCount"></v-pagination>
  <ranking-dialog
    :rowVal="rowVal"
    :isDialogOpen="isDialogOpen"
    @close-dialog="isDialogOpen = false"
  />
</template>
<script lang="ts">
import { defineComponent, reactive, ref, computed, PropType } from "vue";
import RankingDialog from "./RankingDialog.vue";
import { RankingList } from "../mock";
export interface Headers {
  title: string;
  align: string;
  sortable?: boolean;
  key: string;
}

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<RankingList[]>,
      required: true,
    },
  },
  components: {
    RankingDialog,
  },
  setup(props) {
    const headers: Headers[] = reactive([
      {
        title: "Ranking",
        align: "center",
        key: "rank",
      },
      { title: "Name", align: "center", key: "name" },
      { title: "Rating", align: "center", key: "rating" },
      {
        title: "No. of Project Contribution",
        align: "center",
        key: "contribution",
      },
    ]);

    const isDialogOpen = ref(false);
    const rowVal = ref<RankingList>();
    const currentPage = ref(1);
    const pageCount = computed(() => Math.ceil(props.data.length / 10));

    return {
      headers,
      itemsPerPage: 10,
      isDialogOpen,
      rowVal,
      currentPage,
      pageCount,
    };
  },
});
</script>
