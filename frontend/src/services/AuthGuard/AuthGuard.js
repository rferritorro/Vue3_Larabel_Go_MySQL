import store from "@/store";


export default {

    AuthGuard(to, from, next) {
        if (localStorage.getItem('isAuth')) {
            next();
        } else {
            next('/home');
        }
    },

    authGuardAdmin(to, from, next) {
        if (localStorage.getItem('isAdmin')) {
            next();
        } else {
            next('/login');
        }
    },

    noAuth(to, from, next) {
        if (!store.getters['user/GetIsAuth'] && !localStorage.getItem('isAuth')) {
            next();
        } else {
            next('/home');
        }
    },

};