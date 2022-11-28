// import Api from '@/services/Api'
// const URL = "http://localhost:8000";

// export default {
//     //check the correct CONNECTION TO CORS Vue--Laravel
//     getAll() {
//         return Api(URL).get("api/users")
//     }
// }

import Api from '@/services/Api'
const URL = "http://localhost:3000";

export default {
    //check the correct CONNECTION TO CORS Vue--Go
    getAll() {
        return Api(URL).get("user-api/user")
    }
}