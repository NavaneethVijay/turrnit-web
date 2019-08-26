<template>
  <div class="contact-main ">
    <div class="contact-content container">
      <div class="info-wrapper">
        <h1 class="title text-6xl">
          Join the waiting list!
        </h1>
        <h3 class="sub-info">
          Be amongst the first to get your free subscriptions.
        </h3>
      </div>
      <div class="info-footer">
        <form class="w-full " @submit.prevent>
          <div class="flex items-center py-2">
            <input
              v-model="email"
              class="appearance-none bg-transparent border-none w-full
              text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your email"
              @blur="validateEmail"
              @input="
                () => {
                  message = ''
                }
              "
            />
            <button
              class="btn flex-shrink-0 py-1 px-2 "
              type="button"
              @click="register"
            >
              Register
            </button>
          </div>
          <transition name="slide-fade">
            <p v-if="message" class="error-message">
              {{ message }}
            </p>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import signup from '@/mixins/signup.js'

export default {
  name: 'Contact',
  mixins: [signup]
}
</script>

<style lang="scss" scoped>
.contact-main {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 50px;
  background: #2858d4;
  color: #85edee;
  .error-message {
    color: #fa4d41;
    position: absolute;
    font-size: 12px;
    left: 25px;
    bottom: 10px;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
  .contact-content {
    @media (max-width: 768px) {
      padding: 30px 0;
      margin: 0 20px;
    }
    .title {
      color: #85edee;
      font-size: 40px;

      @media (max-width: 768px) {
        font-size: 30px;
        line-height: 50px;
      }
    }
    .sub-info {
      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
    border-radius: 50px 0 50px 0;
    box-shadow: 0 10px 20px #2858d433;
    text-align: center;
    .info-footer {
      width: 50%;
      margin: 50px auto;
      form {
        background: #fff;
        padding: 20px;
        border-radius: 50px 0 50px 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.08);
        position: relative;
        input {
          border-bottom: 1px solid #f2f2f2;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
        form {
          > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            button {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
