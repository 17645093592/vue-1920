import Vue from 'vue'
import App from './App.vue'
import "../assets/css/index.css"
import "../rem"
import router from "./router/index.js"
import store from "./store"
import Touch from "vue-touch"
import Observer from "../observer.js"
import boscroll from "./lib"
import axios from "axios"
// import Vue from 'vue';
import "../src/filter"
import Mint from 'mint-ui';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.prototype.$observer = Observer
Vue.prototype.$axios = axios
Vue.use(Vant);

Vue.use(Mint);
Vue.use(boscroll)

// Vue.use(Vant);
Vue.use(Touch,{name: "v-touch"})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
