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
};
</script>

<style lang="scss">
.navbar-button {
  height: 42px !important;
  width: 180px;
  border-top-right-radius: 0 !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
  text-transform: none !important;
  background: #202629 !important;
  border: 1px solid #415355 !important;
  border-top: none !important;
  color: #eceff1 !important;
}
</style>
