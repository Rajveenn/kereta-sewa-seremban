<template>
  <v-app id="app">
    <Navbar />
    <Sidebar />
    <Loader />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './../components/Navbar';
import Sidebar from './../components/Sidebar';
import Loader from "@/components/Loader";

export default {
  components:  {
    Navbar,
    Sidebar,
    Loader
  }
}
</script>