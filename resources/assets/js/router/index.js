import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './../views/home/Home'
import City from './../views/city/City'

export default new Router({
	routes: [
		{ path: '/', name: 'Home', component: Home },
		{ path: '/city', name: 'City', component: City }
	]
})
