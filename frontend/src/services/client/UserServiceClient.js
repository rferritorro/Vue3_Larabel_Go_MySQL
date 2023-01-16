import Api from '@/services/Api'
import secret from '../../secret.json'

export default {

    login_client(data) {
        return Api(`${secret.url_client}`).post('user-api/users_login', data);
    },

    register_client(data) {
        return Api(`${secret.url_client}`).post('user-api/user', data);
    },

    logout_client() {
        return Api(`${secret.url_client}`).post('user-api/logout');
    },

    login_admin(data) {
        return Api(`${secret.url_admin}`).post('api/login', data);
    },

    logout_admin() {
        return Api(`${secret.url_admin}`).post('api/logout');
    },

    profile() {
        return Api(`${secret.url_client}`).get('user-api/profile');
    },

    checkAdmin() {
        return Api(`${secret.url_admin}`).get('api/isAdmin');
    },

}