<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <router-view name="footer-bar"></router-view>
    <!-- <ul class="foot-bar">
      <li class="foot-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="foot-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="foot-bar-item">
        <router-link to="/Cart">购物车</router-link>
      </li>
      <li class="foot-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul> -->
  </div>
</template>
<script>

export default {
}
</script>

<style lang="scss">
</style>