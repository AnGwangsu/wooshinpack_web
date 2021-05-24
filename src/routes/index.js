import Vue from 'vue'
import Router from 'vue-router'
import mobile from './mobile/index'

Vue.use(Router)

export default new Router({
    scrollBehavior(){
        return {x:0,y:0}
    },
    mode:'history',
    routes:[
        ...mobile
    ]
})