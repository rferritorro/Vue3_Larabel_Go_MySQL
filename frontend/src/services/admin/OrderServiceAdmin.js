import Api from '@/services/Api'
const URL = "http://localhost:8000";
//const URL = "http://192.168.1.26:8000"

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel

    getOrder() {
        return Api(URL).get("api/order_reserved")
    },

    putOrder(id, data) {
        return Api(URL).put("api/order_reserved/" + id, data)
    },
}