<template>
  <div class="newsList">
    <div class="news" v-for="(item, index) in newsList" :key="index">
      <div class="content">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.target.desc }}</div>
        <div class="author">作者：{{ item.target.author.name}}</div>
      </div>
      <div class="imgBox">
        <img :src="item.target.cover_url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["newsList"],
};
</script>

<style lang="scss">
.news {
  display: flex;
  padding: 0.15rem 0.1rem 0.3rem 0.1rem;
  border: 1px solid #f6f6f6;
  .desc{
    font-size: 0.14rem;
    padding: 0.05rem 0;
    color: #bdb5b1;
  }
  .author{
     font-size: 0.12rem;
    color: #dbd9db;
  }
  .content{
    width: 70%;
  }
  .imgBox {
    width: 30%;
    img {
      display: block;
      width: 1.2rem;
    }
  }
}
</style>