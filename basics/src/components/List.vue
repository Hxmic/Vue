<template>
  <div class="el_city_list">
    <header class="el_header box">
      <router-link :to="{name:'home'}">
        <div class="el_logo">饿了么</div>
      </router-link>
      <div class="el_info">{{title}}</div>
      <router-link :to="{name:'login'}">
        <div class="el_login">登录|注册</div>
      </router-link>
    </header>
    <div class="el_current_city">
      <p>当前定位城市</p>
      <span>定位不准时，请在列表中选择</span>
    </div>
    <div class="el_current_city_name">
      <router-link :to="{name:'CitySearch',params:{CitySearchId:currentCityId}}">
        <p class="el_current_name">{{currentCity}}</p>
        <p class="icon el-icon-arrow-right"></p>
      </router-link>
    </div>
    <div class="el_hot_city">
      <p class="el_hot_city_name">热门城市</p>
      <div class="el_hot_city_table">
        <div class="el_hot_city_wrap" v-for="x in hotCity">
          <router-link :to="{name:'CitySearch',params:{CitySearch:x.id}}">
            {{x.name}}
          </router-link>
        </div>
      </div>
    </div>
    <div class="el_hot_city el_city_list" v-for="(key,value) in sortCity">
      <p class="el_hot_city_name">{{value}}</p>
      <div class="el_hot_city_table">
        <div class="el_hot_city_table">
          <div class="el_hot_city_table">
            <div class="el_hot_city_wrap" v-for="x in key">
              <router-link class="link" :to="{name:'CitySearch',params:{CitySearchId:x.id}}" :key="x.id">
                {{x.name}}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        title:'',
        currentCity:'',
        hotCity:[],
        cityList:[],
        currentCityId:'',
      };
    },
    methods:{
      getCurrentCity(){
        this.axios.get('/vl/cities?type=guess')
          .then((res)=>{
            this.currentCity = res.data.name;
            this.id = res.data.id;
            this.currentCityId = res.data.id;
          });
      },
      getHotCity(){
        this.axios.get('/vl/cities?type=hot')
          .then((res)=>{
          this.hotCity = res.data;
          });
      },
      getCityList(){
        this.axios('/vl/cities?type=group')
          .then((res)=>{
            this.cityList = res.data;
          })
      },
    },
    computed:{
      sortCity(){
        let sortobj = {};
        for(let i = 65;i<=90;i++){
          if(this.cityList[String.fromCharCode(i)]){
            sortobj[String.fromCharCode(i)] = this.cityList[String.fromCharCode(i)];
          }
        }
        return sortobj;
      },
    },
    mounted(){
      this.getCurrentCity();
      this.getHotCity();
      this.getCityList();
    }

  }

</script>

<style scoped >
  @import '../assets/stylesheets/list.css';
</style>


