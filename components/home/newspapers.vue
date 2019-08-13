<template>
  <div class="container newspapers-main">
    <div class="slider-title">
      <h1 class="title text-5xl text-center">
        Popular Newspapers
      </h1>
      <h3 class="sub-info text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nulla
        a enim ultrices condimentum. Maecenas sit amet vehicula odio.
      </h3>
    </div>
    <hooper :settings="hooperSettings" style="height: 300px">
      <slide>
        <div class="slide-card">
          <div class="slide-content">
            <img
              class="w-full"
              src="https://www.thehindu.com/static/theme/default/base/img/og-image.jpg"
            />
          </div>
        </div>
      </slide>
      <slide>
        <div class="slide-card">
          <div class="slide-content">
            <img
              class="w-full"
              src="https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/46453176_10157013351768826_4929163223489314816_n.jpg?_nc_cat=1&_nc_oc=AQl_itnkjcxVm7lLUNrnY0S9I0gyy5MfQTgsFbQKHqve2cdFf18nA4PJdPi7eeI3vLs&_nc_ht=scontent.fmaa1-2.fna&oh=e2843ee836f90ffd31ea4997c7fab113&oe=5DD6BD1F"
            />
          </div>
        </div>
      </slide>
      <slide>
        <div class="slide-card">
          <div class="slide-content">
            <img
              class="w-full"
              src="https://wedoittogether.org/wp-content/uploads/2016/05/1e.png"
            />
          </div>
        </div>
      </slide>
      <slide>
        <div class="slide-card">
          <div class="slide-content">
            <img
              class="w-full"
              src="https://content3.jdmagicbox.com/comp/delhi/04/011pk009204/catalogue/dainik-jagran-ito-delhi-hindi-newspaper-publishers-qdldi9dx8c.jpg"
            />
          </div>
        </div>
      </slide>
      <slide>
        <div class="slide-card">
          <div class="slide-content">
            <img
              class="w-full"
              src="https://content1.jdmagicbox.com/comp/ernakulam/a4/0484px484.x484.180927061002.p6a4/catalogue/the-new-indian-express-kaloor-ernakulam-newspaper-publishers-bj0nzjyfom.jpg"
            />
          </div>
        </div>
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'

export default {
  name: 'Newspapers',
  components: {
    Hooper,
    Slide
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 3.5,
        infiniteScroll: false,
        transition: 1000,
        trimWhiteSpace: true,
        shortDrag: false,
        itemsToSlide: 1,
        autoPlay: false,
        playSpeed: 3000,
        breakpoints: {
          1024: {
            itemsToShow: 5,
            pagination: 'fraction'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.newspapers-main {
  margin-top: 30px;
  padding: 20px 0;
  border-bottom: 2px solid #e6e6e6;
}

.slider-title {
  margin: 20px 0 20px 0;
  .sub-info {
    max-width: 50%;
    opacity: 0.6;
    margin: 20px auto 30px auto;
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
    height: 100%;
    width: 100%;
  }
  .slide-content {
    box-sizing: border-box;
    height: 100%;
  }
}
</style>
