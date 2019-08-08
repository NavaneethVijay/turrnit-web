<template>
  <div class="main-container">
    <div class="landing-section">
      <Landing />
      <Overview />
      <WhyUse />
      <Contact />
    </div>
  </div>
</template>
<script>
import Landing from '~/components/home/Landing.vue'
import Overview from '~/components/home/overview.vue'
import WhyUse from '~/components/home/WhyUse.vue'
import Contact from '~/components/home/Contact.vue'
export default {
  components: {
    Landing,
    Overview,
    WhyUse,
    Contact
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        infiniteScroll: false,
        transition: 1000,
        trimWhiteSpace: true,
        shortDrag: false,
        itemsToSlide: 1,
        autoPlay: true,
        playSpeed: 3000
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.landing-section {
  .highlight {
    color: #fff;
  }
}
</style>
