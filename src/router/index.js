import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/Main'
import Explorer from '@/Explorer'
import Home from '@/Home'
import Cart from '@/Cart'
import Me from '@/Me'
import BookDetail from '@/BookDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {path: 'home', name: 'Home', component: Home},
        {path: 'explorer', name: 'Explorer', component: Explorer},
        {path: 'cart',name: 'Cart', component: Cart},
        {path: 'me', name: 'Me', component: Me}
      ]
    },
    {path: '/books/:id', name: 'BookDetail', component: BookDetail}

  ]
})
