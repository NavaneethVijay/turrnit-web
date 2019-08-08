<template>
  <div class="why-use">
    <div class="whyuse-content container">
      <div class="heading text-center">
        <h1 class="title text-5xl">
          Why use Turrnit
        </h1>
        <h3 class="sub-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          nulla a enim ultrices condimentum. Maecenas sit amet vehicula odio.
        </h3>
      </div>
      <div class="item-grid">
        <div class="item">
          <div class="item-contents">
            Easy Finding
          </div>
        </div>
        <div class="item">
          <div class="item-contents">
            Easy Finding
          </div>
        </div>
        <div class="item">
          <div class="item-contents">
            Easy Finding
          </div>
        </div>
        <div class="item">
          <div class="item-contents">
            Easy Finding
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyUse'
}
</script>
<style lang="scss" scoped>
.whyuse-content {
  box-sizing: border-box;
  padding: 20px 0;
  min-height: 90vh;
  .heading {
    margin-top: 50px;
  }
  .sub-info {
    margin: 20px auto;
    max-width: 50%;
    opacity: 0.6;
    font-weight: lighter;
    font-size: 20px;
  }
  .item-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
    @media (max-width: 768px) {
      margin-top: 50px;
    }
    .item {
      flex-basis: 25%;
      background: #fff;
      height: 300px;
      margin: 0 20px;
      border-radius: 10px;
      @media (max-width: 768px) {
        flex-basis: 100%;
        margin: 20px;
      }

      cursor: pointer;
      text-align: center;
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.05);
      border-bottom: 4px solid #dc0000;
      .item-contents {
        height: 100%;
        overflow: hidden;
        border-radius: 10px;
        padding: 20px;
      }
    }
  }
}
</style>
