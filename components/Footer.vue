<template>
  <div class="footer-main">
    <!--Footer-->
    <footer class="footer container">
      <div class="footer-left">
        <div class="title">
          <h1 class="title text-6xl">
            Turrnit
          </h1>
          <h3 class="subtitle text-3xl">
            "Delivered. Before you wake up."
          </h3>
        </div>
      </div>
    </footer>
    <p class="c-right">
      <span>Copyright</span>
      <span>{{ new Date().getFullYear() }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-main {
  background: #fff;

  .footer {
    padding: 80px 0;
    @media (max-width: 768px) {
      padding: 80px 0 80px 20px;
    }
  }
  .title {
    font-size: 3rem;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
  .subtitle {
    color: #2e2e2e;
    font-weight: lighter;
    font-size: 20px;
    line-height: 20px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  .c-right {
    margin-top: 20px;
    background: #2858d4;
    color: #85edee;
    padding: 10px;
    text-align: center;
  }
}
</style>
