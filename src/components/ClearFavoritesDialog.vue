<template>
  <v-card class="card">
    <v-card-text class="mt-8 mb-5">
      <div class="text-center blue-grey--text text--lighten-5">
        <div>Are you sure that you want to delete all pictures from favorites?</div>
        <div>This can not be undone!</div>
      </div>
    </v-card-text>

    <v-card-actions class="pb-4">
      <v-spacer></v-spacer>
      <v-btn
        color="blue-grey darken-3"
        class="blue-grey--text text--lighten-5 mr-2"
        @click="$emit('close')"
      >
        Cancel
      </v-btn>
      <v-btn color="orange darken-4" text @click="confirm"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ClearFavoritesDialog",
  methods: {
    confirm() {
      this.$emit("confirm");
      this.$emit("close");
    },
  },
};
</script>
