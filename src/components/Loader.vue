<template>
  <div v-show="this.$store.state.loader">
    <div class="loaderBackground" />
    <v-dialog
      v-model="this.$store.state.loader"
      hide-overlay
      persistent
      width="300"
    >
      <v-card class="grid6">
        <v-card-text class="pt-4">
          <center>
            <img src="../assets/images/logo.png" class="loader-logo" alt="car rental seremban" />
          </center>
          <v-progress-linear
            indeterminate
            color="#f9ece0"
            style="
              background: linear-gradient(to right, #ad5389, #3c1053);
              -webkit-background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
            "
            class="mb-0"
          ></v-progress-linear>
          <center class="pt-2" style="color: white !important">Loading</center>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "loader",
};
</script>
