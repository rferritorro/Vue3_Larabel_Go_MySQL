import Constant from '../../../Constant';
import router from '../../../router/index.js';
import UserService from "@/services/client/UserServiceClient";


export const user = {
    namespaced: true,
    state: {
        user: [],
        isAuth: false,
        isAdmin: false
    },
    mutations: {
        [Constant.REGISTER_CLIENT]: (state, payload) => {
            if (payload) {
                //toaster.success('Registered successfuly. Login for now.');
                router.push({ name: 'login' });
            }
        },
        [Constant.LOGIN_CLIENT]: (state, payload) => {
            if (payload) {
                console.log(state)
                state.user = payload;
                state.isAuth = true;
                localStorage.setItem("token", payload);
                localStorage.setItem("isAuth", true);
                //toaster.success('Loged successfuly');
                router.push({ name: 'home' });
            }
        },
        [Constant.LOGOUT]: (state) => {
            state.user = {};
            state.isAuth = false;
            state.isAdmin = false;
            localStorage.removeItem('token');
            localStorage.removeItem('isAuth');
            localStorage.removeItem('tokenAdmin');
            localStorage.removeItem('isAdmin');
           // toaster.success('Loged out successfuly');
            router.push({ name: 'home' });
        },
        [Constant.LOGIN_ADMIN]: (state, payload) => {
            if (payload) {
                localStorage.setItem("tokenAdmin", payload.token);
                localStorage.setItem("isAdmin", true);
                state.user = payload.user;
                state.isAdmin = true;
                //toaster.success('Admin loged successfuly');
                router.push({ name: 'home' });
            }
        },
        [Constant.PROFILE]: (state, payload) => {
            if (payload) {
                state.user = payload;
                state.isAuth = true;
                state.isAdmin = payload.type === 'admin';
                localStorage.setItem("isAuth", true);
                localStorage.setItem("isAdmin", payload.type === 'admin');
            }
        },
    },
    actions: {
        [Constant.REGISTER_CLIENT]: (store, payload) => {
            console.log(store)
            console.log(payload)
            UserService.register_client(payload)
            .then(function (res) {
                console.log(res)
                // if (res.status === 200) {
                //     store.commit(Constant.REGISTER_CLIENT, true);
                // }
            })
            .catch(function () {
                //toaster.error('The username or email already exists');
            })
        },
        [Constant.LOGIN_CLIENT]: (store, payload) => {
            console.log(store)
            UserService.login_client(payload)
            .then(function (res) {
                console.log(res)
                if (res.status === 200) {
                    store.commit(Constant.LOGIN_CLIENT, res.data);
                    // if (res.data.user.type == "1") {
                    //     UserService.login_admin(payload)
                    //     .then(function (response) {
                    //         if (response.status === 200) {
                    //             store.commit(Constant.LOGIN_ADMIN, response.data);
                    //         }
                    //     })
                    //     .catch(function () {
                    //         toaster.error('Admin login error.');
                    //     })
                    // }
                }
            })
            .catch(function (error) {
                console.log(error)
            })
        },
        [Constant.LOGOUT]: (store) => {
            try {
                UserService.logout_client();
                store.commit(Constant.LOGOUT);
            } catch (error) {
                console.log(error);
            }
        },
        [Constant.PROFILE]: (store) => {
            try {
                UserService.profile()
                .then(function (res) {
                    if (res.status === 200) {
                        store.commit(Constant.PROFILE, res.data);
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
            } catch (error) {
                console.error(error);
            }
        },
    },
    getters: {
        GetUser: (state) => {
            return state.user;
        },
        GetIsLogin: (state) => {
            return state.isAuth;
        },
        GetIsAdmin: (state) => {
            return state.isAdmin;
        },
    }
}