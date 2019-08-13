<template>
  <div class="contact-main ">
    <div class="contact-content container">
      <div class="info-wrapper">
        <h1 class="title text-6xl">
          Register to get notified
        </h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          nulla a enim ultrices condimentum.
        </h3>
      </div>
      <div class="info-footer">
        <form class="w-full ">
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
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
.contact-main {
  min-height: 50vh;
  overflow: hidden;
  background: #f7f9ff;
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-content {
    height: 80%;
    @media (max-width: 768px) {
      padding: 30px;
      margin: 0 20px;
    }
    .title {
      color: #85edee;
      @media (max-width: 768px) {
        font-size: 36px;
        line-height: 50px;
      }
    }
    box-sizing: border-box;
    padding: 50px;
    background: #2858d4;
    color: #85edee;
    border-radius: 50px 0 50px 0;
    box-shadow: 0 10px 20px #2858d433;
    .info-footer {
      width: 50%;
      margin-top: 50px;
      @media (max-width: 768px) {
        width: 100%;
        form {
          background: none;
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
      form {
        background: #fff;
        padding: 20px;
        border-radius: 50px 0 50px 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.08);
        input {
          border-bottom: 1px solid #f2f2f2;
        }
      }
    }
  }
}
</style>
