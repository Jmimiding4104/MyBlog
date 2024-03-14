<template>
  <div class="container py-5 my-5">
    <h2 class="text-center fs-1">RESUME</h2>
    <div class="mw-80p">
      <h3>Eperince</h3>
      <swiper
        v-if="experience.length > 0"
        :slidesPerView="1"
        :spaceBetween="30"
        :pagination="{
          clickable: true
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        :loop="true"
        ref="swiper"
      >
        <swiper-slide v-for="item in experience"
          ><div class="p-5">{{ item }}</div></swiper-slide
        >
      </swiper>
      <p v-else>RENDER 尚在熱機，麻煩30秒後重試~</p>

      <h3>Education</h3>
      <swiper
        v-if="education.length > 0"
        :slidesPerView="1"
        :spaceBetween="30"
        :pagination="{
          clickable: true
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        :loop="true"
        ref="swiper"
      >
        <swiper-slide v-for="item in education"
          ><div class="p-5">{{ item }}</div></swiper-slide
        >
      </swiper>
      <p v-else>RENDER 尚在熱機，麻煩30秒後重試~</p>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    let experience = ref({})
    let education = ref({})
    const swiper = ref(null)
    onMounted(() => {
      axios.get('https://myblogapi-v3b7.onrender.com/experience').then((res) => {
        experience.value = res.data
      })
      axios.get('https://myblogapi-v3b7.onrender.com/education').then((res) => {
        education.value = res.data
      })
    })
    return {
      modules: [Pagination, Navigation],
      experience,
      education,
      swiper
    }
  }
}
</script>

<style>
html,
body {
  position: relative;
  height: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}
</style>
