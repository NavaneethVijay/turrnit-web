<template>
  <div class="main">
    <Header />
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
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
