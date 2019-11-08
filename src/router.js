import Vue from 'vue'
import Router from 'vue-router'
// import VueDemo from '@/components/VueDemo'
import Messages from '@/components/Messages'
import Home from "@/views/Home"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    }
  ]
})
