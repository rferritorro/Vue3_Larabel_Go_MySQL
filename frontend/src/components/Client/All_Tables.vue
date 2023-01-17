<template>
    <div class="div_table" v-for="table in alltables" :key="table.id">
        <!-- <img src="../assets/img/table_second-floor.jpg"> -->
        <!-- <img :src="'/img/'+ alltables.img" class="img_tables"/> -->
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text">Mesa {{ table.Id }}</p>
                <img class="card-img-top"
                    :src="table.img"
                    alt="">
                <button class="btn btn-dark mt-2" @click="detail(table)" >Add Reserved</button>
            </div>
        </div>
    </div>
    <Details :table="state"></Details>
</template>

<script>
//import Constant from '../Constant';
import { ref} from 'vue'
//import { useStore } from 'vuex'
// import { useRouter } from 'vue-router';
import Details from './Details.vue'

export default {
    props: {
        alltables: Object,
    },
    components: { Details},
    setup() {
        const state = ref({}) 
        function detail(table) {
            state.value = table
        }
        return {detail , state}
        //const store = useStore();
        //const router = useRouter();
        // const getTables = (id) => {
        //     store.dispatch("reservation/" + Constant.GET_RESERVATION, { id });
        // }
        // return { getTables, /*deleteReservation, updateReservation, checked*/ }

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

.tables_span {
    color: aliceblue;
}

.div_table {
    height: min-content;
    text-align: center;
    border: 2px solid white;
}

.div_table span {
    font-size: 15px;
    color: white;
}
</style>