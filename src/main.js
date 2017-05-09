import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store'
import request from './utils/request'
import JsBarcode from 'jsbarcode'
import 'es6-promise/auto'
import './assets/js/fontSize.js'
import './assets/style/mint-ui/style.css'
import './assets/style/iconfont/iconfont.css';
import './assets/style/common.css';

Vue.config.productionTip = false

import {
    Header,
    Button,
    Navbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Cell
} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)

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