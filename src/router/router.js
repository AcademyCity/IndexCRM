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
const suggestOne = r => require.ensure([], () => r(require('../page/suggest/suggestOne')), 'suggestOne')
const suggestTwo = r => require.ensure([], () => r(require('../page/suggest/suggestTwo')), 'suggestTwo')

//定义路由
const router = [
    //默认页
    {
        meta: { title: '会员中心' },
        path: '',
        redirect: '/user/userInfo'
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
    //线上建议(就餐信息)
    {
        meta: { title: '线上建议' },
        path: '/suggest/suggestOne',
        component: suggestOne
    },
    //线上建议(问卷及建议内容)
    {
        meta: { title: '线上建议' },
        path: '/suggest/suggestTwo',
        component: suggestTwo
    },
]

//初始化路由
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: router
})