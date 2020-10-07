import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);
Vue.config.productionTip = false
Vue.prototype.$axios=Axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
