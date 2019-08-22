<template>
  <div class="main-container">
    <div class="landing-section">
      <Landing />
      <Overview />
      <Newspapers />
      <Request />
      <WhyUse />
      <Features />
      <Contact />
      <MoreInfo />
    </div>
  </div>
</template>
<script>
import Landing from '~/components/home/Landing.vue'
import Overview from '~/components/home/Overview.vue'
import WhyUse from '~/components/home/WhyUse.vue'
import Contact from '~/components/home/Contact.vue'
import Request from '~/components/home/Request.vue'
import Features from '~/components/home/Features.vue'
import Newspapers from '~/components/home/Newspapers.vue'
import MoreInfo from '~/components/home/MoreInfo.vue'
export default {
  components: {
    Landing,
    Overview,
    WhyUse,
    Contact,
    Features,
    Newspapers,
    Request,
    MoreInfo
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
