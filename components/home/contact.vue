<template>
  <div class="contact-main">
    <div class="contact-content container">
      <div class="info-wrapper">
        <h1 class="title text-6xl">
          Register to get notifed
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
  height: 50vh;
  overflow: hidden;
  .contact-content {
    box-sizing: border-box;
    padding: 50px;
    background: #fff;
    border-radius: 50px 0 50px 0;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.05);
    .info-footer {
      width: 50%;
      margin-top: 50px;
      form {
        background: #fff;
        padding: 20px;
        border-radius: 50px 0 50px 0;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.05);
        input {
          border-bottom: 1px solid #f2f2f2;
        }
      }
    }
  }
}
</style>
