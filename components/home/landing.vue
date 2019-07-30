<template>
  <div class="landing-main">
    <div class="flex section-content container">
      <div class=" sm:w-full md:w-1/2 left-section">
        <div class="info">
          <h1 class="title text-6xl">
            Turrnit
          </h1>
          <h3 class="subtitle text-3xl">
            "Delivered. Before you wake up."
          </h3>
          <div class="info-main">
            <div class="info-wrapper">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed nulla a enim ultrices condimentum.
              </h3>
            </div>
          </div>
          <div class="info-footer">
            <form class="w-full max-w-sm">
              <div class="flex items-center py-2">
                <input
                  class="appearance-none bg-transparent border-none w-full
              text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="johndoe@domain.com"
                  aria-label="Full name"
                />
                <button class="btn flex-shrink-0 py-1 px-2 " type="button">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="newspaper-sources w-1/2">
        <hooper :settings="hooperSettings" style="height: 100%">
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                HINDU
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                HINDU
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                HINDU
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                HINDU
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                HINDU
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                HINDU
              </div>
            </div>
          </slide>
          <hooper-navigation slot="hooper-addons" />
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
export default {
  name: 'Landing',
  components: {
    Hooper,
    Slide,
    HooperNavigation
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
.landing-main {
}
.section-content {
  height: calc(80vh - 100px);
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    .newspaper-sources {
      width: 100%;
    }
  }
  .slide-card {
    background: #fff;
    border-radius: 10px;
    height: 300px;
    margin: 0 25px;
    @media (max-width: 768px) {
      height: 200px;
    }
    .slide-content {
      box-sizing: border-box;
      padding: 20px;
      height: 100%;
    }
  }
  .subtitle {
    color: #2e2e2e;
    font-weight: lighter;
  }
  .left-section {
    height: 100%;
    align-items: center;
    display: flex;
    .info-wrapper {
      margin: 50px 0;
      color: #2e2e2e;
      font-weight: lighter;
      h3 {
        font-size: 20px;
      }
      .btn {
        margin: 20px 0;
      }
    }
  }
  .right-content {
    height: 100%;
  }
  .info-footer {
    form {
      background: #fff;
      padding: 20px;
      border-radius: 50px 0 50px 0;
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.05);
      input {
        border-bottom: 1px solid #f2f2f2;
      }
    }
  }
}
</style>
