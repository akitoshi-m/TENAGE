import Vue from 'vue';
import Router from 'vue-router';
import Top from './components/Top.vue';
import Options from './components/Options.vue';
import Result from './components/Result.vue';
import TypesWord from './components/TypesWord.vue';
import TypesAction from './components/TypesAction.vue';
import TypesMusic from './components/TypesMusic.vue';

// Vue.use(...)プラグインを適用する
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{ path: '/', component: Top }, { path: '/options', component: Options }, { path: '/types/word', component: TypesWord }, { path: '/types/action', component: TypesAction }, { path: '/types/music', component: TypesMusic }, { path: '/result', component: Result }]
});
