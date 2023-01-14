import Api from '@/services/api'
import secret from '../../secret.json'

export default {

    login_client(data) {
        return Api(`${secret.url_client_ip}`).post('login', data);
    },

    register_client(data) {
        return Api(`${secret.url_client_ip}`).post('register', data);
    },

    logout_client() {
        return Api(`${secret.url_client_ip}`).post('logout');
    },

    login_admin(data) {
        return Api(`${secret.url_admin_ip}`).post('login', data);
    },

    logout_admin() {
        return Api(`${secret.url_admin_ip}`).post('logout');
    },

    profile() {
        return Api(`${secret.url_client_ip}`).get('profile');
    },

    checkAdmin() {
        return Api(`${secret.url_admin_ip}`).get('isAdmin');
    },

}