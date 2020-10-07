<template>
  <footer>
    <nut-tabbar
      @tab-switch="tabSwitch1"
      type="card"
      :tabbar-list="tabList1"
      :bottom="true"
    ></nut-tabbar>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      tabList1:[
        {
          'curr':true,
          'icon':require('@/assets/icon/icon-home.png'),
          'activeIcon':require('@/assets/icon/icon-home-active.png'),
        },
         {
          'curr':false,
          'icon':require('@/assets/icon/icon-catergry.png'),
          'activeIcon':require('@/assets/icon/icon-catergry-active.png'),
        },
         {
          'curr':false,
          'icon':require('@/assets/icon/icon-find.png'),
          'activeIcon':require('@/assets/icon/icon-find-active.png'),
        },
         {
          'curr':false,
          'icon':require('@/assets/icon/icon-cart.png'),
          'activeIcon':require('@/assets/icon/icon-cart-active.png'),
        },
         {
          'curr':false,
          'icon':require('@/assets/icon/icon-me.png'),
          'activeIcon':require('@/assets/icon/icon-me-active.png'),
        },
      ]
    };
  },
  methods: {
    tabSwitch1:function(value,index){
        console.log(index);
      },
  },
};
</script>

<style lang="scss">
footer .card {
    border-right: 0;
}
footer .icon-box {
  width: 100%;
}
footer .icon-box .icon {
    margin: 0 auto;
    width: 100%;
    height: 0.5rem;
    display: block;
    background-size: 100% 100%;
    background-position: center center;
}
footer .nut-tabbar {
    border: 0px;
    width: 100vw;
    display: flex;
    height: 70px;
    box-sizing: border-box;
    background: #fff;
    margin-top: 20px;
}
footer .tabbar-nav {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: #848484;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>