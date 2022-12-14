import Api from '@/services/Api'
const URL = "http://localhost:3000";
//const URL = "http://192.168.1.26:3000"

export default {
    //check the correct CONNECTION TO CORS Vue--Go
    getTable() {
        return Api(URL).get("tables-api/tables")
    }
}