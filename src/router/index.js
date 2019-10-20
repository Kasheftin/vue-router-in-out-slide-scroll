import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List'
import Item from '../views/Item'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: List
  },
  {
    path: '/items/:id',
    name: 'item',
    component: Item
  }
]

const router = new VueRouter({
  routes
})

export default router
