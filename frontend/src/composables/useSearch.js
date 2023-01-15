import MenuServiceAdmin from '../services/admin/MenuServiceAdmin';
import { ref } from 'vue';

export const useSearch = (data) => {
    const search = ref([]);
    MenuServiceAdmin.getMenuSearch(data)
    .then(function (result) {
        search.value = result.data[0];
    })
    .catch(function (error) {
        console.log(error)
    })      
    return search;
};