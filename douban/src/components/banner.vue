<template>
  <div class="swiper-container" :class="swiperId">
    <div class="swiper-wrapper">
      <slot name="swiperImg"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div
      :class="{
        'swiper-pagination': paginationShow,
        ['swiper-pagination' + swiperId]: paginationShow,
      }"
    ></div>

    <!-- 如果需要导航按钮 -->
    <template v-if="swiperBtn">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  props: {
    swiperId: {
      type: String,
      default: "",
    },
    swiperBtn: {
      type: Boolean,
      default: false,
    },
    paginationShow: {
      type: Boolean,
      default: true,
    },
    paginationType: {
      type: String,
      default: "bullets",
    },
    effectType: {
      type: String,
      default: "slide",
    },
  },
  mounted() {
    new Swiper(`.${this.swiperId}`, {
      loop: true, // 循环模式选项
      effect: this.effectType,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination" + this.swiperId,
        type: this.paginationType
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style lang="scss">
.swiper-container img {
  display: block;
}
</style>