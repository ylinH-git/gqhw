<template>
  <div class="city">
    <ul v-for="(item, index) in cityList" :key="index">
      <li class="title">{{ item.title }}</li>
      <li v-for="(citem, cindex) in item.city_list" :key="cindex">
        <img :src="citem.img_url" alt="" />
        <div class="right">
          <div class="groupname">{{ citem.group_name }}</div>
          <div class="member">人数：{{ citem.group_member }}</div>
          <div class="time">时间：{{ citem.group_time }}</div>
          <div class="address">地址：{{ citem.group_address }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [],
    };
  },
  mounted() {
    this.$axios.get("/data/city.json").then((res) => {
      this.cityList = res.data.city;
    });
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding: 0.15rem;
  font-size: 0.14rem;
}
li {
  display: flex;
  font-size: 0.12rem;
  padding: 0.1rem;
  .right {
      padding-left: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    .groupname {
      font-size: 0.14rem;
    }
    div {
      padding-top: 0.05rem;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>