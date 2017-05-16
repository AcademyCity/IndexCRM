import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store'
import request from './utils/request'
import JsBarcode from 'jsbarcode'
import 'es6-promise/auto'
import './assets/js/fontSize.js'
import './assets/style/mint-ui/style.css'
import './assets/style/iconfont/iconfont.css'
import './assets/style/common.css'

Vue.config.productionTip = false

const FastClick = require('fastclick')
FastClick.attach(document.body)

import {
    Toast,
    MessageBox,
    Header,
    Button,
    Navbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Cell,
    DatetimePicker,
    Popup,
    Picker
} from 'mint-ui'

Vue.component(Toast.name, Toast)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);

Vue.prototype.$http = request

router.beforeEach(function (to, from, next) {
    store.dispatch('common/loading/showLoading')
    next()
})

router.afterEach(function (to) {
    document.title = to.meta.title
    store.dispatch('header/head/setHead', document.title)
    setTimeout(function () {
        store.dispatch('common/loading/hideLoading')
    }, 300)

})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')