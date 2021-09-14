<template>
  <v-container>
    <h1 class="header-text-1">Spacey</h1>
    <div>
      Here you will see the collection of most stunning photos, thorougly selected for you by NASA.
      By defeault, you will get the best the "Pictures of the day" for the last month.
      Alternatively, you could select any starting date and pick another time range. Every photo has
      a "Like" button, use it to add it to your favourites.
    </div>
    <div>
      If you are interested in something specific, feel free to type any title in the searchbox and
      you will get the collection of NASA's photos by your query.
    </div>
    <v-row>
      <v-col
        v-for="(item, i) in $store.getters.getPicturesOfTheDay"
        :key="i"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-card>
          <img :src="item.url" style="width: 100%" alt="" />
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>
            <div class="my-4 text-subtitle-1">{{ item.explanation }}</div>

            <div class="d-flex align-center justify-space-between">
              <div>{{ item.date }}</div>
              <v-btn
                v-if="!$store.getters.getFavorites.includes(item.url)"
                color="deep-purple lighten-2"
                text
                @click="addToFavorites(item.url)"
              >
                Like
              </v-btn>
              <v-btn v-else color="deep-purple lighten-2" @click="removeFromFavorites(item.url)">
                Unlike
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapMutations(["addToFavorites", "removeFromFavorites"]),
  },
  async created() {
    this.$store.dispatch("fetchPicturesOfTheDay");
  },
};
</script>
