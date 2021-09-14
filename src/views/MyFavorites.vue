<template>
  <v-container>
    <h1>This is Favorites page</h1>
    <v-row>
      <v-col v-for="(item, i) in $store.getters.getFavorites" :key="i" cols="12" sm="6" lg="4">
        <v-card>
          <img :src="item" style="width: 100%" alt="" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
