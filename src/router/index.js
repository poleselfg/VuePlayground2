import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Accounts from "../views/Accounts";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
    if (localStorage.getItem('user-token') !== null) {
        next();
        return
    }
    next('/')
};

const ifAuthenticated = (to, from, next) => {
    if (localStorage.getItem('user-token') === null) {
        next();
        return
    }
    next('/accounts')
};

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
        beforeEnter: ifAuthenticated,
    },
  {
    path: '/accounts',
    name: 'accounts',
    component: Accounts,
    beforeEnter: ifNotAuthenticated,
  },
];

const router = new VueRouter({
    routes
});

export default router
