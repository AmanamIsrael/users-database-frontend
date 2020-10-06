import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import bootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(VueRouter);
Vue.use(bootstrapVue)

const router = new VueRouter({
    routes,
    linkActiveClass: "active",
    mode: "history"
})

export default router;