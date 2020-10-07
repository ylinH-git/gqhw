<template>
  <div id="app">
    <my-header
      :type="currPage"
      v-if="currPage == 'home' && $route.name != 'login'&& $route.name != 'loginbyzh'"
    ></my-header>
    <my-header
      :type="currPage"
      :headerName="currPageName"
      v-else-if="$route.name != 'login' && $route.name != 'loginbyzh'"
    >
      <div class="imgBox">
        <a href="#" v-for="(item, index) in currImg" :key="index"
          ><img :src="item" alt=""
        /></a>
      </div>
    </my-header>

    <router-view />

    <my-footer
      :navList="navList"
      @getType="getItem"
      v-if="$route.name != 'login' && $route.name != 'loginbyzh'"
    ></my-footer>
  </div>
</template>
<script>
import { Utils } from "./lib/utils";
import Footer from "./components/footer";
import Header from "./components/header";
export default {
  methods: {
    getItem(item) {
      this.currPage = item.type;
      this.currPageName = item.name;
      this.currImg = this.headerImg[this.currPage];
    },
  },
  data() {
    return {
      navList: [
        {
          type: "home",
          name: "首页",
          path: "/",
          isActive: true,
        },
        {
          type: "broadcast",
          name: "书影音",
          path: "/broadcast",
          isActive: false,
        },
        {
          type: "audio",
          name: "广播",
          path: "/audio",
          isActive: false,
        },
        {
          type: "group",
          name: "小组",
          path: "/group",
          isActive: false,
        },
        {
          type: "mine",
          name: "我的",
          path: "/mine",
          isActive: false,
        },
      ],
      currPath: "",
      currPage: "home",
      currPageName: "书影音",
      headerImg: {
        broadcast: [
          require("@/assets/images/ic_actionbar_search_icon.png"),
          require("@/assets/images/ic_chat_green.png"),
        ],
        group: [
          require("@/assets/images/ic_actionbar_search_icon.png"),
          require("@/assets/images/ic_chat_green.png"),
        ],
        mine: [require("@/assets/images/ic_settings.png")],
        audio: [
          require("@/assets/images/ic_status_search_user.png"),
          require("@/assets/images/ic_chat_green.png"),
        ],
      },
      currImg: [
        require("@/assets/images/ic_status_search_user.png"),
        require("@/assets/images/ic_chat_green.png"),
      ],
    };
  },
  components: {
    myFooter: Footer,
    myHeader: Header,
  },
  mounted() {
    Utils.setRem();
  },
  watch: {
    $route() {
      this.navList.forEach((item) => {
        if (this.$route.path.indexOf(item.path)!=-1&&item.path!='/') {
          this.currPage = item.type;
          this.currPageName=item.name;
          item.isActive=true;
        }else if(this.$route.path==item.path){
           this.currPage =  "home";
          item.isActive=true;
        }else{
          item.isActive=false;
        }
      });
    },
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
