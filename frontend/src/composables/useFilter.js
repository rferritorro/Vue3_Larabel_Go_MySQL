import ReservationServiceAdmin from '../services/admin/ReservationServiceAdmin';

export const useFilters = (filters = {}) => {
    ReservationServiceAdmin.getReserved(filters)
    .then(function (result) {
         console.log(result);
        //tables.value = res.data;
    })
    .catch(function (error) {
        console.log(error)
    })      

    //return reserved;
};