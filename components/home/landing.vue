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
            <h3>Register now to get notified</h3>
            <form class="w-full max-w-sm">
              <div class="flex  py-2 form-contents">
                <div class="input-control">
                  <input
                    class="appearance-none bg-transparent border-none w-full
              text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Enter your email"
                    aria-label="Full name"
                  />
                </div>

                <div class="checkbox-wrapper input-control">
                  <input id="merchant" type="checkbox" name="merchant" />
                  <span class="checkbox-label">I am a Merchant</span>
                </div>
                <button class="btn flex-shrink-0 py-1 px-2 " type="button">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="newspaper-sources w-1/2">
        <h3 class="slider-title">
          Popular Magazines
        </h3>
        <hooper :settings="hooperSettings" style="height: 100%">
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                <img
                  class="w-full"
                  src="https://timedotcom.files.wordpress.com/2018/02/hk_g1500_blackpanther0219.jpg?quality=85&w=280"
                />
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                <img
                  class="w-full"
                  src="http://kamiangmedianidu30.group/wp-content/uploads/2018/05/the-punisher.jpg"
                />
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                <img
                  class="w-full"
                  src="https://i.pinimg.com/736x/b9/24/25/b92425183301bd12764fc352d60ef191.jpg"
                />
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                <img
                  class="w-full"
                  src="http://im.rediff.com/getahead/2019/feb/12vicky.jpg"
                />
              </div>
            </div>
          </slide>
          <slide>
            <div class="slide-card">
              <div class="slide-content">
                <img
                  class="w-full"
                  src="https://www.economist.com/sites/default/files/print-covers/20190302_cuk400.jpg"
                />
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
        itemsToShow: 1,
        infiniteScroll: false,
        transition: 1000,
        trimWhiteSpace: true,
        shortDrag: false,
        itemsToSlide: 1,
        autoPlay: false,
        playSpeed: 3000,
        breakpoints: {
          1024: {
            itemsToShow: 3,
            pagination: 'fraction'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.landing-main {
}
.section-content {
  min-height: calc(80vh - 100px);
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
    .newspaper-sources {
      width: 100%;
      position: relative;
    }
    .info {
      height: 100%;
      padding: 0 20px;
    }
  }
  .slider-title {
    padding: 10px;
    margin-left: 15px;
    @media (max-width: 768px) {
      text-align: center;
      margin: 0;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .slide-card {
    border-radius: 10px;
    height: 217;
    margin: 0 25px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    img {
      object-fit: fill;
      height: 217px;
      width: 100%;
      @media (max-width: 768px) {
        height: 374px;
      }
    }
    .slide-content {
      box-sizing: border-box;
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
    .form-contents {
      flex-direction: column;
      align-items: flex-start;
    }
    .input-control {
      background: #fff;
      padding: 15px 20px;
      border-radius: 50px 0 50px 0;
      box-shadow: 0 6px 10px 0 rgba(255, 202, 153, 0.05);
      margin: 10px 0;
      input {
        border-bottom: 1px solid #f2f2f2;
      }
      button {
        margin-top: 10px;
      }
      &.checkbox-wrapper {
        cursor: pointer;
        position: relative;
        z-index: 1;
        overflow: hidden;
        margin-bottom: 20px;
        color: #2e2e2e;
        input[type='checkbox'] {
          visibility: hidden;
        }
        &::before {
          content: '✓';
          width: 15px;
          height: 15px;
          // background: #fff;
          display: block;
          position: absolute;
          left: 13px;
          top: 15px;
          border-radius: 50%;
          margin: 0 5px;
          z-index: 2;
          transform: scale(1);
          visibility: hidden;
        }
        &::after {
          content: '';
          width: 15px;
          height: 15px;
          border: 1px solid #dc0000;
          display: block;
          position: absolute;
          left: 13px;
          top: 21px;
          border-radius: 50%;
          margin: 0 5px;
          z-index: -1;
          transform: scale(1);
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        &.inputChecked {
          &:hover {
            color: #fff;
            &::before {
              visibility: visible;
            }
            &::after {
              background: #dc0000;
              transform: scale(20);
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.newspaper-sources {
  position: relative;
  .hooper-prev,
  .hooper-next {
    position: absolute;
    bottom: 0;
    padding: 0;
  }
}
</style>
