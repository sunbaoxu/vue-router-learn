import Vue from 'vue'
import routes from './router'


var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      currentRoute: window.location.pathname
    },
    computed: {
      ViewComponent () {
        const matchingView = routes[this.currentRoute];

        return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')

        // return routes[this.currentRoute] || NotFound
      }
    },
    render (h) { return h(this.ViewComponent) }
  })