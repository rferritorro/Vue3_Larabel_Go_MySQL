import Api from '@/services/Api'
import secret from '../../secret.json'

export default {
    //check the correct CONNECTION TO CORS Vue--Go
    addReserved(data) {
        return Api(`${secret.url_client_ip}`).post("reserved-api/reserved", data)
    },
    getReserved(id) {
        return Api(`${secret.url_client_ip}`).get("reserved-api/reserved/" + id)
    },
    getReservation() {
        return Api(`${secret.url_client_ip}`).get("reserved-api/reserved")
    }
}