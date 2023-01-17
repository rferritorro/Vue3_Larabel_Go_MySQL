<template>
    <div class="card card-body bg-transparent">
        <div class="mt-5">
            <Login @loginform="login_data"></Login>
        </div>
    </div>
</template>

<script>
import Constant from '../../Constant';
import { useStore } from 'vuex'
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router';
    export default {
        components: {
            Login: defineAsyncComponent(() =>
            import('../../components/Login')
            )
        },
        setup() {   
            window.scroll({
                top: 0
            })
            const router = useRouter();
            const store = useStore();
            
            function login_data(value) {
                console.log(value);
                store.dispatch("user/" + Constant.LOGIN_CLIENT, value );
            }
            
            return {login_data, router, store}
        }
    }
</script>
