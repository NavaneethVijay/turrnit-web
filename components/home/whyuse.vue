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
  height: 90vh;
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
    margin-top: 100px;
    .item {
      flex-basis: 25%;
      background: #fff;
      height: 300px;
      margin: 0 20px;
      border-radius: 10px;

      cursor: pointer;
      text-align: center;
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.05);
      border-bottom: 4px solid #605cef;
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
