<template>
  <v-container>
    <div class="d-flex justify-end">
      <router-link v-if="$route.name === 'Home'" to="/favorites">
        <v-btn @click="console">To Favorites</v-btn>
      </router-link>
      <router-link v-else to="/"><v-btn @click="console">To Home Page</v-btn></router-link>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AppBar",

  data: () => ({}),
  methods: {
    console() {
      console.log(this.$router.currentRoute);
    },
  },
};
</script>
