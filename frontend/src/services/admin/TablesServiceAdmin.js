import Api from '@/services/Api'
import secret from '../../secret.json'


export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addTable(data) {
        return Api(`${secret.url_admin}`).post("api/tables", data)
    },

    getTable() {
        return Api(`${secret.url_admin}`).get("api/tables")
    },

    putTable(id, data) {
        return Api(`${secret.url_admin}`).put("api/tables/" + id, data)
    },

    deleteTable(id) {
        return Api(`${secret.url_admin}`).delete("api/tables/" + id)
    }
}