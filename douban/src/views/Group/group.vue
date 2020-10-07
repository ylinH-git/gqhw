<template>
  <div class="groups">
    <div class="group" v-for="(item, index) in list" :key="index">
      <div class="gname">{{ item.title }}</div>
      <ul>
        <li v-for="(gitem, gindex) in item.group_list" :key="gindex">
          <a href="#">
            <div class="title">
              <div class="left">
                <img :src="gitem.img_url" alt="" />
                <div class="name">{{ gitem.group_name }}</div>
              </div>
              <div class="num">{{ gitem.group_member }}</div>
            </div>
            <div class="text">{{ gitem.topic_title }}</div>
          </a>
        </li>
        <li><a href="#" class="more">更多相关小组</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.$axios.get("/data/groupData.json").then((res) => {
      console.log(res);
      this.list = res.data.group;
    });
  },
};
</script>

<style lang="scss" scoped>
.groups {
  padding-top: 0.45rem;
}
.group {
  padding: 0.2rem;
  padding-right: 0;
  .gname{
    color: #000;
  }
}
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    img{
      width: 0.4rem;
      height:0.4rem;
    }
    display: flex;
    align-items: center;
    div{
      padding-left: 0.1rem;
      font-size: 0.14rem;
    }
  }
  .name{
    color: #000;
  }
  .num{
    font-size: 0.14rem;
    color:#dddddd;
  }

}
  .text{
    color:#bebebe;
    font-size: 0.12rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding:0.1rem 0;
  }
  li{
    margin-top: 0.15rem;
    list-style: none;
    border-bottom: 1px solid #f4f4f4;
    padding-right: 0.15rem;
  }
  li:last-child{
    border: 0;
    text-align: center;
  }
</style>