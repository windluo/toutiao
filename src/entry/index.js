import '../libs/adapt.js'

import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../css/comm.css'

import topbar from '../components/topbar.vue'
import sidebar from '../components/sidebar.vue'
import main from '../components/main.vue'
import recommend from '../components/recommend.vue'
import welcome from '../components/welcome.vue'

Vue.use(VueRouter)
Vue.use(MintUI)

const routes = [
	{
		path: '/',
		components: {
			topbar, sidebar, main
		},
		children: [
			{
				path: '/recommend',
				component: recommend
			},
			{
				path: '/welcome',
				component: welcome
			}
		]
	}
]

const router = new VueRouter({
	routes
})

new Vue({
	router,
	el: '#app'
})