<template>
  <div>
    <v-app-bar class="bar1" :elevation="11" style="background-color: #f9ece099 !important;">
      <v-row align="center" class="d-flex align-center">
        <v-col :cols="4" align="center">
          <v-img
            src="../assets/images/logo.png"
            class="logo"
            alt="keretasewa"
            @click="$router.push({ path: '/car-rental-seremban' })"
          />
        </v-col>
        <v-col :cols="4" align="center">
          <v-card-text class="d-flex align-center justify-center title">
            JRV SERVICES ADMIN
          </v-card-text>

          <br />
          <v-btn class="btnWa" @click="$router.push({ path: '/home' })"
            ><v-icon
              style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
            >
              mdi-home-circle-outline mdi-18px </v-icon
            >Home</v-btn
          >
        </v-col>
        <v-col :cols="4" align="center" style="max-width: 100% !important">
          <v-card-text class="username" v-if="name">
            {{ name }}
          </v-card-text>

          <v-btn icon @click="account()" v-if="name" class="btnWa">
            <v-icon
              style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
              >mdi-account-circle-outline</v-icon
            >
          </v-btn>

          <v-btn icon @click="logout()" v-if="name" class="btnWa">
            <v-icon
              style="
                          background-image: linear-gradient(to right, #ad5389, #3c1053);
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important; ,
                        "
              >mdi-logout-variant</v-icon
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: this.$store.state.userProfile.name,
    };
  },

  computed: {
    nameToInitials() {
      try {
        let name = this.$store.state.userProfile.name;
        return name
          .split(" ")
          .map((x) => x.charAt(0))
          .join("")
          .substr(0, 2)
          .toUpperCase();
      } catch (error) {
        return "IZ";
      }
    },
  },

  methods: {
    // checkPermission(permissionToCheck) {
    //   let user = this.$store.state.buyerUser;

    //   return user &&
    //     user.permissions &&
    //     user.permissions.includes(permissionToCheck)
    //     ? true
    //     : false;
    // },

    account() {
      if (this.$store.state.userProfile) {
        this.$router.push({ path: `/edit` });
      } else {
        this.$router.push({ path: `/login` });
      }
    },
    logout() {
      window.getApp.$emit("APP_LOGOUT");
    },
  },
};
</script>

<style scoped lang="css">
.username {
  font-size: 14px;
  color: white;
  font-weight: 900;
}
.icn1 {
  color: #80ff00 !important;
}
</style>
