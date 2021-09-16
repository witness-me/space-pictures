<template>
  <v-container>
    <h1 class="header-text-1">Spacey</h1>
    <div>
      Here you will see the collection of most stunning Space photos, thorougly selected for you by
      NASA. By defeault, you will get the best of the "Pictures of the day" for the last month.
      Alternatively, you could select any starting date you want. Every photo has a "Like" button,
      feel free to use it to add it to your favourites.
    </div>
    <div>You can also filter the results by any keyword</div>

    <div class="d-flex align-center flex-wrap">
      <v-text-field
        hide-details
        class="gray--text text--lighten-3 mr-3 my-1"
        color="purple lighten-2"
        label="Search By Title Or Description"
        style="max-width: 450px"
        outlined
        dense
        v-model="searchString"
      >
      </v-text-field>
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

    <transition name="fade" mode="out-in">
      <v-row
        v-if="
          !$store.getters.getPendingPicturesLoading && $store.getters.getPicturesOfTheDay.length
        "
        :key="1"
      >
        <v-col v-for="(item, i) in filteredPicturesOfTheDay" :key="i" cols="12" sm="6" lg="4">
          <PhotoCard :item="item" />
        </v-col>
      </v-row>

      <LoadingPlaceholder v-else-if="$store.getters.getPendingPicturesLoading" :key="2" />

      <div v-else class="d-flex flex-column align-center my-10">
        <img src="@/assets/error.png" style="width: 100px" alt="" />
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

<style lang="scss"></style>
