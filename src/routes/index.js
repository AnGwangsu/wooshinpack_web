import Vue from 'vue'
import Router from 'vue-router'
import mobile from './mobile/index'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        ...mobile
    ]
})