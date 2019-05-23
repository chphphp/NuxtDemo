<template>
  <div :class="topClass" ref="top">
    <h1 class="top-bar-left none-select">
      <img class="top-bar-logo" src="/img/logo-2.png" alt="水象分期">
    </h1>
    <div class="top-bar-right">
      <el-row class="menu-list" type="flex" justify="space-between">
        <el-col :span="4" class="menu-list-item" :class="{'active': idx == 1}">
          <div >
            <a href="/" class="hover-style">首页</a>
            <p class="menu-line" v-if="idx == 1"></p>
          </div>
        </el-col>
        <el-col :span="4" class="menu-list-item" :class="{'active': idx == 3}">
          <div class="hover-style" @click="linkPage(3)">
            水象公益
            <p class="menu-line" v-if="idx == 3"></p>
          </div>
        </el-col>
        <!-- :class="{'fadeInDown':isShowProduct,'fadeOutDown':!isShowProduct}" -->
        <el-col :span="4" class="menu-list-item" :class="{'active': idx == 4}">
          <div class="hover-style" @click="linkPage(4)">
            招贤纳士
            <p class="menu-line" v-if="idx == 4"></p>
          </div>
        </el-col>
        <el-col :span="4" class="menu-list-item" :class="{'active': idx == 5}">
          <div class="hover-style" @click="linkPage(5)">

            关于我们

            <p class="menu-line" v-if="idx == 5"></p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  props: ["idx"],
  data() {
    return {
      isShowProduct: false,
      isMobile:123,
      topClass:'top-bar'
    };
  },
  created() {

  },
  beforeMount(){
    this.isMobile=!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    this.topClass=''
    this.topClass = this.isMobile ? 'm-top-bar':'top-bar'

  },
  updated(){

  },
  methods: {
    linkPage(n) {
      if (n == 1) {
        window.open('http://www.sxfq.com/');
      }else if (n == 3) {
         window.open('http://gy.sxfq.com/');
      } else if (n == 4) {
         window.open('http://zp.sxfq.com');
      } else if (n == 5){
         window.open('http://ab.sxfq.com');
      }
    },
    showProduct() {
      this.isShowProduct = true;
    },
    hideProduct() {
      this.isShowProduct = false;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/base.scss";
.top-bar:hover,.m-top-bar:hover{
  background-color: #21252F;
}

.top-bar,.m-top-bar {
  a{
    color:white;
  }
  .el-row{
    display: flex;
    justify-content: space-around;
  }
  position: absolute;
  width: 100%;
  height: 55px;
  left: 0;
  top: 0;
  z-index: 100;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  // pointer-events: none;
  // -webkit-user-select: none;
  // -moz-user-select: none;
  // -ms-user-select: none;
  // user-select: none;
  padding-top: 20px;
  padding-left: 50px;
  background-color: #21252F;
  &-left {
    float: left;
    .top-bar-logo {
      width: 200px;
    }
  }
  &-right {
    float: right;
    margin-right: 100px;
    width: 600px;
    .menu-list {
      color: #ffffff;
      font-size: 16px;
      &-item {
        cursor: pointer;
        & > div {
          width: 100px;
          text-align: center;
        }
      }
      .active {
        color: $primaryColor;
      }
      .menu-line {
        width: 26px;
        height: 5px;
        border-radius: 2.5px;
        background-color: $primaryColor;
        margin: auto;
        margin-top: 8px;
      }
      .menu-index {
        width: 26px;
        height: 5px;
        border-radius: 2.5px;
        margin: auto;
        margin-top: 8px;
      }
    }
  }
  .product-menu {
    position: absolute;
    margin-left: -8px;
    width: 120px;
    background-color: rgba(33, 32, 31, 0.5);
    font-size: 14px;
    overflow: hidden;
    &-item {
      @include textAlign(40px);
      text-align: left;
      text-indent: 27px;
      & > a {
        color: #ffffff;
        text-decoration: none;
      }
      &>a:hover{
        color: $primaryColor;
      }
    }
  }
  .hover-style:hover{
    color: $primaryColor;
  }
}
.m-top-bar{
  padding: 0;
  height:100px;


  .top-bar-left{
    margin: 0 auto 20px;
    display: block;
    float: none;
    text-align: center;
    img{
      display: inline-block;
      margin-top: 20px;
    }
  }
  .top-bar-right{
    float: none;
    margin: 0;
    width:99%;
    .menu-list{
      font-size: 10px;

    }
    .hover-style{
      width:100%;
      line-height: 22px;
    }
  }
}
</style>
