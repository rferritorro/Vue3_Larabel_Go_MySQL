<template>
    <div class="div_table" v-for="table in alltables" :key="table.id">
        <!-- <img src="../assets/img/table_second-floor.jpg"> -->
        <!-- <img :src="'/img/'+ alltables.img" class="img_tables"/> -->
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text">Mesa {{ table.id }}</p>
                <img class="card-img-top"
                    src="https://thumbs.dreamstime.com/b/el-demersus-africano-del-spheniscus-ping%C3%BCino-de-la-colonia-en-los-cantos-rodados-vara-cerca-cape-town-sur%C3%A1frica-que-se-vue-139731054.jpg"
                    alt="">
                <button class="btn btn-dark mt-2" @click="detail(table.id)" >Reserved</button>
            </div>
        </div>
    </div>

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