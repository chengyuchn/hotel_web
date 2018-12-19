import Vue from 'vue';
import App from './app.vue';
import router from './router';  //引入路由 vue-route
import axios from './config/ajax';  //引入axios
import ElementUI from 'element-ui';   //引入element-ui

import './assets/css/index.less';

Vue.use(ElementUI);

Vue.prototype.$ajax = axios;  //原型挂载axios

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
