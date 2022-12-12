import Api from '@/services/Api'
const URL = "http://localhost:8000";
//const URL = "http://192.168.1.26:8000"

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addReserved(data) {
        return Api(URL).post("api/reserved/", data)
    },

    getReserved() {
        return Api(URL).get("api/reserved")
    },

    putReserved(id) {
        return Api(URL).put("api/reserved/" + id)
    },

    deleteReserved(id) {
        return Api(URL).delete("api/reserved/" + id)
    }
}