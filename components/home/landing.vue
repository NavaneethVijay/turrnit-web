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
                Get Newspaper, Magazines and other Print Media delivered to your
                doorstep.
              </h3>
            </div>
          </div>
          <div class="info-footer">
            <form class="w-full max-w-sm" @submit.prevent>
              <div class="flex  py-2 form-contents">
                <div class="input-control">
                  <input
                    v-model="email"
                    class="appearance-none bg-transparent border-none w-full
              text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Enter your email"
                    aria-label="Full name"
                    @blur="validateEmail"
                    @input="
                      () => {
                        message = ''
                      }
                    "
                  />
                </div>
                <button class="btn flex-shrink-0 py-1 px-2 " @click="register">
                  Notify Me
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
      <div class="newspaper-sources w-1/2">
        <img
          class="landing-side-img"
          src="~assets/images/undraw_deliveries_131a.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import signup from '@/mixins/signup.js'

export default {
  name: 'Landing',
  mixins: [signup]
}
</script>

<style lang="scss" scoped>
.landing-main {
  padding: 50px 0;
  .error-message {
    color: #fa4d41;
    position: absolute;
    font-size: 12px;
    left: 25px;
    bottom: 15px;
    text-transform: capitalize;
    @media (max-width: 768px) {
      bottom: 8px;
    }
  }
  @media (max-width: 768px) {
    padding: 0;
  }
}
.section-content {
  align-items: center;
  margin: 80px auto;
  @media (max-width: 768px) {
    flex-direction: column;
    box-sizing: border-box;
    .newspaper-sources {
      width: 100%;
      position: relative;
    }
    .info {
      height: 100%;
      padding: 0 20px;
      .title {
        @media (max-width: 768px) {
          font-size: 3rem;
        }
      }
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

  .subtitle {
    color: #2e2e2e;
    font-weight: lighter;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  .left-section {
    height: 100%;
    align-items: center;
    display: flex;
    .info-wrapper {
      margin: 50px 0;
      color: #2e2e2e;
      font-weight: lighter;
      @media (max-width: 768px) {
        margin: 30px 0;
      }
      h3 {
        font-size: 20px;
        @media (max-width: 768px) {
          font-size: 18px;
        }
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
      position: relative;
    }
    .form-contents {
      align-items: center;
      margin: 10px 0;
      background: #fff;
      padding: 15px;
      border-radius: 50px 0 50px 0;
      box-shadow: 0 6px 10px 0 rgba(255, 202, 153, 0.05);

      button {
        margin-bottom: 10px;
        margin-left: 10px;
      }
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    .input-control {
      margin: 10px 0;
      padding: 10px;
      border-radius: 50px 0 50px 0;
      width: 100%;
      @media (max-width: 768px) {
        padding: 10px;
      }
      input {
        border-bottom: 1px solid #f2f2f2;
      }
      &.checkbox-wrapper {
        width: max-content;
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
        &:hover {
          color: #fff;
          &::before {
            visibility: visible;
          }
          &::after {
            background: #dc0000;
            transform: scale(22);
          }
        }
        &.inputChecked {
          &:hover {
            color: #fff;
            &::before {
              visibility: visible;
            }
            &::after {
              background: #dc0000;
              transform: scale(22);
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.newspaper-sources {
  .landing-side-img {
    width: 80%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
