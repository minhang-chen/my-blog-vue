import Vue from "vue";
import Router from 'vue-router';
import Pages from "./pages/page.vue";
import './assets/css/global.scss';

const routerPush = Router.prototype.push;

Router.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error);
};


Vue.use(Router);
const routes = [
	{ 
		path: '/main', 
		component: () => import('./components/layout/layout.vue')  
	},
	{ 
		path: '/mine', 
		component: () => import('./components/mine/mine.vue')  
	}
];

const router = new Router({
	base: process.env.NODE_ENV === 'production' ? '/' : '/',
	mode: 'history',
	routes
});

new Vue({
	el: '#pages',
	router,
	render: (c) => {
		return c(Pages);
	}
}).$mount();