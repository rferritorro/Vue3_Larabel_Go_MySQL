<template>
    <tbody >
        <td>{{ allreservation.username }}</td>
        <td>{{ allreservation.Table_id }}</td>
        <td>{{ allreservation.nombre }}</td>
        <td>{{ allreservation.date }}</td>
        <td>{{ allreservation.hour }}</td>
        <td>{{ allreservation.n_comensales }}</td>
        <td>
            <input type="checkbox" v-if="allreservation.reserved === 1" v-model="checker" checked disabled/>
            <input @click="confirm(allreservation.id)" type="checkbox" v-if="allreservation.reserved === 0" />
        </td>
            
        <td>
            <span class="badge badge-secondary pointer ml-1" @click.stop="updateReservation(allreservation.id)">EDIT</span>
            <span class="badge badge-secondary pointer ml-1" @click.stop="deleteReservation(allreservation.id)">CANCEL</span>
        </td>
    </tbody>
</template>

<script>
import Constant from '../../Constant';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
    position: "top-right"
});

export default {
    props: {
        allreservation: Object
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        function confirm(id) {
            console.log(id)
            const reservation_confirm = ({
                "reserved": "1"
            })
            store.dispatch("reservation/" + Constant.CHECK_RESERVATION, { id, reservation_confirm });
            toaster.success(`Reserved Confirmed`);
            router.push({ name: 'dashboard'})
        }
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
            toaster.success(`Reserved Canceled`);
            router.push({ name: 'dashboard'})
        }

        return { getReservation, deleteReservation, updateReservation, checked, confirm }
    }
}
</script>

<style>
table, th, td {
    border: 1px solid black;
    text-align: center;
}

</style>