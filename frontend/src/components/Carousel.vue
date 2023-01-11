<template>
    <Carousel class="carousel" :autoplay="4000" :wrap-around="true">
    <Slide v-for="img in imgs" :key="img">
        <div class="carousel__item">
            <img :src="'/img/' +img" alt="" class="img_carousel"/>
            <!-- <img src="../assets/img/banner.jpg" alt="" class="img_carousel"/> -->
        </div>
    </Slide>

    <!-- <template #addons>
      <Pagination />
    </template> -->
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
export default {
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        //Pagination,
    },
    setup() {
        let imgs = ["banner.b0a2d167.jpg", "banner1.604aaf9e.jpg", "banner22.7dd417e3.jpg", "banner2.2c15c70a.jpg"];
        return {imgs}
    }
}
</script>

<style>
    .img_carousel {
        width: 100%;
    }
</style>