import Vue from 'vue'
import App from './App.vue'

window.store = { users: [] }

new Vue({
  el: '#app',
  render: h => h(App)
})
