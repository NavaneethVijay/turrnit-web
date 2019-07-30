<template>
  <div class="overview-wrapper ">
    <div class="flex section-overview container">
      <div class="w-1/2" />
      <div class="w-1/2 left-section">
        <div class="info">
          <h3 class="subtitle text-2xl">
            Fast and Easy
          </h3>
          <h1 class="title text-6xl">
            Delivery
          </h1>
          <h3 class="subtitle text-2xl">
            to the door.
          </h3>
          <div class="info-main">
            <div class="info-wrapper ">
              <h3>
                “Find Newpaper Vendors in your area in an instant, make
                Subscription through the app and avail offers.”
              </h3>
            </div>
          </div>
          <div class="info-footer">
            <div class="info-footer-wrapper">
              <h3>
                Turrnit has become a reputable and well known Delivery Service
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.overview-wrapper {
  background: #fff;
  transform: skewY(-5deg);
}
.section-overview {
  height: 80vh;
  align-items: center;
  background: url('~assets/images/img2.png');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center left;
  transform: skewY(5deg);
  &::after {
    content: '';
    width: 6px;
    height: 80%;
    background: #605cef;
    border-radius: 20px;
    display: inline-block;
    margin-left: 30px;
  }
  .title {
    font-weight: bold;
    line-height: 80px;
    color: #2e2e2e;
  }
  .subtitle {
    color: #2e2e2e;
    font-weight: lighter;
  }
  .left-section {
    height: 100%;
    align-items: center;
    display: flex;
    text-align: right;
    .info-wrapper {
      margin: 50px 0;
      color: #2e2e2e;
      font-weight: lighter;
      width: 80%;
      margin-left: auto;
      h3 {
        font-size: 20px;
      }
      .btn {
        margin: 20px 0;
      }
    }
  }
  .info-footer {
    background: rgb(246, 90, 33);
    color: #fff;
    box-shadow: 0 10px 20px 0 rgba(246, 90, 33, 0.3);
    border-radius: 70px 0 70px 0;
    box-sizing: border-box;
    padding: 50px 30px;
    cursor: pointer;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    // &:hover {
    //   border-bottom: 4px solid #f75d24;
    //   border-left: 4px solid #f75d24;
    // }
    .info-footer-wrapper {
      h3 {
        font-size: 24px;
        line-height: 40px;
        letter-spacing: 1px;

        strong {
          font-size: 30px;
          font-weight: bold;
        }
      }
      button {
        float: right;
      }
    }
  }
  .right-content {
    height: 100%;
  }
}
</style>
