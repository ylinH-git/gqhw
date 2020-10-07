<template>
  <div class="loginBox">
    <a class="back" @click="goback">&times;</a>
    <h1>登录豆瓣</h1>
    <div class="warn">
      登录注册表示同意 <a href="#">豆瓣使用协议、隐私政策</a>
    </div>
    <div class="inputBox">
      <input type="text" placeholder="手机号/邮箱" class="tel" />
      <input type="password" placeholder="密码" />
      <button>登录</button>
      <div class="more">
        <div class="left">
          <router-link to="/login">免密码登录</router-link>
          <a href="#" class="hw">海外手机登录</a>
        </div>
        <a href="#" class="cg">验证码收不到?</a>
      </div>
    </div>
    <div class="dsf">
      <div class="dsftitle">第三方登录</div>
      <div>
        <a href="#"><i class="iconfont icon-weibo"></i></a>
        <a href="#"><i class="iconfont icon-weixin"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.push('/audio');
    },
  },
};
</script>

<style lang="scss" scoped>
.loginBox {
  position: relative;
  padding: 0.4rem 0.15rem;
  font-size: 0.14rem;
}
.dsf {
  margin-top: 1rem;
  height: 1.5rem;
  text-align: center;
  .dsftitle {
    padding-bottom: 0.2rem;
    width: 100%;
    font-size: 0.12rem;
    color: #c3c3c3;
  }
  & > div:last-child {
    width: 100%;
    display: flex;
    justify-content: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0rem 0.01rem 0.01rem #dbdbdb;
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 50%;
      margin: 0 0.2rem;
      i {
        font-size: 0.25rem;
      }
    }
  }
}
.back {
  position: absolute;
  left: 0.1rem;
  top: 0.05rem;
  font-size: 0.3rem;
  color: #6d6d6d;
}
h1 {
  font-size: 0.3rem;
  color: #000;
  text-align: center;
}
.warn {
  text-align: center;
  padding: 0.05rem;
}
.inputBox {
  margin-top: 0.3rem;
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
}
input,
button {
  box-sizing: border-box;
  padding: 0.05rem;
  height: 0.4rem;
  margin: 0.05rem;
  display: block;
  border: 1px solid #dddddd;
  width: 98%;
}
.qh {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  font-size: 0.13rem;
  font-weight: bold;
  border-right: 1px solid #eff1f0;
  padding-right: 0.1rem;
  line-height: 0.3rem;
}
.getyzm {
  font-size: 0.13rem;
  position: absolute;
  right: 0.15rem;
  top: 0.65rem;
}
button {
  margin-top: 0.1rem;
  border: 0;
  background: #a0deaa;
  color: #fff;
  border-radius: 0.03rem;
}
.more {
  margin-top: 0.15rem;
  width: 98%;
  display: flex;
  justify-content: space-between;
  a.cg {
    color: #000;
  }
  .hw{
    padding-left: 0.15rem;
  }
}
</style>