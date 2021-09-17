<template>
  <v-card class="card">
    <img :src="item.url" class="card__image" alt="" />
    <v-card-title class="blue-grey--text text--lighten-5 py-1">{{ item.title }}</v-card-title>

    <v-card-text class="pt-1">
      <small class="blue-grey--text text--lighten-4"> {{ item.explanation }} </small>

      <div class="d-flex align-center justify-space-between">
        <div class="blue-grey--text text--lighten-2">{{ item.date.replaceAll("-", "/") }}</div>
        <v-btn
          v-if="$store.getters.getFavorites.findIndex((pic) => pic.url === item.url) === -1"
          color="orange accent-4"
          icon
          @click="addToFavorites(item)"
        >
          <v-icon size="24">mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn v-else color="orange accent-4" icon @click="removeFromFavorites(item)">
          <v-icon size="28">mdi-heart</v-icon>
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
  word-break: keep-all;

  .v-card__title {
    word-break: keep-all;
  }

  &__image {
    width: 100%;
    border-bottom: 1px solid #37474f;
  }
}
</style>
