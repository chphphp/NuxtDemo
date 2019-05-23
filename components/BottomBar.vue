<template>
  <div :class="topClass">
    <div class="bottom-box">
      <div class="left-box fl">
        <p class="bottom-title">
          <a href="http://sxfq.com">水象分期</a>
        </p>
        <!-- <p class="bottom-detail">
          <i class="el-icon-location-outline"></i>
          公司总部：中国-上海</p> -->
        <p class="bottom-detail">
          <i class="el-icon-location-outline"></i>
          中国-武汉</p>
        <!-- <p class="bottom-detail">
          <i class="el-icon-location-outline"></i>
          分部：中国-北京</p> -->
        <!-- <p class="bottom-detail">
          <i class="el-icon-phone"></i>
          电话：400-999-8786</p> -->
      </div>
      <div class="center-box fl">
        <p></p>
      </div>
      <div class="right-box fr">
        <el-row class="menu-list">
          <el-col :span="6" class="menu-list-item">
            <p class="bottom-title">关于我们</p>
            <a class="bottom-detail" v-for="(item,idx) in aboutList" :key="idx"
             :href="item.link" target="_blank" :title="item.label">{{item.label}}</a>
          </el-col>
          <el-col :span="6" class="menu-list-item">
            <h2 class="bottom-title">友情链接</h2>
            <a class="bottom-detail" href="https://www.rong360.com/" >融360</a>
            <a class="bottom-detail" href="http://www.xin.xin/#/home" >芝麻信用</a>
            <a class="bottom-detail" href="https://www.jd.com/" >京东</a>
            <a class="bottom-detail" href="http://www.baofu.com/">宝付</a>
          </el-col>
        </el-row>
      </div>
    </div>
    <ul class="credentials">
      <li class="credentials-item" v-for="(item,idx) in credentials" :key="idx">
        <!-- <img :src="item.img" alt=""> -->
      </li>
    </ul>
    <!-- <p class="copyright">
      Copyright © 2018All Rights Reserved. <a @click="openPage('http://www.miitbeian.gov.cn')" href="javascript:void(0);" 
      target="_blank" title="沪ICP备16010991号-4" rel="nofollow">沪ICP备16010991号-4</a> 
    </p> -->
    <p class="company">
      <a href="http://www.beian.miit.gov.cn/" style="visibility: hidden">沪ICP备16010991号-4</a>
    </p>

  </div>
</template>
<script>
import bus from '~/assets/js/bus.js'
export default {
  data() {
    return {
      aboutList:[{
        label:'公司简介',
        link:'http://ab.sxfq.com/?index=0'
      },
      //  {
      //   label:'高管团队',
      //   link:'http://ab.sxfq.com/?index=1'
      // },
      {
        label:'团队介绍',
        link:'http://ab.sxfq.com/?index=1'
      },
      {
        label:'员工风采',
        link:'http://ab.sxfq.com/?index=2'
      }
      ,
      {
        label:'新闻中心',
        link:'/news/'
      },
      // {
      //   label:'联系我们',
      //   link:'/about?index=4'
      // }
      ],
      credentials: [
        {
          img: "/img/index/bot-1.png"
        },
        {
          img: "/img/index/bot-2.png"
        },
        {
          img: "/img/index/bot-3.png"
        },
        {
          img: "/img/index/bot-4.png"
        }
      ],
      gzhList:[{
        label:'水象商城公众号',
        erwm:'/img/index/erweima-sxfq.png',
        isShowQR:false
      },{
        label:'水象云SaaS公众号',
        erwm:'/img/index/erweima-sxy.png',
        isShowQR:false
      },{
        label:'水象云贷公众号',
        erwm:'/img/index/erweima-sxyd.png',
        isShowQR:false
      },{
        label:'水珠钱包公众号',
        erwm:'/img/index/erweima-szqb.png',
        isShowQR:false
      },],
      isShowQR0:false,
      isShowQR1:false,
      isShowQR2:false,
      isShowQR3:false,
      topClass:'bottom-bar',
      isMobile:123
    };
  },
  created(){

  },
  mounted(){
    this.isMobile=!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    this.topClass=' '
    this.topClass = this.isMobile ? 'm-bottom-bar':'bottom-bar'
    console.log(this.topClass)
    let ele = document.getElementsByTagName('body')[0]
    let script = document.createElement('script')
    script.innerHTML = `
       // 百度统计代码
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0da54b43954919aa2251a813870aa702";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
        // 百度自动推送代码
      (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
      })();


    `
    ele.appendChild(script)
  },
  methods: {
    showErwm(idx){
      this.gzhList[idx].isShowQR = true;
    },
    hideErwm(){
      this.gzhList.forEach(e => {
        e.isShowQR = false
      });
    },
    openPage(link){
      open(link)
    },
    goPage(link){
        window.open(link)
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/base";
$titleSize: 18px;
$textSize: 14px;
a{
  text-decoration: none;
}
.bottom-bar,.m-bottom-bar {
  width: 100%;
  padding: 50px 100px;
  background: $bgDeepColor;
  color: #ffffff;
  clear: both;
  .bottom-box {
    width: 1200px;
    margin: auto;
  }
  .bottom-title {
    font-size: $titleSize;
    line-height: 50px;
  }
  .bottom-detail {
    display: block;
    font-size: $textSize;
    line-height: 30px;
    color: $iconColor;
    cursor: pointer;
  }
  .right-box .bottom-detail:hover{
    color:$primaryColor;
  }
  .left-box {
    width: 400px;
  }
  .right-box {
    width: 500px;
    .QRcode{
      position: absolute;
      margin-left: 108px;
      margin-top: -68px;
      z-index: 9;
    }
  }

  .center-box {
    margin-left: 50px;
    p {
      width: 1px;
      height: 100px;
      margin-top: 40px;
      border-left: 1px solid $iconColor;
    }
  }
  .credentials{
    padding-top: 60px;
    clear: both;
    @include flexContainer();
    justify-content:center;
    margin-top: 60px;
    &-item{
      @include flexItem();
      margin: 0 20px;
    }
  }
  .copyright {
    margin-top: 30px;;
    @include textAlign(30px);
    font-size: 14px;
    color: $iconColor;
    &>a{
      color: $iconColor;
    }
    &>a:hover{
      color: $primaryColor;
    }
  }
  .company {
    @include textAlign(30px);
    font-size: 14px;
    color: $iconColor;
  }
}
  .m-bottom-bar{
    padding: 10px;
    text-align: center;
    .bottom-box{
      width:100%;
    }
    .left-box{
      width:100%;
      float: none;
    }
    .right-box{
      width:100%;
      float: none;
      .menu-list-item{
        width:50%;
      }
    }
    .center-box{
      width:90%;
      float: none;
      margin:40px auto;
      p{
        width: 100%;
        height: 1px;
        margin-top: 40px;
        border-bottom: 1px solid #999999;
      }
    }
  }
</style>
