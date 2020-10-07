import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import axios from "axios";

Vue.config.productionTip = false;

const http = axios.create({
    baseURL: "http://localhost:3000",
});
Vue.prototype.$http = http;

// interceptor

http.interceptors.request.use(config => {
    config.headers["Authorization"] = localStorage.getItem("jwtToken");
    return config;
});


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')