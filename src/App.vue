<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
      </li>
      <li>
        <router-link to="/explorer">分类</router-link>
      </li>
      <li>
        <router-link to="/cart">购物车</router-link>
      </li>
      <li>
        <router-link to="/me">我</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
