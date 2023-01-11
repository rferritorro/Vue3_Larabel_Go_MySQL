import Api from '@/services/Api'
import secret from '../../secret.json'

export default {
    //check the correct CONNECTION TO CORS Vue--Go
    addReserved() {
        return Api(`${secret.url_client}`).get("reserved-api/reserved")
    },
    getReserved(id) {
        return Api(`${secret.url_client}`).get("reserved-api/reserved/" + id)
    },
    getReservation() {
        return Api(`${secret.url_client}`).get("reserved-api/reserved")
    }
}