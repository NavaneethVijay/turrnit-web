<template>
  <div class="header-main container">
    <header>
      <nav class="flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-shrink-0 mr-6">
          <span class="logo-title">Turrnit</span>
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
    display: none;
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
