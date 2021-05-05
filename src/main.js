import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import TopHeader from './components/TopHeader.vue';
import LogoHeader from './components/LogoHeader.vue';
import router from './router';

Vue.config.productionTip = false
Vue.component('TopHeader', TopHeader);
Vue.component('LogoHeader', LogoHeader);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
