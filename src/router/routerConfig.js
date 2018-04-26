
const routers = new Map([
  ['test', () => import ('@/pages/test/index')],
  ['table', () => import ('@/pages/test/table')],
  ['list', () => import ('@/pages/test/list')]
]);


export default routers