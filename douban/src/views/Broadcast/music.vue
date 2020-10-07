<template>
  <div class="read">
      <div class="curr" v-for="(item,index) in musicList" :key="index">
          <div class="title">{{item.title}}</div>
          <ul>
              <li v-for="(citem,cindex) in item.group_list" :key="cindex">
                  <img :src="citem.cover_url" alt="">
                  <div class="ctitle">{{citem.title}}</div>
                  <div class="author">作者:{{citem.author}}</div>                
                  <div class="pf">{{citem.score}}</div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            musicList:[],
        }
    },
  mounted() {
       this.$axios.get('/data/music.json').then(res=>{
            console.log(res)
            this.musicList=res.data.group
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
.pf,.author{
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