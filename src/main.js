import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store'
//import MintUI from 'mint-ui';
import request from './utils/request'
import 'mint-ui/lib/style.css';
import './assets/js/fontSize.js';
import JsBarcode from 'jsbarcode'

Vue.config.productionTip = false

//Vue.use(MintUI);
import {
  Header,
  Button,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Cell
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

Vue.prototype.$http = request

router.afterEach(route => {
  document.title = route.meta.title;
  store.dispatch('header/head/setHead', document.title)
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
