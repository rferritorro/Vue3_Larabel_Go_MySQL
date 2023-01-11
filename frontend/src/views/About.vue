<template>
    <div class="card card-body div_about">
        <h2 class="about_h2 text-white">About</h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium possimus reiciendis corrupti officia rem doloremque 
            iusto modi eius aut quam deserunt, perspiciatis, non veniam corporis ipsa quae dolore. Eaque!
        </p>
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