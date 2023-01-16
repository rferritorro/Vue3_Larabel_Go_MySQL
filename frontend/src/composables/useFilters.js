import {ref} from 'vue';
import ReservationServiceAdmin from '../services/admin/ReservationServiceAdmin';
import TablesServiceAdmin from '../services/admin/TablesServiceAdmin';

export const useFiltersRe = (id) => {
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

export const useFilter = (id) => {
    const filter = ref([]);
    TablesServiceAdmin.getTableReserved(id)
    .then(function (result) {
        console.log(result);
        filter.value = result.data;
    })
    .catch(function (error) {
        console.log(error)
    })      

    return filter;
};