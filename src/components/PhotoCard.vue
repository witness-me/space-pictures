<template>
  <v-card>
    <img :src="item.url" style="width: 100%" alt="" />
    <v-card-title>{{ item.title }}</v-card-title>
    <v-card-text>
      <!-- <div class="my-4 text-subtitle-1">{{ item.explanation }}</div> -->

      <div class="d-flex align-center justify-space-between">
        <div>{{ item.date }}</div>
        <transition name="fade">
          <v-btn
            v-if="$store.getters.getFavorites.findIndex((pic) => pic.url === item.url) === -1"
            color="deep-purple lighten-2"
            icon
            @click="addToFavorites(item)"
          >
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn v-else color="deep-purple lighten-2" icon @click="removeFromFavorites(item)">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </transition>
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
