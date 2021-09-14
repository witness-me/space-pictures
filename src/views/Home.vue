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
      you will get the collection of NASA's best shots by your query.
    </div>

    <div class="d-flex align-center flex-wrap">
      <v-text-field
        hide-details
        class="gray--text text--lighten-3 mr-3 my-1"
        color="purple lighten-2"
        label="Type your search string"
        style="max-width: 250px"
        outlined
        dense
        v-model="searchString"
      >
        <template #append>
          <v-btn height="24px" width="75px"> Search </v-btn>
        </template>
      </v-text-field>
      <v-btn class="my-1"> Search </v-btn>
      <v-spacer />

      <v-menu
        v-model="showDatePicker"
        :close-on-content-click="false"
        :close-on-click="true"
        nudge-left="152px"
        nudge-bottom="5px"
        :offset-y="true"
        bottom
        transition="slide-y-transition"
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on: onMenu }">
          <v-tooltip bottom :disabled="showDatePicker" max-width="300px">
            <template v-slot:activator="{ on: onTooltip }">
              <v-btn class="my-2 ml-2" v-on="{ ...onMenu, ...onTooltip }">
                Pick date
                <v-icon class="ml-1">mdi-help-circle-outline</v-icon>
              </v-btn>
            </template>
            <span
              >By defeault, you are getting pictures for the last month. If you wish to change this
              time range, you can choose an alternative date from which this period will begin</span
            >
          </v-tooltip>
        </template>

        <v-date-picker
          v-model="selectedDate"
          color="purple darken-2"
          no-title
          :max="today"
          @input="onDateSelect"
        ></v-date-picker>
      </v-menu>
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
import datesMixin from "@/utils/datesMixin";

export default {
  name: "Home",
  data() {
    return {
      searchString: "",
      showDatePicker: false,
      selectedDate: null,
    };
  },
  mixins: [datesMixin],
  components: {},
  methods: {
    ...mapMutations(["addToFavorites", "removeFromFavorites"]),
    onDateSelect(date) {
      this.showDatePicker = false;
      this.$store.dispatch("fetchPicturesOfTheDay", date);
    },
  },
  async created() {
    this.$store.dispatch("fetchPicturesOfTheDay", this.get1MonthAgo);
  },
};
</script>
