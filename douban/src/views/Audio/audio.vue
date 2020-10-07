<template>
  <div class="audio">
    <router-link class="login" to="/login">
      <div class="wode">
        <i class="iconfont icon-wode"></i>
      </div>
      <div class="text">登录发广播</div>
    </router-link>
    <div class="contentBox" v-for="(item,index) in list" :key="index">
      <div class="infoBox">
        <div class="imgBox">
          <i class="iconfont icon-douban"></i>
        </div>
        <div class="info">
          <div class="user">
            <span> {{item.title}} </span>
            写了日记
          </div>
          <div class="time">{{item.time}}</div>
        </div>
        <div class="content">
          <div class="title">{{item.topic_title}}</div>
          <div class="text"><img :src="item.img_url" alt=""></div>
        </div>
        <div class="btnBox">
          <div class="left">
            <a href="">
              <i class="iconfont icon-buoumaotubiao18"></i>
              <span>{{item.dz}}</span>
            </a>
            <a href="">
              <i class="iconfont icon-pinglun"></i>
              <span>{{item.pl}}</span>
            </a>
            <a href="">
              <i class="iconfont icon-fenxiang_2"></i>
              <span>{{item.fx}}</span>
            </a>
          </div>
          <a href="" class="more">
            ···
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[]
    }
  },
  mounted(){
    this.$axios.get('/data/radio.json').then(res=>{
      this.list=res.data.radio_list
    })
  }
};
</script>

<style lang="scss" scoped>
.audio {
  padding-top: 0.45rem;
  font-size: 0.14rem;
  color: #bababa;
}
.btnBox{
  padding: 0.1rem;
  span{
    padding: 0.05rem;
  }
  a{
    color: #bababa;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left{
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
  .more{
    font-size: 0.2rem;
  }
}
.contentBox {
  position: relative;
  padding: 0.15rem;
  padding-left: 0.7rem;
  .imgBox {
    position: absolute;
    left: 0.2rem;
    top: 0.16rem;
    text-align: center;
    width: 0.35rem;
    height: 0.35rem;
    background: linear-gradient(to bottom, #04d510, #07ac12);
    border-radius: 50%;
    i {
      display: block;
      margin-top: 0.01rem;
      font-size: 0.3rem;
      color: #fff;
    }
  }
  .info {
    span {
      color: #000;
    }
    .time {
      font-size: 0.12rem;
      padding-top: 0.02rem;
    }
  }
  .content {
    margin: 0.1rem;
    padding: 0.1rem;
    background: #f9f9f9;
    .title {
      color: #000;
    }
    .text {
      margin-top: 0.05rem;
      font-size: 0.12rem;
    }
  }
}
.login {
  border-bottom: #eeeeee 1px solid;
  display: flex;
  align-items: center;
  font-size: 0.14rem;
  padding: 0.1rem 0.15rem;
  .wode {
    position: relative;
    width: 0.35rem;
    text-align: center;
    height: 0.35rem;
    background: #dddddd;
    border-radius: 50%;
    overflow: hidden;
    i {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -30%);
      position: absolute;
      font-size: 0.3rem;
      color: #fff;
    }
  }

  .text {
    padding-left: 0.1rem;
    color: #bababa;
  }
}
</style>