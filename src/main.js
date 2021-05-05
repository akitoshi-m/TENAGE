import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import PageHeader from './components/PageHeader.vue'

Vue.config.productionTip = false
Vue.component('PageHeader', PageHeader);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
