import Vue from 'vue';
import Router from 'vue-router';
import Top from './components/Top.vue';
import Options from './components/Options.vue';
import Types from './components/Types.vue';
import Result from './components/Result.vue';

// Vue.use(...)プラグインを適用する
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{ path: '/', component: Top }, { path: '/options', component: Options }, { path: '/types', component: Types }, { path: '/result', component: Result }]
});
