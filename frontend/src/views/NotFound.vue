<template>
    <div class="card card-body not_founddiv">
        <h2 class="about_h2">PAGE NOT FOUND:</h2>
        <span class="about_h2"> {{fullPath}} </span>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        window.scroll({
            top: 0
        })
        const route = useRoute();
        const fullPath  = route.fullPath
        return { fullPath };
    }
}
</script>

<style>
    .not_founddiv {
        background-image: url("../assets/img/home_minimal.jpg");
    }
    .about_h2 {
        margin-top: 5%;
        color: beige
    }

</style>