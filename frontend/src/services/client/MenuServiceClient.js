import Api from '@/services/Api'
import secret from '../../secret.json'


export default {
    getMenu() {
        return Api(`${secret.url_client}`).get("menu-api/menu")
    }
}