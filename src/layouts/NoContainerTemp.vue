<template>
  <v-app id="app">
    <Loader />
    <NavbarDev />
    <Loader />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavbarDev from './../components/NavbarDev';
import Loader from "@/components/Loader";

export default {
  components:  {
    NavbarDev,
    Loader
  }
}
</script>