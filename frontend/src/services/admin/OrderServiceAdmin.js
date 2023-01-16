import Api from '@/services/Api'
import secret from '../../secret.json'

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel

    getOrder() {
        return Api(`${secret.url_admin_ip}`).get("api/order_reserved")
    },

    putOrder(id, data) {
        return Api(`${secret.url_admin_ip}`).put("api/order_reserved/" + id, data)
    },
}