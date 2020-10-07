<template>
  <header>
    <input type="text" placeholder="请输入你要查找的内容">
    <i class="searchicon"></i>
    <i class="jdlogo"></i>
    <a href="#" class="loginBtn">登录</a>
  </header>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 3.75rem;
  height: 0.45rem;
  z-index: 99;
}
input{
  position: absolute;
  top: 0.05rem;
  left: 0.15rem;
  border-radius: 0.2rem;
  height: 0.3rem;
  width: 80%;
  box-sizing: border-box;
  padding-left: 0.75rem;
}
.loginBtn{
  position: absolute;
  font-size: 0.13rem;
  color: #fff;
  right: 0.18rem;
  top: 0.1rem;
}
.jdlogo{
  position: absolute;
  top: 0.13rem;
  left: 0.3rem;
  width: 0.25rem;
  height: 0.25rem;
  background: url(../assets/icon/sprites.png) 0 0 no-repeat;
  background-size: 2rem 2rem;
}
.searchicon{
  position: absolute;
  left: 0.55rem;
  top: 0.1rem;
  width: 0.25rem;
  height: 0.25rem;
  background: url(../assets/icon/sprites.png) -0.58rem -1.1rem no-repeat;
  background-size: 2rem 2rem;
}
</style>