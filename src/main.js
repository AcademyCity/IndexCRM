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
    Picker,
    Field,
    Radio
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
Vue.component(Field.name, Field);
Vue.component(Radio.name, Radio);

Vue.prototype.$http = request

router.beforeEach(function (to, from, next) {
    store.dispatch('common/loading/showLoading')
    if (!store.state.common.login.token) {  // 通过vuex state获取当前的token是否存在

        var code = to.query.code == undefined ? '' : to.query.code
        var state = to.query.state == undefined ? '' : to.query.state

        if (to.query.code != undefined) {
            if (state.indexOf('Base') > 0) {
                request.get('WeChat/BaseCallback?code=' + to.query.code + '&state=' + to.query.state)
                    .then((response) => {
                        if (response.succeed) {
                            if (response.message.succeed){
                                alert('获取OpenId成功')
                                alert('获取Token成功')
                                store.dispatch('common/login/setToken', response.message)
                            }
                            else {
                                location.href = response.message.message
                            }

                        } else {
                            alert('获取OpenId失败')
                        }
                    })
                    .catch((error) => {
                        console.log('发生错误:' + error)
                    });
            }
            if (state.indexOf('UserInfo') > 0) {
                request.get('WeChat/UserInfoCallback?code=' + to.query.code + '&state=' + to.query.state)
                    .then((response) => {
                        if (response.succeed) {
                            alert('获取OpenId成功')
                            alert('获取Token成功')
                            store.dispatch('common/login/setToken', response.message)
                            //location.href = to.path + '?openId=' + response.message
                        } else {
                            alert('获取OpenId失败')
                        }
                    })
                    .catch((error) => {
                        console.log('发生错误:' + error)
                    });
            }

        }
        else {
            request.get('WeChat/GetBaseUrl?backUrl=' + to.path)
                .then((response) => {
                    location.href = response.message
                })
                .catch((error) => {
                    console.log('发生错误:' + error)
                });

        }

    }

    store.dispatch('header/head/setHead', document.title)
    next()
})

router.afterEach(function (to) {
    document.title = to.meta.title
    store.dispatch('header/head/setHead', document.title)
    // setTimeout(function() {
    store.dispatch('common/loading/hideLoading')
    // }, 200)

})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')