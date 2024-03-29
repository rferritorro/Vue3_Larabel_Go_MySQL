import Constant from '../../../Constant';
import router from '../../../router/index.js';
import UserService from "@/services/client/UserServiceClient";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
    position: "top-right"
});


export const user = {
    namespaced: true,
    state: {
        user: [],
        isAuth: false,
        isAdmin: false,
        isAuthStorage: localStorage.getItem("isAuth"),
        isAdminStorage: localStorage.getItem("isAdmin")
    },
    mutations: {
        [Constant.REGISTER_CLIENT]: (state, payload) => {
            if (payload) {
                console.log(state)
                console.log(payload)
                state.isAuth = true;
                localStorage.setItem("token", payload);
                localStorage.setItem("isAuth", true);
                toaster.success(`Welcome! Registered Succesfully`);
                router.push({ name: 'home' });
            }
        },
        [Constant.LOGIN_CLIENT]: (state, payload) => {
            if (payload) {
                console.log(state)
                state.user = payload;
                state.isAuth = true;
                localStorage.setItem("token", payload);
                localStorage.setItem("isAuth", true);
                
                toaster.success(`Welcome! Loged Succesfully`);
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
            toaster.success(`Good Bye! Logout Succesfully`);
            router.push({ name: 'home' });
        },
        [Constant.LOGIN_ADMIN]: (state, payload) => {
            if (payload) {
                localStorage.setItem("tokenAdmin", payload);
                localStorage.setItem("isAdmin", true);
                state.user = payload.user;
                state.isAdmin = true;
                state.isAuth = true;
                //toaster.success('Admin loged successfuly');
                router.push({ name: 'home' });
            }
        },
        [Constant.PROFILE]: (state, payload) => {
            state.check = payload
        },
        [Constant.USER_DATA]: (state, payload) => {
            state.user = payload;
        },
        [Constant.USER_DATA_RESERVATION]: (state, payload) => {
            state.userReservation = payload;
        },
    },
    actions: {
        [Constant.REGISTER_CLIENT]: (store, payload) => {
            console.log(store)
            UserService.register_client(payload)
            .then(function (res) {
                console.log(res)
                store.commit(Constant.REGISTER_CLIENT, res.data);
            })
            .catch(function (error) {
                toaster.error('The username or password are incorrect');
                console.log(error)
            })
        },
        [Constant.LOGIN_CLIENT]: (store, payload) => {
            console.log(store)
            UserService.login_client(payload)
            .then(function (res) {
                console.log(res)
                if (res.status === 200) {
                    store.commit(Constant.LOGIN_CLIENT, res.data);
                    UserService.login_admin(payload)
                    .then(function (response) {
                        console.log(response.data)
                        if (response.data.user.type_ === 1) {
                            store.commit(Constant.LOGIN_ADMIN, response.data);
                        }else {
                            console.log("NOT ADMIN")
                        }
                    })
                    .catch(function () {
                        
                    }) 
                }
            })
            .catch(function (error) {
                toaster.error('The username or password are incorrect');
                console.log(error)
            })
        },
        [Constant.LOGOUT]: (store) => {
            try {
                //UserService.logout_client();
                store.commit(Constant.LOGOUT);
            } catch (error) {
                console.log(error);
            }
        },
        [Constant.USER_DATA]: (store,payload) => {
            console.log(store)
            console.log(payload)
            try {
                UserService.getUserProfile(payload.id)
                .then(function (res) {
                   console.log(res)
                   store.commit(Constant.USER_DATA, res.data);
                })
                .catch(function (error) {
                    console.log(error)
                })
            } catch (error) {
                console.error(error);
            }
        },
        [Constant.USER_DATA_RESERVATION]: (store,payload) => {
            console.log(store)
            console.log(payload)
            try {
                UserService.getUserReservation(payload.id)
                .then(function (res) {
                   console.log(res)
                   store.commit(Constant.USER_DATA_RESERVATION, res.data);
                })
                .catch(function (error) {
                    console.log(error)
                })
            } catch (error) {
                console.error(error);
            }
        },
        [Constant.PROFILE]: (store,payload) => {
            try {
                UserService.profile(payload)
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
            return state;
        },
        GetIsLogin: (state) => {
            return state.isAuth;
        },
        GetIsLoginStorage: (state) => {
            if (!state.isAuthStorage) {
                return state.isAuth;
            }
            else {
                return state.isAuthStorage;
            }
        },
        GetState: (state) => {
            return state.check
        },
        GetIsAdmin: (state) => {
            return state.isAdmin;
        },
        GetIsAdminStorage: (state) => {
            if (!state.isAdminStorage) {
                return state.isAdmin;
            }else {
                return state.isAdminStorage;
            }
        },
        GetUserReservations: (state) => {
            return state.userReservation
        }
    }
}