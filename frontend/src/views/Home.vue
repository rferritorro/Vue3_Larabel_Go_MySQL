<template>
    <div class="card">
        <img src="../assets/img/banner.jpeg" alt="">
    </div>
    <div id="menu_ids" class="menus">

    </div>
    <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
        <img src="../assets/img/banner.jpeg" alt="">
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
export default {
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
}
</script>

<style>
    .card {
        width: 100%;
        height: 800px;
        margin: 0;
    }
    .card img {
        width: 100%;
        height: 100%;
    }
</style>