import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./app.store.js";
import mixin from "./app.mixin.js";
import VueCookies from "vue-cookies";
import axios from "axios";
import JsonEditor from "vue-json-edit-modal";
import VuePhoneNumberInput from "vue-phone-number-input";
import "../node_modules/vue-phone-number-input/dist/vue-phone-number-input.css";
import Default from "./layouts/Default";
import VueGtag from "vue-gtag";
import ParticlesBg from "particles-bg-vue";
import Textra from "vue-textra";
import VueParticles from "vue-particles";
import Carousel3d from "vue-carousel-3d";

import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

Vue.use(FloatingVue);
Vue.config.productionTip = false;
Vue.use(VueParticles);
Vue.use(VueGtag, {
  config: { id: "G-HE9H43N0WW" },
});
Vue.use(Carousel3d);

axios.interceptors.response.use(undefined, function (error) {
  store.state.loader = false;

  if (
    error.response &&
    (error.response.status === 409 || error.response.status === 401)
  ) {
    if (error.response.status === 401) {
      store.state.dialogMessageTitle = "Duplicate Login Detected";
      store.state.dialogMessageText =
        "We have detected a duplicate login under the same account. You have been logged out automatically.";
    } else if (error.response.status === 409) {
      store.state.dialogMessageTitle = "Session Expired";
      store.state.dialogMessageText =
        "Your session has expired. Please re-login to renew your session.";
    }

    store.state.showDialogMessage = true;

    window.$cookies.remove("posToken");

    router.replace({ name: "login" });
  }

  if (error.response && error.response.status === 400) {
    store.state.dialogMessageTitle = null;

    if (error.response.data && error.response.data.message) {
      store.state.dialogMessageText = error.response.data.message;
    } else if (error.response.message) {
      store.state.dialogMessageText = error.response.message;
    } else {
      store.state.dialogMessageText =
        "There is an error. Please reach out to our team for support.";
    }

    store.state.showDialogMessage = true;
  }

  return Promise.reject(error);
});

Vue.use(Textra);
Vue.use(VueCookies);
Vue.use(ParticlesBg);
VueCookies.config("6h");
Vue.component("vue-phone-number-input", VuePhoneNumberInput);
Vue.component("default-layout", Default);
Vue.mixin(mixin);
Vue.use(JsonEditor);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
