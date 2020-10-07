<template>
  <div class="home">
    <my-banner swiperId="swiper1">
      <template #swiperImg>
        <div class="swiper-slide">
          <img src="@/assets/img/1.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/2.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/3.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/4.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/5.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/6.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/7.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/8.jpg" alt="" />
        </div>
      </template>
    </my-banner>
    <div class="navbar">
      <nut-row>
        <nut-col :span="6" v-for="(item, index) in navList" :key="index">
          <a href="#" class="flex-content">
            <img :src="item.url" alt="" />
            <div>{{ item.name }}</div>
          </a>
        </nut-col>
      </nut-row>
    </div>
    <img src="@/assets/img/fuli.jpg" alt="" class="fuli" />
    <div class="msBox">
      <nut-row align="center" class="title">
        <nut-col :span="8">
          <div class="flex-content zsms">
            <a href="">
              <img src="@/assets/icon/seckill-icon.png" alt="" />
              <div>掌上秒杀</div>
            </a>
          </div>
        </nut-col>
        <nut-col :span="10">
          <div class="flex-content time">
            <nut-countdown :start-time="cd.cdate" :end-time="cd.edate">
            </nut-countdown>
          </div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content lfm">
            <a href="">京选轮番秒</a>
          </div>
        </nut-col>
      </nut-row>
      <nut-row class="items">
        <nut-col :span="6" v-for="(item, index) in msList" :key="index">
          <div class="flex-content">
            <img :src="item.imgUrl" alt="" />
            <div class="xj">&yen;{{ item.xj }}</div>
            <div class="yj">&yen;{{ item.yj }}</div>
          </div>
        </nut-col>
      </nut-row>
    </div>
    <img src="@/assets/img/aishenghuo.jpg" alt="" class="ash" />
    <nut-row class="zx">
      <nut-col class="left" :span="12">
        <a href="" class="flex-content">
          <img src="@/assets/img/cp1.jpg" alt="" />
        </a>
      </nut-col>
      <nut-col class="right" :span="12">
        <div class="flex-content">
          <nut-row>
            <nut-col :span="24">
              <a href="" class="flex-content">
                <img src="@/assets/img/cp2.jpg" alt="" />
              </a>
            </nut-col>
          </nut-row>
          <nut-row class="rbottom">
            <nut-col :span="24">
              <a href="" class="flex-content">
                <img src="@/assets/img/cp3.jpg" alt="" />
              </a>
            </nut-col>
          </nut-row>
        </div>
      </nut-col>
    </nut-row>
    <div class="tjtitle">
      <div class="icon">
        <nut-icon type="top" color="#a0a3a6" size="0.1rem"></nut-icon>
      </div>
      <div class="text">为您推荐</div>
    </div>
    <nut-row class="goods" :gutter="2">
      <nut-col :span="12" v-for="(item, index) in goodList" :key="index">
        <div class="flex-content">
          <a href="#" class="item">
            <img :src="item.imgUrl" alt="" />
            <div class="title">{{ item.title }}</div>
            <div class="value">&yen;{{ item.price }}</div>
            <div class="hpBox">
              <span>好评率{{ item.hp }}</span>
              <a href="#" class="看相似">看相似</a>
            </div>
          </a>
        </div>
      </nut-col>
    </nut-row>
    <div class="dbBox">
      <nut-row class="dbtop" justify="center">
        <nut-col :span="6">
          <div class="flex-content">
            <a href="#">登录</a>
          </div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">
            <a href="#">注册</a>
          </div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">
            <a href="#">反馈</a>
          </div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">
            <a href="#">返回顶部</a>
          </div>
        </nut-col>
      </nut-row>
      <nut-row class="dbcenter" justify="center">
        <nut-col :span="8">
          <div class="flex-content">
            <a href="#">
              <i class="khd"></i>
              <div>客户端</div>
            </a>
          </div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content">
            <a href="#">
              <i class="cp"></i>
              <div>触屏版</div>
            </a>
          </div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content">
            <a href="#">
              <i class="dn"></i>
              <div>电脑版</div>
            </a>
          </div>
        </nut-col>
      </nut-row>
      <nut-row class="dbbottom">
        <nut-col :span="24">
          <div class="flex-content">
            Copyright &copy; 2004-2018 京东JD.com 版权所有
          </div>
        </nut-col>
      </nut-row>
    </div>
  </div>
</template>

<script>
import myBanner from "@/components/banner";
export default {
  components: {
    myBanner,
  },
  mounted() {},
  data() {
    return {
      goodList: [
        {
          imgUrl: require("@/assets/img/item01.jpg"),
          title: "晋腾家用不锈钢手动压面机手摇多功能面条机水果榨汁机sdsdfsdf",
          price: 99,
          hp: "94%",
        },
        {
          imgUrl: require("@/assets/img/item02.jpg"),
          title: "品柜 连衣裙长袖2018春装新款韩版时尚女装修身显瘦sdfsdfsafsdf",
          price: 198,
          hp: "99%",
        },
        {
          imgUrl: require("@/assets/img/item03.jpg"),
          title: "LG 29WK600-W 29英寸21:9 超宽屏 FHD FreeSynsdjfksdfasdfsadf",
          price: 1988.0,
          hp: "99%",
        },
        {
          imgUrl: require("@/assets/img/item04.jpg"),
          title: "劲仔小鱼 鱼干鱼仔 零食 香辣味 15g*20包/盒",
          price: 23.8,
          hp: "99%",
        },
      ],
      cd: {
        cdate: Date.now(),
        edate: Date.now() + 86400000,
      },
      navList: [
        {
          url: require("@/assets/icon/nav0.png"),
          name: "分类查询",
        },
        {
          url: require("@/assets/icon/nav1.png"),
          name: "物流查询",
        },
        {
          url: require("@/assets/icon/nav2.png"),
          name: "购物车",
        },
        {
          url: require("@/assets/icon/nav3.png"),
          name: "我的京东",
        },
        {
          url: require("@/assets/icon/nav4.png"),
          name: "京东生鲜",
        },
        {
          url: require("@/assets/icon/nav5.png"),
          name: "领券中心",
        },
        {
          url: require("@/assets/icon/nav6.png"),
          name: "京东超市",
        },
        {
          url: require("@/assets/icon/nav7.png"),
          name: "我的关注",
        },
      ],
      msList: [
        {
          imgUrl: require("@/assets/img/pro01.jpg"),
          yj: 150,
          xj: 80,
        },
        {
          imgUrl: require("@/assets/img/pro02.jpg"),
          yj: 30,
          xj: 10,
        },
        {
          imgUrl: require("@/assets/img/pro03.jpg"),
          yj: 100,
          xj: 40,
        },
        {
          imgUrl: require("@/assets/img/pro04.jpg"),
          yj: 140,
          xj: 80,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.dbBox {
  background: #fff;
  & > .nut-row {
    border-top: 1px solid #c3c3c3;
    .flex-content {
      display: flex;
      justify-content: center;
    }
  }
}
.dbtop {
  & > div {
    margin: 0.2rem 0;
    text-align: center;
    border-right: 1px solid #e0e0e0;
    a {
      color: #85878a;
    }
  }
  & > div:last-child {
    border: 0;
  }
}
.dbcenter {
  & > div {
    margin: 0.1rem 0;
    a {
      color: #494949;
    }
  }
}
.dbbottom {
  font-size: 0.14rem;
  line-height: 0.3rem;
}
.goods .item {
  display: block;
  margin-bottom: 0.1rem;
  border: 1px solid #dcddde;
  width: 99%;
  font-size: 0.14rem;
  .title {
    margin: 0.05rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #000;
  }
  .value {
    padding: 0.05rem;
    font-size: 0.14rem;
    font-weight: bold;
    color: #f23b3c;
  }
  .hpBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.05rem;
    padding-bottom: 0.1rem;
    font-size: 0.12rem;
    span {
      color: #aba9ad;
    }
    a {
      color: #6c6c6c;
      border: 1px solid #cfcfd0;
      padding: 0.03rem;
      border-radius: 0.05rem;
    }
  }
}
.zx {
  background: #fff;
  margin: 0.15rem 0.05rem;
  border: 1px solid #eaeaea;
  .left {
    border-right: 1px solid #c3c3c3;
  }
  .rbottom {
    border-top: 1px solid #c3c3c3;
  }
}
.ash {
  width: 100vw;
}
.fuli {
  width: 100vw;
  margin-top: 0.03rem;
}
.navbar .nut-row {
  background: #fff;
  margin-top: 0.1rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #c0c0c0;
}
.navbar .flex-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.05rem;
  img {
    width: 60%;
  }
  div {
    padding-top: 0.05rem;
    color: #000;
    font-size: 0.14rem;
  }
}
.title {
  margin-bottom: 0.15rem;
}
.msBox {
  padding: 0.1rem;
  background: #fff;
  margin: 0.15rem 0.05rem;
  border: 1px solid #eaeaea;
}
.time {
  font-size: 0.25rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.zsms {
  a {
    display: flex;
    align-items: center;
    img {
      width: 20%;
    }
    div {
      padding-left: 0.1rem;
      font-size: 0.18rem;
      color: #d85a70;
    }
  }
}
.lfm {
  line-height: 0.26rem;
  font-size: 0.14rem;
  a {
    color: #f23837;
  }
}
.items {
  text-align: center;
  .xj {
    padding-top: 0.1rem;
    font-size: 0.18rem;
    font-weight: bold;
    color: #d8566c;
  }
  .yj {
    padding-top: 0.05rem;
    text-decoration: line-through;
    color: #7d7d7d;
    padding-bottom: 0.1rem;
  }
}
.icon {
  border: 1px solid #a0a3a6;
  height: 0.15rem;
  width: 0.15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.tjtitle {
  padding: 0.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    padding-left: 0.15rem;
    color: #a0a3a6;
  }
}
.khd {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: url("../../assets/icon/sprites.png") -1.8rem -1.05rem no-repeat;
  background-size: 3rem 3rem;
}
.cp {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: url("../../assets/icon/sprites.png") -1.2rem -1.05rem no-repeat;
  background-size: 3rem 3rem;
}
.dn {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: url("../../assets/icon/sprites.png") -0.6rem -1.05rem no-repeat;
  background-size: 3rem 3rem;
}
</style>
