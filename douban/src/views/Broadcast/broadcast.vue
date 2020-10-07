<template>
  <div class="broadcast">
    <ul class="nav">
      <li v-for="(item, index) in navList" :key="index" :class="{on:$route.name==item.type}">
        <router-link :to="item.linkTo">{{item.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          type: "movie",
          name: "电影",
          linkTo: "/broadcast/movie",
        },
        {
          type: "read",
          name: "读书",
          linkTo: "/broadcast/read",
        },
        {
          type: "tv",
          name: "电视",
          linkTo: "/broadcast/tv",
        },
        {
          type: "city",
          name: "同城",
          linkTo: "/broadcast/city",
        },
        {
          type: "music",
          name: "音乐",
          linkTo: "/broadcast/music",
        },
      ],
    };
  },
  methods: {
    change() {},
  },
};
</script>

<style lang="scss" scoped>
.broadcast {
  padding-top: 0.45rem;
}
.nav {
  display: flex;
  li {
    border-bottom: 1px solid #f6f6f6;
    width: 100%;
    line-height: 0.3rem;
    text-align: center;
  }
  a {
    color: #9e9d9d;
    font-size: 0.12rem;
  }
  .on {
    background: #07d614;
    border-bottom: 1px solid #07d614;
    a {
      color: #fff;
    }
  }
}
</style>