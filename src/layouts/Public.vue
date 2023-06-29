<template>
  <v-app id="app">
    <Loader />
    <NavbarPublic />

    <v-container>
      <v-main>
        <router-view/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import NavbarPublic from './../components/NavbarPublic';
import Loader from "@/components/Loader";

export default {
  components:  {
    NavbarPublic,
    Loader
  }
}
</script>