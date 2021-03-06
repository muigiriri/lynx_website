import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from './views/Dashboard.vue'
// import Projects from './views/Projects.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    // {
    //   path: '/projects',
    //   name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: Projects
    // () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: Dashboard
    // }
  ]
})
