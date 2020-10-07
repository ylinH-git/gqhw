<template>
  <div class="read">
      <div class="curr">
          <div class="title">推荐书籍</div>
          <ul>
              <li v-for="(item,index) in readList" :key="index">
                  <img :src="item.cover_url" alt="">
                  <div class="ctitle">{{item.title}}</div>
                  <div class="author">作者:{{item.author}}</div>
                  <div class="num">{{item.num}}</div>                  
                  <div class="pf">{{item.score}}</div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            readList:[],
        }
    },
  mounted() {
       this.$axios.get('/data/read.json').then(res=>{
            console.log(res)
            this.readList=res.data.recommend_one
    })
  },
};
</script>

<style lang="scss" scoped>
.title{
    padding:0.15rem;
    font-size: 0.14rem;
}
.ctitle{
    font-size: 0.14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.pf,.num,.author{
    font-size: 0.12rem;
    color:#a6a6a6;
}
ul{
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    padding-bottom: 0.2rem;
}
ul>li{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-shrink:0;
    width: 50%;
    padding: 0.1rem 0.05rem;
    text-align: center;
    img{
        height:1.5rem
    }
    div{
        width: 100%;
    }
}
</style>