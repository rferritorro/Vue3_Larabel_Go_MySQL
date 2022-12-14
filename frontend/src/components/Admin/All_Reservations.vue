<template>
    <tbody>
        <td>{{ allreservation.username }}</td>
        <td>{{ allreservation.Table_id }}</td>
        <td>{{ allreservation.nombre }}</td>
        <td>{{ allreservation.date }}</td>
        <td>{{ allreservation.hour }}</td>
        <td>{{ allreservation.n_comensales }}</td>
        <td>
            <span class="badge badge-secondary pointer ml-1" @click.stop="updateReservation(allreservation.id)">EDIT</span>
            <span class="badge badge-secondary pointer ml-1" @click.stop="deleteReservation(allreservation.id)">DELETE</span>
        </td>
    </tbody>
</template>

<script>
import Constant from '../../Constant';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    props: {
        allreservation: Object
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        const checked = (done) => {
            return { "list-group-item":true, "list-group-item-success":done };
        }
        const getReservation = (id) => {
            store.dispatch("reservation/" + Constant.GET_RESERVATION, { id });
        }
        const updateReservation = (id) => {
            //store.dispatch("reservation/" + Constant.UPDATE_RESERVATION, { allReservations: { ...props.allreservation } });
            router.push({ name: 'UpdateReservation', params: { id } })
        }
        const deleteReservation = (id) => {
            store.dispatch("reservation/" + Constant.DELETE_RESERVATION, { id });
        }

        return { getReservation, deleteReservation, updateReservation, checked }
    }
}
</script>

<style>
table, th, td {
    border: 1px solid black;
    text-align: center;
}

</style>