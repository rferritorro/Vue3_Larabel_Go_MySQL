import Api from '@/services/Api'
import secret from '../../secret.json'

export default {
    //check the correct CONNECTION TO CORS Vue--Go
    getTable() {
        return Api(`${secret.url_client}`).get("table-api/table")
    }
}
