// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.config.productionTip = false

//Custom Directives
Vue.directive('color', {
  bind(el, binding, vnode){
    el.style.color = '#'+ Math.random().toString(16).slice(2,8);
  }
});
Vue.directive('theme', { // try this: https://stackoverflow.com/questions/32154967/custom-directive-and-directive-parameters
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1260px";
    }else if(binding.value = 'narrow'){
      el.style.maxWidth = "560px";
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px'
    }
  }
})

//Custom Filters / pipes
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})
Vue.filter('snippet', function(value){
  return value.slice(0,100);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
