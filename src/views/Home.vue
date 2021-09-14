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

    <div class="d-flex align-center">
      <v-text-field
        hide-details
        class="gray--text text--lighten-3 mr-3"
        color="purple lighten-2"
        label="Type your search string"
        style="max-width: 300px"
        outlined
        v-model="searchString"
      />
      <v-btn> Search </v-btn>
      <v-spacer />

      <v-tooltip bottom max-width="300px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            Pick date
            <v-icon class="ml-1">mdi-help-circle-outline</v-icon>
          </v-btn>
        </template>
        <span
          >By defeault, you are getting pictures for the last month. If you wish to change this time
          range, you can choose an alternative date from which this period will begin</span
        >
      </v-tooltip>
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
    return {
      searchString: "",
    };
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
