<template>

    <div class="div_table" v-for="table in alltables" :key="table.id">
        <span class="tables_span">{{ table.place }}</span>
        <!-- <img src="../assets/img/table_second-floor.jpg"> -->
        <!-- <img :src="'/img/'+ alltables.img" class="img_tables"/> -->
        <img src="https://thumbs.dreamstime.com/b/el-demersus-africano-del-spheniscus-ping%C3%BCino-de-la-colonia-en-los-cantos-rodados-vara-cerca-cape-town-sur%C3%A1frica-que-se-vue-139731054.jpg" alt="">
    </div>
    <!-- <span class="badge badge-secondary pointer ml-1" @click.stop="updateReservation(allreservation.id)">EDIT</span>
    <span class="badge badge-secondary pointer ml-1" @click.stop="deleteReservation(allreservation.id)">DELETE</span> -->
</template>

<script>
//import Constant from '../Constant';
//import { useStore } from 'vuex'
//import { useRouter } from 'vue-router';

export default {
    props: {
        alltables: Object
    },
    setup() {
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
    .img_tables {
        width: 10%;
    }
    .tables_span {
        color: aliceblue;
    }

</style>