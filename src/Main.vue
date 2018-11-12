<template>
  <div>
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
.tabs {
  width: 100%;
  background: #ccc;
  height: 30px;
  line-height: 30px;
  position: fixed;
  bottom: 0;
  left:0
}
.tabs ul {
  clear: both;
  overflow: hidden;
}
.tabs li {
  float: left;
  min-width: 25%;
  cursor: pointer;
  color: blue;
}
</style>
