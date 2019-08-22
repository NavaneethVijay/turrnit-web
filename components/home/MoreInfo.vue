<template>
  <div class="moreinfo-main container">
    <div class="section-title">
      <h3>Get your business on Turrnit</h3>
    </div>
    <div class="section-info">
      <h4>We will get back to you :)</h4>
    </div>
    <div class="main-content">
      <div class="img-section">
        <img
          class="more-info-img"
          src="~assets/images/undraw_terms_lso0.svg"
          alt=""
        />
      </div>
      <div class="content">
        <div class="partner-form">
          <div class="input-control">
            <input id="name" placeholder="Name" type="text" name="name" />
          </div>
          <div class="input-control">
            <input id="email" type="email" placeholder="Email" name="email" />
          </div>
          <div class="input-control">
            <input
              id="mobile"
              type="text"
              placeholder="Mobile Number"
              name="mobile"
            />
          </div>
          <div class="btn submit-btn">
            Sign up
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoreInfo'
}
</script>

<style scoped lang="scss">
.moreinfo-main {
  box-sizing: border-box;
  padding: 40px 0;

  .main-content {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .img-section {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 50%;
    }
  }

  .content {
    width: 50%;
    margin: auto;
    border-radius: 40px 0 40px 0;
    padding: 20px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .section-title {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 26px;
    }
  }
  .section-info {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: lighter;
    text-align: center;
  }
  .partner-form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .input-control {
      background: #fff;
      padding: 18px;
      border-radius: 30px 0 30px 0;
      flex-basis: 80%;
      margin: 10px 0;
      input {
        width: 80%;
      }
    }
    .submit-btn {
      padding: 8px 20px;
      margin-top: 20px;
      width: max-content;
      cursor: pointer;
    }
  }
}
</style>
