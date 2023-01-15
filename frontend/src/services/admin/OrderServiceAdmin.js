import Api from '@/services/Api'
import secret from '../../secret.json'

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel

    getOrder() {
        return Api(`${secret.url_admin}`).get("api/order_reserved")
    },

    putOrder(id, data) {
        return Api(`${secret.url_admin}`).put("api/order_reserved/" + id, data)
    },
}