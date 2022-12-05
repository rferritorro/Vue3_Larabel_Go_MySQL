import Api from '@/services/Api'
const URL = "http://localhost:8000";
//const URL = "http://192.168.1.26:8000"

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addReserved() {
        return Api(URL).get("api/reserved")
    },

    getReserved() {
        return Api(URL).get("api/reserved")
    },

    putReserved() {
        return Api(URL).get("api/reserved")
    },

    deleteReserved() {
        return Api(URL).get("api/reserved")
    }
}