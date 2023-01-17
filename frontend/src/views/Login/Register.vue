<template>
    <div class="card card-body bg-transparent">
        <div class="mt-5">
            <Register @registerform="register_data"></Register>
        </div>
    </div>
</template>

<script>
import Register from '../../components/Register'
import Constant from '../../Constant';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

    export default {
        components: {
            Register
        },
        setup() {        
            const router = useRouter();
            const store = useStore();
            
            function register_data(value) {
                console.log(value);
                store.dispatch("user/" + Constant.REGISTER_CLIENT, value );
            }
            
            return {register_data, router, store}
            
        }
    }
</script>
