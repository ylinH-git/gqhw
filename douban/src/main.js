import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$axios=Axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
