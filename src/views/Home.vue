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
      <v-col v-for="(item, i) in pictureOfTheDayList" :key="i" cols="12" sm="6" lg="4">
        <v-card>
          <v-img :src="item.url"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>
            <div class="my-4 text-subtitle-1">{{ item.explanation }}</div>

            <div class="d-flex align-center justify-space-between">
              <div>{{ item.date }}</div>
              <v-btn
                v-if="!likedPictures.includes(item)"
                color="deep-purple lighten-2"
                text
                @click="likedPictures.push(item)"
              >
                Like
              </v-btn>
              <v-btn v-else color="deep-purple lighten-2" @click="unlikePicture(item)">
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
export default {
  name: "Home",
  data() {
    return {
      pictureOfTheDayList: [],
      likedPictures: [],
    };
  },
  components: {},
  methods: {
    unlikePicture(picture) {
      const index = this.likedPictures.findIndex((el) => el.url === picture.url);
      this.likedPictures.splice(index, 1);
    },
  },
  async created() {
    const resp = await this.$api.pictureOfTheDay.getDefaultCollection();
    this.pictureOfTheDayList = resp.data.filter((item) => item.media_type === "image").reverse();
  },
};
</script>
