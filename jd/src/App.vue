<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>
<script>
import { Utils } from "./lib/utils";
import Footer from "./components/footer";
import Header from "./components/header";
export default {
  methods: {},
  data() {
    return {};
  },
  components: {
    myFooter: Footer,
    myHeader: Header,
  },
  mounted() {
    Utils.setRem();
  },
};
</script>

<style lang="scss">
@import url("./lib/common.css");
body {
  font-size: 0.16rem;
}
#app {
  width: 3.75rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  background: #f5f5f5;
}
#appcontent{
  height: 100%;
}
header .imgBox {
  position: absolute;
  right: 0.05rem;
  top: 0.06rem;
  display: flex;
  align-items: center;
  img {
    margin-right: 0.1rem;
    width: 0.3rem;
  }
}
</style>
