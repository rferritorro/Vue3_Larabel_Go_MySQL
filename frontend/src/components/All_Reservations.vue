<template>
    <li>
        <span >
            {{allReservations.todo}}
            {{allReservations.done ? "": ""}}
        </span>
        <div class="float-right">
            <span class="badge badge-secondary pointer ml-1" @click.stop="editTodo(allReservations.id)">EDIT</span> 
            <span class="badge badge-secondary pointer ml-1" @click.stop="deleteTodo(allReservations.id)">DELETE</span>
        </div>
    </li>
</template>

<script>
import Constant from '../Constant';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    props: {
        allReservations: Object
    },
    setup(props) {
        
        const store = useStore();
        const router = useRouter();

        const checked = (done) => {
            return { "list-group-item":true, "list-group-item-success":done };
        }
        const getReservation = (id) => {
            store.dispatch("reservation/" + Constant.GET_RESERVATION, { id });
        }
        const deleteReservation = (id) => {
            store.dispatch("reservation/" + Constant.DELETE_RESERVATION, { id });
        }
        const editall = (id) => {
            store.dispatch("reservation/" + Constant.INITIALIZE_ALLRESERVATIONS, { allReservations: { ...props.allReservations } });
            router.push({ name: 'updateTodo', params: { id } })
        }

        return { getReservation, deleteReservation, editall, checked }
    }
}
</script>

<style>

</style>