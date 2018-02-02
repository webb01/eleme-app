// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from '@/components/seller/seller.vue';

import 'common/stylus/index.styl';
// import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

const routes = [
    { path: '/', redirect: '/goods' }, // 页面重定向 首页显示
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
];

// 创建 router 实例，然后传 `routes` 配置 还可以传别的配置参数,
const router = new VueRouter({
    linkActiveClass: 'active',
    routes // （缩写）相当于 routes: routes
});

// 创建和挂载根实例
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
router.push('/goods');
// router.replace('/goods');

// let app = Vue.extend(App);

// let router = new VueRouter();

// router.map({
//     './goods': {
//         component: goods
//     }
// });

// router.start(app, '#app');