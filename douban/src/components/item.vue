<template>
  <div class="item" @click="">
      <template v-if="!flag">
          <slot name="defaultImg"></slot>
      </template>
      <template v-if="flag">
          <slot name="activeImg"></slot>
      </template>
      <span :ckass="{active:flag}"></span>
  </div>
</template>

<script>
export default {
    props:['mark','curr'],
    computed:{
        flag(){
            if(this.mark==this.curr){
                return true;
            }
        }
    }
}
</script>

<style>

</style>