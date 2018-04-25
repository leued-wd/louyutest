import Vue from 'vue'
import Router from 'vue-router'
const main = () => import ('@/tpl/main');
const HelloWorld = () => import ('@/components/HelloWorld');
const test = () => import ('@/pages/test/index');
const table = () => import ('@/pages/test/table');
const list = () => import ('@/pages/test/list');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children : [
        {
          path: 'test',
          name: 'test',
          component: test
        },
        {
          path: 'table',
          name: 'table',
          component: table
        },
        {
          path: 'list',
          name: 'list',
          component: list
        }
      ]
    }
    
  ]
})
