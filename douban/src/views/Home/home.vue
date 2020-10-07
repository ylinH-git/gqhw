<template>
  <div class="home">
    <my-banner swiperId='swiper1'>
      <template #swiperImg>
        <div class="swiper-slide">
          <img src="@/assets/images/banner/01.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/banner/02.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/banner/03.jpg" alt="" />
        </div>
      </template>
    </my-banner>
    <news-list :newsList="newsList"></news-list>
  </div>
</template>

<script>
import myBanner from "@/components/banner";
import NewsList from '@/components/newsList'
export default {
  components: {
    myBanner,NewsList
  },
  mounted(){
    this.$axios.get('data/homeData.json').then(res=>{
      this.newsList=res.data.recommend_feeds
      console.log(this.newsList)
    }).catch(err=>{
      console.log(err)
    })
  },
  data(){
    return{
      newsList:[]
    }
  }
};
</script>
<style lang="scss" scoped>
.home{
   padding-top: 0.45rem;
}
</style>
