<template>
  <footer>
    <ul>
      <li v-for="(item, index) in navList" :key="index" @click="changeActive(item)">
        <router-link :to="item.path" :class="{ on: item.isActive }" >
          <i :class="item.type"></i>
          <div>{{ item.name }}</div>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  props:["navList"],
  methods: {
      changeActive(i){
          this.$emit('getType',i)
          this.navList.forEach(item=>{
              item.isActive=false;
          })
          i.isActive=true;
      }
  },
};
</script>

<style lang="scss" scoped>
ul {
  background: #ffffff;
  position: fixed;
  bottom: -0.01rem;
  width: 3.75rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid #e9e9e9;
  padding-bottom: 0.05rem;
  z-index: 99;
}
i {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: url(../assets/images/ic_tab_home_normal.png) center center
    no-repeat;
  background-size: contain;
  &.broadcast {
    background: url(../assets/images/ic_tab_subject_normal.png) center center
      no-repeat;
    background-size: contain;
  }
  &.audio {
    background: url(../assets/images/ic_tab_status_normal.png) center center
      no-repeat;
    background-size: contain;
  }
  &.group {
    background: url(../assets/images/ic_tab_group_normal.png) center center
      no-repeat;
    background-size: contain;
  }
  &.mine {
    background: url(../assets/images/ic_tab_profile_normal.png) center center
      no-repeat;
    background-size: contain;
  }
}
a {
  color: #b4b4b4;
}
a.on {
  color: #42bd56;
  i {
    background: url(../assets/images/ic_tab_home_active.png) center center
      no-repeat;
    background-size: contain;
    &.broadcast {
      background: url(../assets/images/ic_tab_subject_active.png) center center
        no-repeat;
      background-size: contain;
    }
    &.audio {
      background: url(../assets/images/ic_tab_status_active.png) center center
        no-repeat;
      background-size: contain;
    }
    &.group {
      background: url(../assets/images/ic_tab_group_active.png) center center
        no-repeat;
      background-size: contain;
    }
    &.mine {
      background: url(../assets/images/ic_tab_profile_active.png) center center
        no-repeat;
      background-size: contain;
    }
  }
}
</style>