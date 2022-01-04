import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'
import input from "element-ui/packages/input";
import button from "element-ui/packages/button";
Vue.config.productionTip = false
Vue.use(input)
Vue.use(button)
new Vue({
  render: h => h(App),
}).$mount('#app')
