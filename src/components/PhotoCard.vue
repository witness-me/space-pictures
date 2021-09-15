<template>
  <v-card>
    <img :src="item.url" style="width: 100%" alt="" />
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text>
      <!-- <div class="my-4 text-subtitle-1">{{ item.explanation }}</div> -->

      <div class="d-flex align-center justify-space-between">
        <div>{{ item.date }}</div>
        <v-btn
          v-if="$store.getters.getFavorites.findIndex((pic) => pic.url === item.url) === -1"
          color="deep-purple lighten-2"
          text
          @click="addToFavorites(item)"
        >
          Like
        </v-btn>
        <v-btn v-else color="deep-purple lighten-2" @click="removeFromFavorites(item)">
          Unlike
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PhotoCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
  methods: {
    ...mapMutations(["addToFavorites", "removeFromFavorites"]),
  },
};
</script>
