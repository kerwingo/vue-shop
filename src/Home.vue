<template>
  <div id="home">
    <p>home</p>
    <div class="goods_container">
      <ul  class="book_list">
        <li v-for="item in bookList">
          <a href="item.shopLink"><img src="item.imgSrc" alt=""></a>
          <p class="description">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data:{
    bookList:[{
      name:'jquery进阶',
      imgSrc:'./images/jquery.jpg',
      shopLink:'http://www.tmall.com'
    },{
      name:'python进阶',
      imgSrc:'./images/python.jpg',
      shopLink:'http://www.tmall.com'
    },{
      name:'jquery入门',
      imgSrc:'./images/jquery2.jpg',
      shopLink:'http://www.tmall.com'
    },{
      name:'html进阶',
      imgSrc:'./images/html.jpg',
      shopLink:'http://www.tmall.com'
    },{
      name:'css进阶',
      imgSrc:'./images/css.jpg',
      shopLink:'http://www.tmall.com'
    }]
  }
}
</script>

<style>

</style>
