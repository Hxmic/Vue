<template>
  <div class="search_list">
    <header class="el_header box el_city_search">
      <router-link to="/">
          <div class="el_logo el-icon-arrow-left"></div>
      </router-link>
      <router-link to="/">
          <div class="el_info">{{title}}</div>
      </router-link>
      <router-link to="/">
          <div class="el_login">切换城市</div>
      </router-link>
    </header>
    <div class="el_search_input_content">
      <el-input v-model="input" placeholder="输入学校、商务楼、地址"></el-input>
      <div class="el_btn_wrap">
        <el-button type="primary" @click = 'getSearchResult()'>搜索</el-button>
      </div>
    </div>
    <div class="el_search_result">
      <div class="el_search_history" v-show="history">
        搜索历史
      </div>
      <div class="el_search_result_content"  v-for="x in searchResult">
        <router-link :to="{ name: 'shop_geo', params: { shop_geo: x.geohash }}">
          <div class="el_search_result_content_detail">
            <h3 class="el_search_result_title">{{x.name}}</h3>
            <p class="el_search_result_address">{{x.address}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        title:'',
        input:'',
        history:false,
        searchResult:[],
      };
    },
    methods:{
      getCitySearch(){
        this.axios.get('/vl/cities/' + this.$route.params.CitySearchId)
          .then((res)=>{
            this.title = res.data.name;
          });
      },
      getSearchResult(){
        this.axios('bgs/poi/search_poi_nearby?keyword='+this.input + '&offset=0&limit=20')
          .then((res)=>{
            this.searchResult = res.data;
          });
      },
    },
    mounted(){
      this.getCitySearch();
    }
  }

</script>

<style scoped>
  @import '../assets/stylesheets/search.css';
</style>
