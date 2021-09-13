<template>
  <v-app>
    <v-app-bar height="40px" app color="indigo darken-4"> </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
