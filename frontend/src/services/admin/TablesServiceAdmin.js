import Api from '@/services/Api'
//const URL = "http://localhost:8000";
const URL = "http://192.168.1.26:8000"

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addTable(data) {
        return Api(URL).post("api/tables/", data)
    },

    getTable() {
        return Api(URL).get("api/tables")
    },

    putTable(id) {
        return Api(URL).put("api/tables/" + id)
    },

    deleteTable(id) {
        return Api(URL).delete("api/tables/" + id)
    }
}