<template>
  <div class="header-main container">
    <header>
      <nav class="flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-shrink-0 mr-6">
          <span class="logo-title">Turrnit</span>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded border-teal-400 hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block lg:flex lg:items-center lg:w-auto menu-list">
          <div class="text-lg lg:flex-grow mr-10">
            <nuxt-link
              to="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Overview
            </nuxt-link>
            <nuxt-link
              to="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 mr-4"
            >
              Features
            </nuxt-link>
            <nuxt-link
              to="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0"
            >
              Why Turrnit ?
            </nuxt-link>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-main {
  color: #2e2e2e;
  box-sizing: border-box;
  padding: 20px 0;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 0;
  }
  nav {
    padding: 15px 0;
  }
  .menu-list {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .logo-title {
    color: #2e2e2e;
    font-weight: bold;
    font-size: 42px;
  }
}
</style>
