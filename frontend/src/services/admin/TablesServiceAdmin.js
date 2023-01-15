import Api from '@/services/Api'
import secret from '../../secret.json'


export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addTable(data) {
        return Api(`${secret.url_admin_ip}`).post("api/tables", data)
    },

    getTable() {
        return Api(`${secret.url_admin_ip}`).get("api/tables")
    },

    getTableReserved(data) {
        return Api(`${secret.url_admin_ip}`).get("api/tables_filter/"+ data)
    },

    putTable(id, data) {
        return Api(`${secret.url_admin_ip}`).put("api/tables/" + id, data)
    },

    deleteTable(id) {
        return Api(`${secret.url_admin_ip}`).delete("api/tables/" + id)
    }
}