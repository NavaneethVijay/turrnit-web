<template>
  <div class="moreinfo-main container">
    <div class="section-title">
      <h3>Get your business on Turrnit</h3>
    </div>
    <div class="section-info">
      <h4>Let us have a conversation :)</h4>
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
            <input
              id="name"
              v-model="name"
              placeholder="Name"
              type="text"
              name="name"
            />
          </div>
          <div class="input-control">
            <input
              id="email"
              v-model="email"
              type="text"
              placeholder="Email"
              name="email"
              @blur="validateEmail"
              @input="
                () => {
                  message = ''
                }
              "
            />
            <transition name="slide-fade">
              <p v-if="message" class="error-message">
                {{ message }}
              </p>
            </transition>
          </div>
          <div class="input-control">
            <input
              id="mobile"
              v-model="mobile"
              type="tel"
              placeholder="Mobile Number"
              name="mobile"
            />
          </div>
          <div class="btn submit-btn" @click="signup">
            Sign up
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signup from '@/mixins/signup.js'
export default {
  name: 'MoreInfo',
  mixins: [signup],

  data() {
    return {
      name: '',
      mobile: ''
    }
  },

  methods: {
    async signup() {
      if (!this.message && this.email && this.name && this.mobile) {
        const messageRef = this.$fireStore.collection('beta-vendors')
        try {
          await messageRef.add({
            email: this.email,
            name: this.name,
            mobile: this.mobile
          })
        } catch (e) {
          return
        }
        await this.$swal.fire({
          title: 'Thank you for your interest!',
          text: 'We will contact you soon.',
          type: 'success',
          backdrop: `
           rgba(0,0,123,0.4)
           url('https://sweetalert2.github.io/images/nyan-cat.gif')
           center left
           no-repeat
         `
        })
        this.email = ''
        this.name = ''
        this.mobile = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.moreinfo-main {
  box-sizing: border-box;
  padding: 40px 0;

  .error-message {
    color: #fa4d41;
    position: absolute;
    font-size: 12px;
    left: 5px;
    bottom: -20px;
    text-transform: capitalize;
  }
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
      margin: 20px 0;
      position: relative;
      input {
        width: 80%;
        outline: none;
        &:focus {
          border: none;
        }
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
