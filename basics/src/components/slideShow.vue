<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">

    <!--用于设置图片的轮播-->
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>


    <!--用于显示提示框，和手动切换图片（1,2，3,4）-->
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides" @click="goto(index)">
        <a :class="{on:index === nowIndex}">{{index + 1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:{
      slides:{
        type:Array,
        default:[]
      },
      inv:{
        type:Number,
        default:1000
      }
    },
    data(){
      //用于第一次显示的初始化
      return{
        nowIndex:0,
        isShow:true
      }
    },
    computed:{
      prevIndex(){
        if(this.nowIndex === 0){

          return this.slides.length - 1;
        }else {
          return this.nowIndex - 1;
        }
      },
      nextIndex(){
        if(this.nowIndex === this.slides.length-1){
          return 0;
        }else {
          return this.nowIndex + 1;
        }
      }
    },

    methods:{
      goto(index){
        //实现一个滑动显示的效果
        this.isShow = false;
        //用于设置图片滑动出来的时间是多久（初始化）
        setTimeout(()=>{
          this.isShow = true;
          this.nowIndex = index;
          this.$emit('onchange',index);
        },10)
      },
      //设置一个定时器，每隔一段时间，调用一次该goto方法
      runInv(){
        this.invID = setInterval(()=>{
          this.goto(this.nextIndex);
        },this.inv)
      },
      clearInv(){
        //clearInterval() 方法可取消由 setInterval() 设置的 timeout。
        clearInterval(this.invID);
      }
    },
    //初始化方法
    mounted(){
      this.runInv();
    }
  }
</script>


<style scoped>
  .slide-trans-enter-active {
    transition: all .5s;
  }

  .slide-trans-enter {
    transform: translateX(900px);
  }

  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }

  .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
  }

  .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }

  .slide-img {
    width: 100%;
  }

  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }

  .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }

  .slide-pages li {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }

  .slide-pages li .on {
    text-decoration: underline;
    color: red;
  }
</style>

