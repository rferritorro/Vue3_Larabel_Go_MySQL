<template>
    <div class="card card-body div_about">
        <h2 class="about_h2">About</h2>
    </div>
</template>

<script>
export default {
    setup() {
        window.scroll({
            top: 0
        })
    }

}
</script>

<style>
    .div_about {
        background-image: url("../assets/img/home_minimal.jpg");
    }
    .about_h2 {
        margin-top: 5%;
        color: beige
    }

</style>