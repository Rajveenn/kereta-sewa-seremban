import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    success: false,
    loader: false,
    fullScreen: false,
    showDialogMessage: false,
    dialogMessageTitle: null,
    dialogMessageText: null,
    loggedInAs: "ADMIN",
    userProfile: {},
    user: {},
    vendorUser: {},
    permissions: [],
    code: ''
}
const store = new Vuex.Store({ state });

export default store;
