<script>
import Navbar from '@/components/NavbarComponent.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  data() {
    return {}
  },
  components: {
    Navbar, // 命名导出 Navbar 组件
    Footer  // 命名导出 Footer 组件
  },
  mounted() {
    this.$http.get(`https://myblogapi-v3b7.onrender.com`)
  }
}

</script>

<template>
  <Navbar />
  <router-view  />
  <Footer />
</template>

<style>
</style>
