import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

import login from '../views/login/login'

Vue.use(VueRouter)
const router=new VueRouter({
    routes:[
        {
            path:'/login',
            component:login
        }
    ]
})
export default router