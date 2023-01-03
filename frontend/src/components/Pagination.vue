<template>
    <h1>{{ floor }}</h1>
    <div class="pagination">
        <button id="less" class="btn bg-light d-none" @click="less_page()">
            <font-awesome-icon icon="fa-solid fa-backward-step" title="Backward" />
        </button>
        <button id="btn_floor" class="btn btn-dark" @click="change_floor(0)">First Floor</button>
        <button id="btn_floor" class="btn btn-light" @click="change_floor(1)">Second Floor</button>
        <button id="btn_floor" class="btn btn-light" @click="change_floor(2)">Terrace</button>
        <button id="next" class="btn bg-light" @click="next_page()">
            <font-awesome-icon icon="fa-solid fa-forward-step" title="Forward" />
        </button>
    </div>
</template>

<script>
//import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    props: {
        alltables: Object,
        modelValue: Number
    },
    setup(props, { emit }) {
        let floor = computed({
            get: () => props.modelValue,
            set: (val) => emit("update:modelValue", val)
        });
        function less_page() {
            change_floor(floor.value-1)
        }
        function next_page() {
            change_floor(floor.value+1)
        }
        function change_floor(n) {
            if ( n == 0 ) {
                document.getElementById('less').classList.add('d-none')
            } else if ( n == 2) {
                document.getElementById('next').classList.add('d-none')
            } else {
                document.getElementById('less').classList.remove('d-none')
                document.getElementById('next').classList.remove('d-none')
            }
            const buttons = document.querySelectorAll('#btn_floor')
            buttons[n].classList.remove('btn-light')
            buttons[n].classList.add('btn-dark')
            buttons[floor.value].classList.remove('btn-dark')
            buttons[floor.value].classList.add('btn-light')
            floor.value=n
        } 
        return {less_page, next_page, change_floor }
    }

}
</script>
<style>
.d-none {
    display: none;
}

.pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3.5px
}

.pagination button {
    margin: 2.5px;
}
</style>