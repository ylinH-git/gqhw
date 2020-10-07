<template>
  <div class="about">
    <div class="manageBox">
      <a href="#" class="password">
        <i class="iconfont icon-suoding"></i>
        <div>密码管理</div>
      </a>
      <a href="#" class="bankCard">
        <i class="iconfont icon-yinhangka"></i>
        <div>银行卡管理</div>
      </a>
    </div>
    <ul>
      <li class="taller">
        <a href="">
          <div class="left">
            <i class="iconfont icon-lianluojilu"></i>
            <div>风险承受能力评估</div>
          </div>
          <i class="iconfont icon-arrow-right"></i>
        </a>
      </li>
       <li>
        <a href="">
          <div class="left">
            <i class="iconfont icon-17"></i>
            <div>安全保障</div>
          </div>
          <i class="iconfont icon-arrow-right"></i>
        </a>
      </li>
       <li class="taller">
        <a href="">
          <div class="left">
            <i class="iconfont icon-ziyuan"></i>
            <div>我的关注</div>
          </div>
          <i class="iconfont icon-arrow-right"></i>
        </a>
      </li>
       <li class="taller">
        <a href="">
          <div class="left">
            <i class="iconfont icon-bangzhu"></i>
            <div>帮助中心</div>
          </div>
          <i class="iconfont icon-arrow-right"></i>
        </a>
      </li>
       <li>
        <a href="">
          <div class="left">
            <i class="iconfont icon-ziyuan"></i>
            <div>关于我们</div>
          </div>
          <i class="iconfont icon-arrow-right"></i>
        </a>
      </li>
       <li>
        <a href="">
          <div class="left">
            <i class="iconfont icon-search"></i>
            <div>检查更新</div>
          </div>
          <i class="iconfont icon-arrow-right"></i>
        </a>
      </li>
       <li>
        <a href="">
          <div class="left">
            <i class="iconfont icon-zaixianlianxi"></i>
            <div>联系客服</div>
          </div>
          <i class="iconfont icon-arrow-right"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.about {
  padding-top: 0.45rem;
  a{
    font-size: 0.14rem;
  }
  .taller{
    margin-top: 0.15rem;
  }
  i {
    font-size: 0.20rem;
    &.icon-arrow-right {
      font-size: 0.16rem;
    }
  }
}
.manageBox {
  height: 0.8rem;
  display: flex;
  align-items: center;
  border-bottom: 0.01rem solid #eeeeee;
  & > a {
    width: 50%;
    text-align: center;
    div {
      padding-top: 0.05rem;
      color: #808080;
    }
    i {
      font-size: 0.25rem;
    }
  }
}
ul > li {
  list-style: none;
  padding: 0.15rem;
  border-bottom: 0.01rem solid #eeeeee;
  a {
    .left {
      display: flex;
      align-items: center;
      div {
        padding-left: 0.05rem;
        color: #808080;
      }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
