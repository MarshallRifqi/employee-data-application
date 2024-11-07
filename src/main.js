// import './assets/central.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios';
// import store from './store';
// import Vue from 'vue';

axios.defaults.baseURL = 'http://localhost:2000/';

const app = createApp(App);

// Vue.config.productionTip = false;

// const token = localStorage.getItem('accessToken');
// // if (token) {
// //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// // }

app.use(router)
// app.use(store)
app.use(VueAxios, axios);

app.mount('#app')

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');