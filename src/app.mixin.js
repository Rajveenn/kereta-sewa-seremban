import store from "./app.store.js";

const mixin = {
  methods: {
    $setLoader() {
      store.state.loader = true;
    },
    $disableLoader() {
      store.state.loader = false;
    },
    $showSuccessMessage(data) {
      if (data && data.message) {
        store.state.loader = false
        store.state.dialogMessageText = data.message
        store.state.showDialogMessage = true
      }
    }
  }
}

export default mixin 