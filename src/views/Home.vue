<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, i) in pictureOfTheDayList" :key="i" cols="12" sm="6" lg="4">
        <v-card>
          <v-img :src="item.url"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>
            <div class="my-4 text-subtitle-1">{{ item.explanation }}</div>

            <div class="d-flex align-center justify-space-between">
              <div>{{ item.date }}</div>
              <v-btn color="deep-purple lighten-2" text> Like </v-btn>
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
    };
  },
  components: {},
  async created() {
    const resp = await this.$api.pictureOfTheDay.getDefaultCollection();
    this.pictureOfTheDayList = resp.data.filter((item) => item.media_type === "image").reverse();
  },
};
</script>
