import Api from '@/services/Api'
import secret from '../../secret.json'

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addReserved(data) {
        return Api(`${secret.url_admin}`).post("api/reserved/", data)
    },
    
    getReserved(id) {
        return Api(`${secret.url_admin}`).get("api/reserved/" + id)
    },

    checkReserved(id, data) {
        return Api(`${secret.url_admin}`).put("api/check_reserved/" + id, data)
    },

    putReserved(id, data) {
        return Api(`${secret.url_admin}`).put("api/reserved/" + id, data)
    },

    deleteReserved(id) {
        return Api(`${secret.url_admin}`).delete("api/reserved/" + id)
    }
}