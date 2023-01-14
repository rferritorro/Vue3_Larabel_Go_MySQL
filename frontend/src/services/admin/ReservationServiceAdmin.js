import Api from '@/services/Api'
import secret from '../../secret.json'

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addReserved(data) {
        return Api(`${secret.url_admin_ip}`).post("api/reserved/", data)
    },
    
    getReserved(id) {
        return Api(`${secret.url_admin_ip}`).get("api/reserved/" + id)
    },

    putReserved(id, data) {
        return Api(`${secret.url_admin_ip}`).put("api/reserved/" + id, data)
    },

    deleteReserved(id) {
        return Api(`${secret.url_admin_ip}`).delete("api/reserved/" + id)
    }
}