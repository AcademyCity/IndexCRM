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
    //store.dispatch('common/login/logIn', ['oSfgaxG5VurYJG-t7Gxu1T64WxHU', 'oSfgaxG5VurYJG-t7Gxu1T64WxHU', '012000000001'])
    if (!store.state.common.login.token) { // 通过vuex state获取当前的token是否存在

        var url = 'http://crm.academycity.top'
        var code = to.query.code == undefined ? '' : to.query.code
        var state = to.query.state == undefined ? '' : to.query.state

        if (code != '') {
            if (state.indexOf('Base') >= 0) {
                request.get('WeChat/BaseCallback?code=' + code + '&state=' + state + '&backUrl=' + to.path)
                    .then((response) => {
                        if (response.success) {
                            if (response.message.success) {
                                store.dispatch('common/login/logIn', [response.message.message.token, response.message.message.openId, response.message.message.vipCode])
                                next()
                            } else {
                                location.href = response.message.message
                            }
                        } else {
                            MessageBox.alert(response.message).then(action => {
                                location.href = url + to.path;
                            })
                        }
                    })
                    .catch((error) => {
                        MessageBox.alert('发生错误:' + error).then(action => {
                            location.href = url + to.path
                        });
                    });
            }
            if (state.indexOf('UserInfo') >= 0) {
                // MessageBox.alert('WeChat/UserInfoCallback?code=' + code + '&state=' + state);
                request.get('WeChat/UserInfoCallback?code=' + code + '&state=' + state)
                    .then((response) => {
                        if (response.success) {
                            store.dispatch('common/login/logIn', [response.message.message.token, response.message.openId, response.message.vipCode])
                            next()
                        } else {
                            MessageBox.alert(response.message).then(action => {
                                location.href = url + to.path
                            });
                        }
                    })
                    .catch((error) => {
                        MessageBox.alert('发生错误:' + error).then(action => {
                            location.href = url + to.path
                        });
                    });
            }
        } else {
            request.get('WeChat/GetBaseUrl?backUrl=' + to.path)
                .then((response) => {
                    location.href = response.message
                })
                .catch((error) => {
                    MessageBox.alert('发生错误:' + error).then(action => {
                        location.href = url + to.path
                    });
                });
        }

    } else {
        next()
    }

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