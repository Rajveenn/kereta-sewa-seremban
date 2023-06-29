import RestResource from "./../services/dataService";
const dataService = new RestResource();


export default [
  {
    name: 'APP_LOGOUT',
    callback: function () {
      dataService.logout({'_id' : this.$store.state.user.userId})
      window.$cookies.remove('posToken')
      window.$cookies.remove('posRole')
      this.$store.state.userProfile = {}
      this.$store.state.user = {}
      this.$router.replace({ name: 'login' });
    }
  },
];
