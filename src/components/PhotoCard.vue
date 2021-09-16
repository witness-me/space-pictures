<template>
  <v-card class="card">
    <img :src="item.url" class="card__image" alt="" />
    <div class="d-flex">
      <v-card-title class="pt-3">{{ item.title }}</v-card-title>
    </div>

    <v-card-text>
      <small> {{ item.explanation }} </small>

      <div class="d-flex align-center justify-space-between">
        <div>{{ item.date.replaceAll("-", "/") }}</div>
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

<style lang="scss">
.card {
  background: #202a30 !important;
  border: 1px solid #415355 !important;

  &__image {
    width: 100%;
    border-bottom: 1px solid #37474f;
  }
}
</style>
