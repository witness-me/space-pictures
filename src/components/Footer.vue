<template>
  <footer class="footer d-flex flex-column align-center justify-center">
    <small class="font-weight-medium">Created by Vlad Nikolaenko</small>

    <div class="d-flex">
      <a href="mailto:vladislavnikolaenko@gmail.com" target="_blank">
        <v-icon> mdi-email-outline </v-icon>
      </a>

      <a href="https://github.com/witness-me" target="_blank">
        <v-icon> mdi-github </v-icon>
      </a>
      <a href="https://www.linkedin.com/in/vladislav-nikolaenko/" target="_blank">
        <v-icon> mdi-linkedin </v-icon>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>

<style lang="scss">
.footer {
  background: linear-gradient(#263238, #1c2529);
  height: 56px;
  border-top: 1px solid #415355;

  a {
    margin: 2px 4px 3px;
    .v-icon {
      font-size: 20px !important;
    }
  }
}
</style>
