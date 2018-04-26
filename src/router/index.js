import Vue from 'vue'
import Router from 'vue-router'
import routers from './routerConfig'
const HelloWorld = () => import ('@/components/HelloWorld');
const test = () => import ('@/pages/test/index');
const table = () => import ('@/pages/test/table');
const list = () => import ('@/pages/test/list');
const main = () => import ('@/components/layout/main');
Vue.use(Router);

const routArr =[];

routers.forEach(function(value, key) {
  routArr.push({
    path: key,
    name: key,
    component: value
  })
});

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
      children : routArr
    }
    
  ]
})
