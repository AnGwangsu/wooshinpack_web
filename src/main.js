import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/vendors/scrolloverflow'
import 'fullpage.js/dist/fullpage.css'
import router from './routes/index'

Vue.config.productionTip = false
Vue.use(VueFullPage)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
