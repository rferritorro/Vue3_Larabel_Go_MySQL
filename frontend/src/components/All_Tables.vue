<template>
    <div class="div_table">
        <span class="tables_span">{{ alltables.place }}</span>
        <!-- <img src="../assets/img/table_terrace.jpg"> -->
        <img :src="'/img/'+ alltables.img" class="img_tables"/>
    </div>
    <!-- <span class="badge badge-secondary pointer ml-1" @click.stop="updateReservation(allreservation.id)">EDIT</span>
    <span class="badge badge-secondary pointer ml-1" @click.stop="deleteReservation(allreservation.id)">DELETE</span> -->
</template>

<script>
import Constant from '../Constant';
import { useStore } from 'vuex'
//import { useRouter } from 'vue-router';

export default {
    props: {
        alltables: Object
    },
    setup() {
        const store = useStore();
        //const router = useRouter();
        const getTables = (id) => {
            store.dispatch("reservation/" + Constant.GET_RESERVATION, { id });
        }
        // const checked = (done) => {
        //     return { "list-group-item":true, "list-group-item-success":done };
        // }
        // const updateReservation = (id) => {
        //     //store.dispatch("reservation/" + Constant.UPDATE_RESERVATION, { allReservations: { ...props.allreservation } });
        //     router.push({ name: 'UpdateReservation', params: { id } })
        // }
        // const deleteReservation = (id) => {
        //     store.dispatch("reservation/" + Constant.DELETE_RESERVATION, { id });
        // }

        return { getTables, /*deleteReservation, updateReservation, checked*/ }
    }
}
</script>

<style>
    .tables_infor {
        display: flex;
        justify-content: center;
        flex-flow: row nowrap;
        align-items: stretch;
        width: 100%;
    }
    .alltables {
        border: 2px solid black;
        width: 100%;
        padding: 0.5%;
        margin: 0.5%;
    }
    .img_tables {
        width: 10%;
    }
    .tables_span {
        color: aliceblue;
    }

</style>