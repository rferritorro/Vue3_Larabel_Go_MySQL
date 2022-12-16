import Api from '@/services/Api'
//const URL = "http://localhost:3000";
const URL = "http://192.168.1.26:3000"

export default {
    getMenu() {
        return Api(URL).get("menu-api/menu")
    }
}