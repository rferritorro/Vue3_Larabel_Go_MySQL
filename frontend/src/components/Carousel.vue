<template>
    <Carousel class="carousel" :autoplay="4000" :wrap-around="true">
    <Slide v-for="img in imgs" :key="img">
        <div class="carousel__item">
            <img :src="'/img/' +img" alt="" class="img_carousel"/>
            <!-- <img src="../assets/img/banner1.jpg" alt="" class="img_carousel"/> -->
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
        let imgs = ["banner.7d1ca38b.jpg", "banner1.45f06abe.jpg", "banner22.a99d922f.jpg", "banner2.969fab58.jpg"];
        return {imgs}
    }
}
</script>

<style>
    .img_carousel {
        width: 100%;
    }
</style>