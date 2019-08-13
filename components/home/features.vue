<template>
  <div class="features-wrapper ">
    <div class="flex section-features container">
      <div class="w-1/2 image-section ">
        <img src="~assets/images/features-mobile.svg" alt="" />
      </div>
      <div class="w-1/2 left-section">
        <div class="info">
          <h1 class="title text-6xl">
            All the benefits.
            <br />
            None of the limits.
          </h1>
          <div class="info-main">
            <div class="info-wrapper ">
              <ul class="features-list">
                <li>
                  <div class="list-item">
                    <div class="list-icon">
                      <img
                        src="~assets/icons/features/subscription.svg"
                        alt=""
                      />
                    </div>
                    <div class="list-text">
                      <h3 class="main">
                        Online Newspaper subscription.
                      </h3>
                      <p class="info">
                        Read your favorite newspaper online/offline.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-item">
                    <div class="list-icon">
                      <img src="~assets/icons/features/debit-card.svg" alt="" />
                    </div>
                    <div class="list-text">
                      <h3 class="main">
                        Easy payment options.
                      </h3>
                      <p class="info">
                        Monthly / Half yearly subscriptions at cheapest prices.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-item">
                    <div class="list-icon">
                      <img src="~assets/icons/features/box.svg" alt="" />
                    </div>
                    <div class="list-text">
                      <h3 class="main">
                        Instant newspaper service providers
                      </h3>
                      <p class="info">
                        Find best newspaper dealers based on your location.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list-item">
                    <div class="list-icon">
                      <img
                        src="~assets/icons/features/communications.svg"
                        alt=""
                      />
                    </div>
                    <div class="list-text">
                      <h3 class="main">
                        Subscribe to world class Magazine
                      </h3>
                      <p class="info">
                        Subscribe to world class magazines
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
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
.features-wrapper {
  background: #fff;
  max-width: 95%;
  border-radius: 50px 0 50px 0;
  margin: auto auto 50px auto;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.05);
}
.section-features {
  padding: 100px 0;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
    background-size: 90%;
    background-position-y: 90%;
    padding: 50px 0;
  }

  .image-section {
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .title {
    font-weight: bold;
    line-height: 60px;
    font-size: 50px;
    color: #2e2e2e;
    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 50px;
    }
  }
  .subtitle {
    color: #2e2e2e;
    font-weight: lighter;
  }
  .left-section {
    @media (max-width: 768px) {
      width: 90%;
    }
  }
  .features-list {
    margin-top: 50px;

    .list-item {
      display: flex;
      align-items: flex-start;
      margin: 10px 0;
      padding: 20px;
      cursor: pointer;
      max-width: max-content;
      border-radius: 10px;
      transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      &:hover {
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.05);
      }
      img {
        width: 80%;
      }
      .list-text {
        padding-left: 10px;
        color: #2e2e2e;
        .main {
          font-weight: 500;
          line-height: 30px;
          font-size: 18px;
        }
        .info {
          opacity: 0.6;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
