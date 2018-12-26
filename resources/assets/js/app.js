require('./bootstrap')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import './static/styles/reset.css'
import './static/styles/border.css'
import './static/styles/iconfont.css'

fastClick.attach(document.body)

const app = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
