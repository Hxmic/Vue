<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name:'app',
    data(){
      return{
        msg:'hello world',
      }
    }
  }

</script>

<style>
  .slide-fade-enter-active{
    transition: all .1s ease;
  }
  .slide-fade-leave-active{
    transition: all .3s cubic-bezier(1.0,0.5,0.8,1.0);
  }

  .slide-fade-enter,.slide-fade-leave-active{
    transform: translateX(10px);
    opactity:0;
  }


</style>
