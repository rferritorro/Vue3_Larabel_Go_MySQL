import Api from '@/services/Api'
const URL = "http://localhost:3000";

export default {
    //check the correct CONNECTION TO CORS Vue--Go
    addReserved() {
        return Api(URL).get("reserved-api/reserved")
    }
}