import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'
import { Button, Form, FormItem, Input } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

new Vue({
  render: h => h(App)
}).$mount('#app')
