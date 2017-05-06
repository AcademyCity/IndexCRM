import Vue from 'vue'
import VueRouter from 'vue-router'

//定义路由地址
const login = r => require.ensure([], () => r(require('../page/login')), 'login')
const user = r => require.ensure([], () => r(require('../page/user/userInfo')), 'user')
const userInfo = r => require.ensure([], () => r(require('../page/user/userInfo')), 'userInfo')
const userPoint = r => require.ensure([], () => r(require('../page/user/userPoint')), 'userPoint')
const userCoupon = r => require.ensure([], () => r(require('../page/user/userCoupon')), 'userCoupon')
const couponInfo = r => require.ensure([], () => r(require('../page/coupon/couponInfo')), 'couponInfo')
const marketInfo = r => require.ensure([], () => r(require('../page/market/marketInfo')), 'marketInfo')
const marketCoupon = r => require.ensure([], () => r(require('../page/market/marketCoupon')), 'marketCoupon')

//定义路由
const router = [
    //默认页
    {
        meta: { title: '会员登录' },
        path: '',
        redirect: '/login'
    },
    //会员登录
    {
        meta: { title: '会员登录' },
        path: '/login',
        component: login
    },
    //会员中心
    {
        meta: { title: '会员中心' },
        path: '/user/userInfo',
        component: userInfo
    },
    //我的积分
    {
        meta: { title: '我的积分' },
        path: '/user/userPoint',
        component: userPoint
    },
    //我的券包
    {
        meta: { title: '我的券包' },
        path: '/user/userCoupon',
        component: userCoupon
    },
    //优惠券详情
    {
        meta: { title: '优惠券详情' },
        path: '/coupon/couponInfo',
        component: couponInfo
    },
    //积分商城
    {
        meta: { title: '积分商城' },
        path: '/market/marketInfo',
        component: marketInfo
    },
    //优惠券兑换
    {
        meta: { title: '优惠券兑换' },
        path: '/market/marketCoupon',
        component: marketCoupon
    },
]

//初始化路由
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: router
})