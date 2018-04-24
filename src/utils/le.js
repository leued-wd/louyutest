import {baseData  as  $c  } from './le/basedata.js'
import {showLoading , closeLoading } from './le/loading.js'

const le = {}

le.install =function(Vue) {
  Vue.prototype.$c = $c;
  Vue.$c = $c;
  Vue.prototype.$showLoading = showLoading;
  Vue.prototype.$closeLoading = closeLoading;
}

export default le;

