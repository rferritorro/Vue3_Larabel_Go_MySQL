import Api from '@/services/Api'

export default {
    //check the correct CONNECTION TO CORS Vue--Laravel
    getAll() {
        return Api("http://localhost:8000").get("api/clients")
    }
}