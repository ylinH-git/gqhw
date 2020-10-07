<template>
  <div class="movie">
      <div class="curr">
          <div class="title">正在上映的电影-北京</div>
          <ul>
              <li v-for="(item,index) in cmovieList" :key="index">
                  <img :src="item.cover" alt="">
                  <div class="ctitle">{{item.title}}</div>
                  <div class="pf">评分:{{item.rate}}</div>
              </li>
          </ul>
      </div>
      <div class="fu">
          <div class="title">即将上映的电影</div>
          <ul>
              <li v-for="(item,index) in fmovieList" :key="index">
                  <img :src="item.cover" alt="">
                  <div class="ctitle">{{item.title}}</div>
                  <div class="pf">评分:{{item.rate}}</div>
              </li>
          </ul>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            cmovieList:[],
            fmovieList:[]
        }
    },
  mounted() {
       this.$axios.get('/data/movie.json').then(res=>{
            res.data.subjects.forEach(item=>{
                if(item.playable){
                    this.cmovieList.push(item);
                }else{
                    this.fmovieList.push(item)
                }
            })
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
}
.pf{
    font-size: 0.12rem;
    color:#a6a6a6;
}
ul{
    display: flex;
    overflow: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.2rem;
}
ul>li{
    // display: inline-block;
    flex-shrink:0;
    width: 30%;
    padding: 0 0.05rem;
    text-align: center;
    img{
        height:1.5rem
    }
}
</style>