<template>
  <v-container class="py-0">
    <div class="d-flex justify-end">
      <router-link v-if="$route.name === 'Home'" to="/favorites">
        <v-btn class="navbar-button">To Favorites</v-btn>
      </router-link>
      <router-link v-else to="/">
        <v-btn class="navbar-button">Back To Home Page</v-btn>
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
  border-bottom-left-radius: 7px !important;
  border-bottom-right-radius: 7px !important;
  text-transform: none !important;
  background: #37474f !important;
  border: 1px solid #b0bec5 !important;
  border-top: none !important;
}
</style>
