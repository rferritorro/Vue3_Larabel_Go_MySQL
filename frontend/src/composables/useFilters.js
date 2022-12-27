import {ref} from 'vue';
import ReservationServiceAdmin from '../services/admin/ReservationServiceAdmin';

export const useFilters = (id) => {
    const orderID = ref([]);
    ReservationServiceAdmin.getReserved(id)
    .then(function (result) {
         console.log(result);
        //tables.value = res.data;
    })
    .catch(function (error) {
        console.log(error)
    })      

    return orderID;
};