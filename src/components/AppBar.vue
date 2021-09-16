<template>
  <v-container class="pt-0">
    <div class="d-flex justify-end">
      <router-link v-if="$route.name === 'Home'" to="/favorites">
        <v-btn color="blue-grey darken-3" class="navbar-button">To Favorites</v-btn>
      </router-link>
      <router-link v-else to="/">
        <v-btn color="blue-grey darken-2" class="navbar-button">Back To Home Page</v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({}),
};
</script>

<style lang="scss">
.navbar-button {
  height: 44px !important;
  border-top-right-radius: 0 !important;
  border-top-left-radius: 0 !important;
  text-transform: none !important;
}
</style>
