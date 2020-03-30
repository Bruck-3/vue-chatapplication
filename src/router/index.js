import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../components/WelcomePage.vue'
import Chat from '../components/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      if(to.params.name){
        next()
      }else{
        next({name: 'WelcomePage'})
      }
    }
  }
  //{
  //   path: '/about',
  //   name: 'About',
  //   //  route level code-splitting
  //  // this generates a separate chunk (about.[hash].js) for this route
  // // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
