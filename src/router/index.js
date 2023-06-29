import Vue from 'vue'
import Router from 'vue-router'
import paths from './paths'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './../app.store'
import DataService from './../services/dataService'

let dataService = new DataService()

// Ignore navigating to same path
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL || '/',
  mode: 'history',
  linkActiveClass: 'active',
  routes: paths
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  if (to.matched.some(record => record.meta.guest)) {
    next()
  } else {
    if (window.$cookies.get('posToken') == null) {
      next({ name: 'login' })
    } else {

      // Extend session for another hour
      window.$cookies.set('posToken', window.$cookies.get('posToken'))
      if (Object.keys(store.state.user).length == 0 || Object.keys(store.state.userProfile).length == 0) {
        store.state.loader = true

        dataService.whoAmI().then(res => {
          store.state.user = res.data.localUser
          store.state.userProfile = res.data.user
          store.state.loader = false

          next()
        }).catch(() => {
          window.location.reload()
        })
      } else {
        next()
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done();
});

export default router;