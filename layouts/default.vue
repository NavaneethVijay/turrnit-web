<template>
  <div class="main">
    <!-- <Header /> -->
    <div class="main-content">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
// import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    // Header,
    Footer
  }
}
</script>
<style lang="scss">
.main {
  position: relative;
  .main-content {
    overflow: hidden;
  }
}
</style>
