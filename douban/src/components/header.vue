<template>
  <header>
    <template v-if="type == 'home'">
      <div class="homeHeader">
        <input type="text" placeholder="影视 图片 唱片 小组等" />
        <i class="searchImg"></i>
        <a href="#" class="scanImg"></a>
        <a href="#" class="chat"></a>
      </div>
    </template>
    <template v-if="type != 'home'">
      <div class="otherHeader">
        {{ headerName }}
            <slot></slot>    
      </div>
    </template>
  </header>
</template>

<script>
export default {
  props: ["type", "headerName"],
};
</script>

<style lang="scss">
header {
  position: fixed;
  width: 3.75rem;
  height: 0.45rem;
  z-index: 99;
}
.homeHeader {
  position: relative;
  background: #48bd5a;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    height: 70%;
    width: 85%;
    border-radius: 0.05rem;
    box-sizing: border-box;
    padding-left: 0.6rem;
  }
  i.searchImg {
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    background: url(../assets/images/ic_group_search_small.png) center center
      no-repeat;
    background-size: contain;
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
  }
  a.chat {
    margin-left: 0.1rem;
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    background: url(../assets/images/ic_chat_white.png) center center no-repeat;
    background-size: contain;
  }
  a.scanImg {
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    background: url(../assets/images/ic_scan_gray.png) center center no-repeat;
    background-size: contain;
    position: absolute;
    right: 0.6rem;
    top: 0.1rem;
  }
}
.otherHeader {
  position: relative;
  background: #f7f7f7;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}
</style>