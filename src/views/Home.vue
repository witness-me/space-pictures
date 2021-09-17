<template>
  <v-container class="home pt-0">
    <div class="d-flex align-center mb-2">
      <h1 class="blue-grey--text text--lighten-5 mr-2">Spacey</h1>
      <img src="@/assets/planet.png" class="logo" alt="" />
      <!-- The image above is made by www.freepik.com from https://www.flaticon.com/ -->
    </div>
    <div class="blue-grey--text text--lighten-5">
      This is a small app presenting you the Astronomy Pictures Of the Day - the most stunning Space
      photos, selected for you by NASA. Feel free to like the photos that appeal to you, the
      collection of your favorite pictures is saved in your "Favorites" tab
    </div>

    <div class="d-flex justify-space-between align-center mb-4 mt-6">
      <v-text-field
        hide-details
        class="mr-3 my-1"
        color="blue-grey lighten-3"
        label="Search By Title Or Description"
        style="max-width: 500px"
        outlined
        dense
        v-model="searchString"
      >
      </v-text-field>

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
              <v-btn
                v-on="{ ...onMenu, ...onTooltip }"
                color="blue-grey darken-3"
                class="blue-grey--text text--lighten-5"
              >
                Pick Date
                <v-icon class="ml-1">mdi-help-circle-outline</v-icon>
              </v-btn>
            </template>
            <span>
              By default, you get the pictures for the last 1 month. If you wish to change this time
              range, pick an alternative date from which this period will begin
            </span>
          </v-tooltip>
        </template>

        <v-date-picker
          v-model="selectedDate"
          color="orange darken-4"
          no-title
          :max="today"
          @input="onDateSelect"
        ></v-date-picker>
      </v-menu>
    </div>

    <transition name="fade" mode="out-in">
      <v-row
        v-if="
          !$store.getters.getPendingPicturesLoading && $store.getters.getPicturesOfTheDay.length
        "
        class="mb-5"
      >
        <v-col v-for="(item, i) in filteredPicturesOfTheDay" :key="i" cols="12" sm="6" lg="4">
          <PhotoCard :item="item" />
        </v-col>
      </v-row>

      <LoadingPlaceholder v-else-if="$store.getters.getPendingPicturesLoading" :key="2" />

      <div v-else class="d-flex flex-column align-center my-10">
        <img src="@/assets/error.png" style="width: 100px" alt="" />
        <!-- The image above is made by www.freepik.com from https://www.flaticon.com/ -->
        <div class="mt-5">Sorry, something went wrong. Try reloading the page</div>
      </div>
    </transition>
  </v-container>
</template>

<script>
import PhotoCard from "@/components/PhotoCard.vue";
import LoadingPlaceholder from "@/components/LoadingPlaceholder.vue";
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
  components: { PhotoCard, LoadingPlaceholder },
  computed: {
    filteredPicturesOfTheDay() {
      return this.$store.getters.getPicturesOfTheDay.filter((pic) => {
        return (
          pic.title.toLowerCase().includes(this.searchString.toLowerCase()) ||
          pic.explanation.toLowerCase().includes(this.searchString.toLowerCase())
        );
      });
    },
  },
  methods: {
    onDateSelect(date) {
      this.showDatePicker = false;
      this.$store.dispatch("fetchPicturesOfTheDay", date);
    },
  },
  async created() {
    this.$store.dispatch("fetchPicturesOfTheDay", this.get1MonthAgo);
    this.$store.commit("retrieveFavoritesFromLocalStorage");
  },
};
</script>

<style lang="scss">
h1 {
  font-size: 36px;
  font-weight: 500;
}
.logo {
  height: 32px;
  margin-top: 6px;
}
.v-input {
  label {
    color: #b0bec5 !important;
  }
  input {
    color: #eceff1 !important;
  }
}
</style>
