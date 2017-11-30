<template>
  <div>
    <!--<div class="login-wrap" >-->
      <!--<h3>登录</h3>-->
      <!--<p v-show="showTishi">{{tishi}}</p>-->
      <!--<input type="text" placeholder="请输入用户名" v-model="username">-->
      <!--<input type="password" placeholder="请输入密码" v-model="password">-->
      <!--<button v-on:click="login">登录</button>-->
      <!--<span v-on:click="ToRegister">没有账号？马上注册</span>-->
    <!--</div>-->

    <!--<div class="register-wrap" v-show="showRegister">-->
      <!--<h3>注册</h3>-->
      <!--<p v-show="showTishi">{{tishi}}</p>-->
      <!--<input type="text" placeholder="请输入用户名" v-model="newUsername">-->
      <!--<input type="password" placeholder="请输入密码" v-model="newPassword">-->
      <!--<button v-on:click="register">注册</button>-->
      <!--<span v-on:click="ToLogin">已有账号？马上登录</span>-->
    <!--</div>-->

    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <input type="text" placeholder="请输入用户名" v-model="newUsername">
      <input type="password" placeholder="请输入密码" v-model="newPassword">
      <button v-on:click="register">注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        username:'',
        password:'',
        tishi:'',
        newUsername:'',
        newPassword:'',
        showLogin:true,
        showRegister:false

      }
    },

    methods:{
      login(){
        if(this.username =="" || this.password ==""){
          alert("请输入正确的用户名或密码")
        }
      },
      register(){
        if(this.newUsername == "" || this.newPassword == ""){
          alert("请输入用户名或密码")
        }
      },
      ToRegister(){
        this.showLogin = false;
        this.showRegister=true;
      },
      ToLogin(){
        this.showLogin = true;
        this.showRegister=false;
      }
    }

  }

</script>

<style>
  .login-wrap {
    text-align: center;
  }

  input {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #888;
    padding: 10px;
    box-sizing: border-box;
  }

  p {
    color: red;
  }

  button {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    border: none;
    background-color: #41b883;
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
  }

  span {
    cursor: pointer;
  }

  span:hover {
    color: #41b883;
  }
</style>
