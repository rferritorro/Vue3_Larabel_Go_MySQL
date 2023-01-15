import Api from '@/services/Api'
import secret from '../../secret.json'

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addMenu(data) {
        return Api(`${secret.url_admin_ip}`).post("api/menus", data)
    },

    getMenu() {
        return Api(`${secret.url_admin_ip}`).get("api/menus")
    },

    getMenuSearch(data) {
        return Api(`${secret.url_admin_ip}`).get("api/menus_search/"+ data)
    },

    putMenu(id, data) {
        return Api(`${secret.url_admin_ip}`).put("api/menus/" + id, data)
    },

    deleteMenu(id) {
        return Api(`${secret.url_admin_ip}`).delete("api/menus/" + id)
    }
}