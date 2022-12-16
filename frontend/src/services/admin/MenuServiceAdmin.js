import Api from '@/services/Api'
//const URL = "http://localhost:8000";
const URL = "http://192.168.1.26:8000"

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    addMenu(data) {
        return Api(URL).post("api/menus", data)
    },

    getMenu() {
        return Api(URL).get("api/menus")
    },

    putMenu(id, data) {
        return Api(URL).put("api/menus/" + id, data)
    },

    deleteMenu(id) {
        return Api(URL).delete("api/menus/" + id)
    }
}