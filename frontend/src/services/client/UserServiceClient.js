import Api from '@/services/api'
import secret from '../../secret.json'

export default {

    login_client(data) {
        return Api(`${secret.url_client}`).post('login', data);
    },

    register_client(data) {
        return Api(`${secret.url_client}`).post('register', data);
    },

    logout_client() {
        return Api(`${secret.url_client}`).post('logout');
    },

    login_admin(data) {
        return Api(`${secret.url_admin}`).post('login', data);
    },

    logout_admin() {
        return Api(`${secret.url_admin}`).post('logout');
    },

    profile() {
        return Api(`${secret.url_client}`).get('profile');
    },

    checkAdmin() {
        return Api(`${secret.url_admin}`).get('isAdmin');
    },

}