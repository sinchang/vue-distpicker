import Distpicker from './Distpicker.vue'

Distpicker.install = Vue => {
  Vue.component('distpicker', Distpicker)
}

if (typeof window !== 'undefined' && window.vue) {
  window.Distpicker = Distpicker
}

export default Distpicker
