<template>
  <footer class="footer d-flex flex-column align-center justify-center">
    <small class="font-weight-medium blue-grey--text text--lighten-5"
      >Designed by Vlad Nikolaenko</small
    >

    <div class="d-flex">
      <a href="mailto:vladislavnikolaenko@gmail.com" target="_blank">
        <v-icon size="20" color="#CFD8DC"> mdi-email-outline </v-icon>
      </a>

      <a href="https://github.com/witness-me/spacey" target="_blank">
        <v-icon size="20" color="#CFD8DC"> mdi-github </v-icon>
      </a>
      <a href="https://www.linkedin.com/in/vladislav-nikolaenko/" target="_blank">
        <v-icon size="20" color="#CFD8DC"> mdi-linkedin </v-icon>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  background: linear-gradient(#263238, #1c2529);
  height: 52px;
  border-top: 1px solid #415355;

  a {
    margin: 0 4px;
  }
}
</style>
