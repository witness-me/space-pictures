<template>
  <v-container>
    <h1>My Favorites</h1>
    <v-row v-if="$store.getters.getFavorites.length">
      <v-col v-for="(item, i) in $store.getters.getFavorites" :key="i" cols="12" sm="6" lg="4">
        <v-card>
          <img :src="item.url" style="width: 100%" alt="" />
        </v-card>
      </v-col>
    </v-row>

    <div v-else class="d-flex flex-column align-center my-10 pt-15">
      <img src="@/assets/pictures.png" alt="" />
      <!-- The image above is made by www.freepik.com from https://www.flaticon.com/ -->
      <div>Looks like you haven't liked any pictures yet...</div>
    </div>
  </v-container>
</template>
