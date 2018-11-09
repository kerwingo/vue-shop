<template>
  <div id="app">
    <p>main</p>
    <div class="tabs">
      <ul>
        <router-link :to="{ name :'Home'}" tag="li">主页</router-link>
        <router-link :to="{ name :'Explorer'}" tag="li">分类</router-link>
        <router-link :to="{ name :'Cart'}" tag="li">购物车</router-link>
        <router-link :to="{ name :'Me'}" tag="li">我</router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
