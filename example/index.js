import Vue from 'vue'
import App from './App.vue'
import Distpicker from '../src'

Vue.use(Distpicker)

new Vue({
  el: '#app',
  render: h => h(App)
})
