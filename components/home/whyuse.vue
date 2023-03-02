<template>
  <div class="why-use">
    <div class="whyuse-content container">
      <div class="heading text-center">
        <h1 class="title text-5xl">
          Why use Turrnit
        </h1>
        <h3 class="sub-info">
          Solve your day to day problem at turrnit, because we are committed to
          solve in a way you love.
        </h3>
      </div>
      <div class="item-grid">
        <div class="item">
          <div class="item-contents">
            <div class="content-img">
              <img
                width="60px"
                height="60px"
                src="~assets/icons/cash.svg"
                alt=""
              />
            </div>
            <h3 class="card-title">
              Pay per use
            </h3>
            <p class="info">
              Unlimited resources but only pay for the days you use.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="item-contents">
            <div class="content-img">
              <img
                width="60px"
                height="60px"
                src="~assets/icons/route.svg"
                alt=""
              />
            </div>
            <h3 class="card-title">
              No delays
            </h3>
            <p class="info">
              Track your morning delivery
            </p>
          </div>
        </div>
        <div class="item">
          <div class="item-contents">
            <div class="content-img">
              <img
                width="60px"
                height="60px"
                src="~assets/icons/giftbox.svg"
                alt=""
              />
            </div>
            <h3 class="card-title">
              Assured Gifts
            </h3>
            <p class="info">
              Free Magazine subsciption of your choice for first month
            </p>
          </div>
        </div>
        <!-- <div class="item">
          <div class="item-contents">
            <div class="content-img">
              <img
                width="60px"
                height="60px"
                src="~assets/icons/route.svg"
                alt=""
              />
            </div>
            <h3 class="card-title">
              No delays
            </h3>
            <p class="info">
              Track your morning delivery
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyUse'
}
</script>
<style lang="scss" scoped>
.whyuse-content {
  box-sizing: border-box;
  padding: 20px 0;
  margin-bottom: 80px;
  .heading {
    margin: 50px 0;
  }
  .sub-info {
    margin: 20px auto;
    max-width: 50%;
    opacity: 0.6;
    font-weight: lighter;
    font-size: 20px;
    @media (max-width: 768px) {
      max-width: 80%;
    }
  }
  .item-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
    @media (max-width: 768px) {
      margin-top: 50px;
    }
    .item {
      flex-basis: 20%;
      margin: 0 20px;
      border-radius: 10px;
      background: #fff;
      border-radius: 50px 0 50px 0;
      height: 230px;
      @media (max-width: 768px) {
        flex-basis: 100%;
        margin: 20px;
      }

      cursor: pointer;
      .item-contents {
        overflow: hidden;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .card-title {
        font-weight: bold;
        color: #2e2e2e;
        margin: 20px 0;
      }
      .info {
        color: #2e2e2e;
        opacity: 0.6;
      }
    }
  }
}
</style>
