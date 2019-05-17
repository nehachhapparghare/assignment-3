import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueRouter from 'vue-router'
import Routes from './routes'
import store from './store/index';

Vue.use(Vuetify, {
  iconfont: 'md'
});
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes
});

new Vue({
  router: router,
  store: store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
