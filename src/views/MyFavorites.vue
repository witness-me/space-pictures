<template>
  <v-container>
    <div class="d-flex align-center justify-space-between">
      <h1>My Favorites</h1>
      <v-btn v-if="$store.getters.getFavorites.length" @click="$store.commit('clearFavorites')">
        Clear Favorites
      </v-btn>
    </div>

    <div v-if="$store.getters.getFavorites.length">
      <v-row>
        <v-col
          v-for="(item, i) in $store.getters.getFavorites"
          :key="i"
          cols="12"
          sm="6"
          lg="4"
          class="picture-container"
        >
          <v-btn icon @click="$store.commit('removeFromFavorites', item)">
            <v-icon color="red">mdi-heart-off-outline</v-icon>
          </v-btn>
          <img :src="item.url" style="width: 100%" alt="" />
        </v-col>
      </v-row>
    </div>

    <div v-else class="d-flex flex-column align-center my-10 pt-15">
      <img src="@/assets/pictures.png" alt="" />
      <!-- The image above is made by www.freepik.com from https://www.flaticon.com/ -->
      <div>Looks like you haven't liked any pictures yet...</div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MyFavorites",
  data() {
    return {};
  },
  async created() {
    this.$store.commit("retrieveFavoritesFromLocalStorage");
  },
};
</script>

<style lang="scss" scoped>
.picture-container {
  position: relative;

  > button {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  img {
    border: 1px solid paleturquoise;
    border-radius: 5px;
  }
}
</style>
