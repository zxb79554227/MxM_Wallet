import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "tailwindcss/tailwind.css"
import './style.css'
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';


Vue.use(VuePlyr)
Vue.config.productionTip = false
window.location.origin.includes('33cn')? localStorage.setItem('env','33cn'):localStorage.setItem('env','others')


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
