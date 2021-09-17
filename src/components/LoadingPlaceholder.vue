<template>
  <div class="loading-placeholder d-flex flex-column align-center my-15">
    <img src="@/assets/rocket.gif" alt="" />
    <small class="blue-grey--text text--lighten-5">Retrieving data from the servers...</small>
  </div>
</template>

<script>
export default {
  name: "LoadingPlaceholder",
};
</script>

<style lang="scss" scoped>
.loading-placeholder {
  img {
    width: 100px;
  }
}
</style>
