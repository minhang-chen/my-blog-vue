import Vue from "vue";
import Pages from "./pages/page.vue";
import './assets/css/global.scss'
import Router from 'vue-router';

Vue.use(Router)
const routes = [
	{ 
		path: '/main', 
		component: () => import('./components/layout/layout.vue')  
	},
]

const router = new Router({
	routes
})

new Vue({
	el: '#pages',
	router,
	render: (c) => {
		return c(Pages)
	}
}).$mount();