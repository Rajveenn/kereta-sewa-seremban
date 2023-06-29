<template>
  <v-app id="app">
    <Loader />
    <Dialog />
    
    <Navbar v-if="renderNavBar" />
   
    <v-container v-if="noScroll">
      <router-view/>
    </v-container>
    <v-container fluid v-else @click="closeDrawer">
      <v-main>
        <router-view/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from './../components/Navbar';
import Loader from "@/components/Loader";
import Dialog from './../components/Dialog'

export default {
  components:  {
    Navbar,
    Loader,
    Dialog
  },
  data() {
    return {
      renderNavBar: false,
      renderNavBarGuest: false,
      renderSideBar: false,
      renderContainer: false,
      noScroll: false
    }
  },
  beforeUpdate() {
    if (this.$route && this.$route.meta) {
      this.renderNavBar = this.$route.meta.renderNavBar || false
      this.noScroll = this.$route.meta.noScroll || false
    }
  },
  methods: {
    closeDrawer() {
      window.getApp.$emit('APP_DRAWER_CLOSED');
    }
  }
}
</script>