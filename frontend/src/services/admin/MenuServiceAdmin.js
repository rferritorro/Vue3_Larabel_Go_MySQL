import Api from '@/services/Api'
import secret from '../../secret.json'

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addMenu(data) {
        return Api(`${secret.url_admin}`).post("api/menus", data)
    },

    getMenu() {
        return Api(`${secret.url_admin}`).get("api/menus")
    },

    putMenu(id, data) {
        return Api(`${secret.url_admin}`).put("api/menus/" + id, data)
    },

    deleteMenu(id) {
        return Api(`${secret.url_admin}`).delete("api/menus/" + id)
    }
}