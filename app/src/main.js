import Vue from 'vue'
import App from './App.vue'
import vuetify from 'vuetify'
import { store } from './store'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios';
import AppLayout from "./layouts/AppLayout.vue";

Vue.prototype.$http = axios;

Vue.use(vuetify);
Vue.config.productionTip = false
Vue.component("app-layout", AppLayout);

const opts = {
    theme: {
    light: true
  }
};

new Vue({
  vuetify : new vuetify(opts),
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')
