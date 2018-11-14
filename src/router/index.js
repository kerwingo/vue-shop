import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/login.vue'
import Main from '@/Main.vue'
import Explorer from '@/Explorer.vue'
import Home from '@/Home.vue'
import Cart from '@/Cart.vue'
import Me from '@/Me.vue'
import BookDetail from '@/BookDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      path:'/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        { path: 'home', name: 'Home', component: Home },
        { path: 'explorer', name: 'Explorer', component: Explorer },
        { path: 'cart', name: 'Cart', component: Cart },
        { path: 'me', name: 'Me', component: Me }
      ]
    },
    { path: '/books/:id', name: 'BookDetail', component: BookDetail }

  ]
})
