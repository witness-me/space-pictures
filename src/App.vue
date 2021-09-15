<template>
  <v-app>
    <AppBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: "App",

  data: () => ({}),
  components: { AppBar },
};
</script>

<style lang="scss">
#app {
  font-family: "Barlow", sans-serif;
  $body-font-family: "Barlow";
  $title-font: "Barlow";
}

// scroll styling
body {
  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: #313131;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #9a2a1b;
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;

    &:hover {
      background-color: #7e2216;
    }
  }
}

// vue transitions
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.v-icon {
  cursor: pointer;
}
a {
  text-decoration: none;
}
</style>
