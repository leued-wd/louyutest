import {baseData  as  $c  } from './le/basedata.js'

const le = {}

le.install =function(Vue) {
  Vue.prototype.$c = $c;
  Vue.$c = $c;
}

export default le;

