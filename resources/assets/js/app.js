require('./bootstrap')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './static/styles/reset.css'
import './static/styles/border.css'
import './static/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)


const app = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
