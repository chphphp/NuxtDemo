<template>
    <div class="home">
        <div class="progress-box" v-if="isProgressAfter && false" :class="{'hide-progress':!isProgress}">
            <p class="progress-line"></p>
            <img class="progress-img" src="/img/index/logo-2.png" alt="">
        </div>
        <!--<header>-->
        <!--<Topbar v-show="!isProgress" :idx="1" class="animated fadeInDown"></Topbar>-->
        <!--</header>-->
        <section class="banner" :style="{'height':h}">
            <!-- <img v-show="!isProgress" class="banner-txt animated fadeInRight" src="/img/index/wenan.png" alt=""> -->
            <div v-show="!isProgress" class="wenan-box banner-txt animated fadeInUp">
                <h2 class="wenan-box-up">Data driven future , Credit is more valuable</h2>
                <h2 class="wenan-box-down">用数据驱动未来，让信用更具价值</h2>
            </div>
            <!-- <img src="/img/index/qiu.png" alt="" class="rotation"> -->
            <div class="masking"></div>
            <video id="video1" class="placeholder-ambient-video" autoplay="autoplay" playsinline=""
                   webkit-playsinline="" loop="" preload="auto" muted="" style="display: inline;">
                <source src="/img/947.mp4" type="video/mp4">
            </video>
        </section>
        <div class="productdes">
            <div class="productdes-title">
                <h2>我们的产品</h2>
                <p>提供多种场景下的解决方案</p>
            </div>
            <div class="warp">
                <div class="productdes-slide">
                    <div class="productdes-slide-main clearfix" ref="slideMain">
                        <div class="productdes-slide-main-list" v-for="(item,index) in productList" :key="index">
                            <div class="productdes-slide-main-list-left fl">
                                <h2>{{item.name}}</h2>
                                <div class="line"></div>
                                <div class="des">{{item.intro}}</div>
                                <!-- <div class="btns" >
                                   <a :href="item.link">查看详情</a>
                                </div> -->
                            </div>
                            <div class="productdes-slide-main-list-right fr">
                                <img :src="item.img" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="warp-left iconfont icon-sdf" @click="samemove('right')" @mousemove="hover('stop')" @mouseout="hover('auto')"></div>
                <div class="warp-right iconfont icon-arrow-right" @click="samemove('left')" @mousemove="hover('stop')" @mouseout="hover('auto')"></div>
                <ul class="warp-focus" ref="focus">
                   <li v-for="(item,inde) in 2" :key="inde" :class="index==inde?'active':''"></li>
                </ul> -->
            </div>

        </div>
        <!-- <section class="solve">
          <div class="section-container">
            <h2 class="section-container-label">我们的解决方案</h2>
            <p class="section-container-intro">在水象分期，你将领略到更加专业、合规、安全、稳定的行业解决方案</p>
            <el-row class="solve-list">
              <el-col class="solve-item animated fadeInUpBig" v-show="isShowSolve1" :span="6" v-for="(item,idx) in solveList1" :key="idx">
                <img class="solve-item-img" :src="item.img" alt="">
                <h3 class="solve-item-title">{{item.label}}</h3>
              </el-col>
              <el-col class="solve-item animated fadeInUpBig" v-show="isShowSolve2" :span="6" v-for="(item,idx) in solveList2" :key="'k'+idx">
                <img class="solve-item-img" :src="item.img" alt="">
                <h3 class="solve-item-title">{{item.label}}</h3>
              </el-col>
            </el-row>
          </div>
        </section> -->
        <section class="friends">
            <div class="section-container">
                <h2 class="section-container-label">战略合作伙伴</h2>
                <p class="section-container-intro">携手共赢，与大咖共建普惠生态</p>
                <ul class="friends-group">
                    <li class="friends-group-item animated fadeInUp" v-for="(item,idx) in friendList" :key="idx">
                        <img :src="item.img" alt="">
                    </li>
                </ul>
            </div>
        </section>
        <!--<footer>-->
        <!--<Bottombar></Bottombar>-->
        <!--</footer>-->
    </div>
</template>
<script>
    import Topbar from "~/components/TopBar.vue";
    import Bottombar from "~/components/BottomBar.vue";
    import bus from "~/assets/js/bus.js";
    import animate from "animate.css";
    import "~/assets/css/base.scss";
    import {setTimeout, setInterval, clearInterval} from 'timers';

    export default {
        head: {
            title: "水象分期-场景式消费+优质品牌特卖",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "水象分期是国内领先的大数据互联网信息平台，专注为用户提供信用消费和电商购物等服务，公司以互联网技术为依托、以用户为中心，通过大数据和人工智能系统，构建一条完整的互联网信息平台。"
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: "水象分期，大数据，购物消费"
                }
            ],
            link: [
                {rel: 'stylesheet', href: '//at.alicdn.com/t/font_649925_hwzdq5qoks8.css'},
            ],
        },
        components: {
            Topbar,
            Bottombar
        },
        computed: {},
        data() {
            return {
                index: 0,
                timer: '',
                activeIndex: "1",
                activeIndex2: "1",
                h: 0,
                progressNum: 0,
                isShowProduct: false,
                isShowSolve1: false,
                isShowSolve2: false,
                isShowFriends: false,
                isProgress: true,
                isProgressAfter: true,
                nowProduct: {
                    name: "水象分期",
                    intro:
                        "水象分期商城经过不断的业务深化发展，整合了多渠道商品、技术、服务等方面的资源，接入多个国内一线电商平台，十万级商品。水象分期通过优质的消费分期服务，使水象分期形成了“优质特卖+消费分期”的新型消费模式。满足了消费者对生活品质的追求，拥有全新的体验感。 随着业务持续深入发展，水象分期作为连接、贯穿跨场景的载体，不断丰富线上、线下场景体系，除了精心打造的水象分期商城品类不断扩容构建了多个领域的消费场景生态链，商品分类齐全，包括、服饰、美妆等与生活息息相关的各个方面。品质保证，确保低价，为用户提供性价比最高的商品消费一体化服务体验。水象分期商城，拥有丰富的商品，实惠的价格，让消费者花更少的钱，随时随地买到更多的品牌商品，提前一步享受科技带来的惊喜体验。我们也将努力发挥自身优势，在场景消费中连接更多品牌及消费者，为生态发展助力，为用户提供更加普惠、便捷、高效的服务。",
                    img: "/img/index/shuixiangfenqi.png",
                    link: "/shops"
                },
                productList: [
                    {
                        name: "水象分期",
                        intro:
                            "水象分期商城经过不断的业务深化发展，整合了多渠道商品、技术、服务等方面的资源，接入多个国内一线电商平台，十万级商品。水象分期通过优质的消费分期服务，使水象分期形成了“优质特卖+消费分期”的新型消费模式。满足了消费者对生活品质的追求，拥有全新的体验感。 随着业务持续深入发展，水象分期作为连接、贯穿跨场景的载体，不断丰富线上、线下场景体系，除了精心打造的水象分期商城品类不断扩容构建了多个领域的消费场景生态链，商品分类齐全，包括、服饰、美妆等与生活息息相关的各个方面。品质保证，确保低价，为用户提供性价比最高的商品消费一体化服务体验。水象分期商城，拥有丰富的商品，实惠的价格，让消费者花更少的钱，随时随地买到更多的品牌商品，提前一步享受科技带来的惊喜体验。我们也将努力发挥自身优势，在场景消费中连接更多品牌及消费者，为生态发展助力，为用户提供更加普惠、便捷、高效的服务。",
                        img: "/img/index/shop.png",
                        link: "/shops"
                    },
                    // {
                    //   name: "分七云",
                    //   intro:
                    //     "分七云平台是一款智能服务平台，以科技作为产品的创新理念，依托科技创新技术和大数据风控模型，帮助用户、合作方打造集流量、数据、风控、审核等为一体的高效、完善、正规服务体系。",
                    //   img: "/img/index/sxy.png",
                    //   link: "/sxy"
                    // },
                    // {
                    //   name: "水象云贷",
                    //   intro:
                    //     "水象云贷一款基于全业务流程风控体系的可视化大数据+机器学习平台。利用数据建设一个更安全的生态环境为目标，提供了一站式数据处理、AI建模、风险管理等服务，同时还能够智能识别各类欺诈风险，提升企业安全等级，减少损失。",
                    //   img: "/img/index/sxyd.png",
                    //   link: "sxyd"
                    // },
                    // {
                    //   name: "水珠钱包",
                    //   intro:
                    //     "水珠钱包是一款服务平台，致力于为用户和合作机构搭建一个安全、合规、便捷的桥梁。水珠钱包以用户为核心，利用智能学习技术，多维度、全方位为用户匹配最合适的产品。",
                    //   img: "/img/index/szqb.png",
                    //   link: "szqb"
                    // }
                ],
                solveList1: [
                    {
                        label: "大数据服务",
                        intro: "庞大互联网数据源，主力风险控制",
                        img: "/img/index/dashuju.png"
                    },
                    {
                        label: "AI风控决策",
                        intro: "强大的AI技术与海量基础数据，毫<br>秒级响应速度，精准反欺诈",
                        img: "/img/index/fengkong.png"
                    },
                    {
                        label: "智能用户评级",
                        intro: "多场景的评级模型、多重信用评估模块，<br>有效分析用户行为数据",
                        img: "/img/index/pingji.png"
                    },
                    {
                        label: "个性化定制",
                        intro: "个性化抓取用户数据，挖掘数据价值",
                        img: "/img/index/gexinghua.png"
                    }
                ],
                solveList2: [
                    {
                        label: "坐席服务",
                        intro: "自动化、规范化运转催收业务，<br>提升催收效果",
                        img: "/img/index/daihou.png"
                    },
                    {
                        label: "360º风险预警",
                        intro: "多平台预警模式，可信度分级变化预警，<br>全周期监控借贷风险",
                        img: "/img/index/fengxianyujing.png"
                    },
                    {
                        label: "精准城市定位",
                        intro: "智能匹配对应城市，让资金在周边流转",
                        img: "/img/index/dingwei.png"
                    },
                    {
                        label: "全套运营服务",
                        intro: "专业的运营团队，将流量最大化变现",
                        img: "/img/index/yunying.png"
                    }
                ],
                friendList: [
                    {
                        img: "/img/index/1.png"
                    },
                    {
                        img: "/img/index/1.png"
                    },
                    {
                        img: "/img/index/1.png"
                    },
                    {
                        img: "/img/index/1.png"
                    },
                    {
                        img: "/img/index/1.png"
                    },
                    {
                        img: "/img/index/1.png"
                    },
                    {
                        img: "/img/index/1.png"
                    },
                    {
                        img: "/img/index/1.png"
                    },
                    {
                        img: "/img/index/1.png"
                    },
                    {
                        img: "/img/index/1.png"
                    }
                ]
            };
        },
        created() {
            if (process.browser) {   //一定要判断是否支持window，因为这个是在node的环境下的
                // this.isPc();
            }
            this.getFriends();
        },
        mounted() {
            var _this = this;
            if (window.addEventListener) {
                this.$nextTick(function () {
                    window.addEventListener("scroll", onScroll);
                });
            } else {
                this.$nextTick(function () {
                    window.attachEvent("onscroll", onScroll);
                });
            }

            // 判断滚动条位置，加载更多
            function onScroll() {
                // var scrollTop =
                //   document.body.scrollTop || document.documentElement.scrollTop;
                // if (scrollTop > 500) {
                //   _this.isShowProduct = true;
                // }
                // if (scrollTop > 1300) {
                //   _this.isShowSolve1 = true;
                // }
                // if (scrollTop > 1600) {
                //   _this.isShowSolve2 = true;
                // }
                // if (scrollTop > 2200) {
                //   _this.isShowFriends = true;
                // }
            }

            //  function onScroll() {  //这个是sxfq.com
            //   var scrollTop =
            //     document.body.scrollTop || document.documentElement.scrollTop;
            //   if (scrollTop > 500) {
            //     console.log(1)
            //       _this.isShowSolve1 = true;
            //   }
            //   if (scrollTop > 800) {
            //       _this.isShowSolve2 = true;
            //   }
            //   if (scrollTop >1300) {
            //     _this.isShowFriends = true;
            //   }
            // }
            this.h = window.screen.availHeight + "px";
            if (sessionStorage.getItem("firstTime")) {
                this.isProgress = false;
                this.isProgressAfter = false;
            } else {
                setTimeout(() => {
                    this.isProgress = false;
                }, 3000);
                setTimeout(() => {
                    this.isProgressAfter = false;
                }, 4000);

                sessionStorage.setItem("firstTime", true);
            }
            //----------轮播图------------------
            this.auto();
        },
        destroyed() {
            clearInterval(this.timer);
        },
        methods: {
            isPc() {
                if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                    window.location.replace('http://m.waterelephant.cn/m');
                }
            },
            auto() {
                let _this = this;
                clearInterval(_this.timer); //要清除上一次的辊记
                this.timer = setInterval(() => {
                    this.samemove('left');
                }, 6000);
            },
            samemove(dir) {
                if (dir == 'left') {
                    this.index++;
                    if (this.index == 2) {
                        this.index = 0
                    }
                } else if (dir = 'right') {
                    this.index--;
                    if (this.index == -1) {
                        this.index = 1;
                    }
                }
                this.move(this.index);
            },
            move(index) {
                let ele =  this.$refs.focus.children;
                this.$refs.slideMain.style.left = -(this.index * 1000) + 'px';
                for (var n = 0; n < ele.length; n++) {
                    ele[n].className = '';
                }
                ele[this.index].className = 'active';
            },
            hover(on) {
                let _this = this;
                if (on == 'stop') {
                    clearInterval(_this.timer);
                } else if (on == 'auto') {
                    this.auto();
                }
            },
            linkSet() {
                this.$router.push({path: "/about"});
            },
            selectProduct(idx) {
                this.nowProduct = this.productList[idx];
            },
            getFriends() {
                this.friendList.forEach((e, idx) => {
                    e.img = `/img/index/${idx + 1}.png`;
                });
            },
        }
    };
</script>
<style lang="scss">
    @import "../assets/css/base";

    .el-row {
        display: flex;
        justify-content: space-between;
    }

    .home {
        width: 100%;
        overflow: hidden;
    }

    $lineh: 100px;
    .progress-box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background-color: rgba(33, 32, 31, 0.95);
        // &-item {
        //   position: fixed;
        //   width: 100%;
        //   height: $lineh;
        //   margin: auto;
        //   top: 50%;
        //   margin-top: -25px;
        //   border-radius: 0;
        //   // background-color: rgba(33, 32, 31, 0.95);
        //   // background-color: #fff;
        //   overflow: visible;
        //   .progress-line {
        //     height: $lineh;
        //     // background-color: rgba(33, 32, 31, 1);
        //     background-color: #0ff;
        //     -webkit-animation-fill-mode:forwards;
        //     animation-fill-mode:forwards;
        //     animation: progress 6s;
        //     z-index: 9999;
        //   }
        // }
        .progress-line {
            position: fixed;
            top: 44.5%;
            left: -50px;
            height: $lineh;
            // background-color: rgba(33, 32, 31, 1);
            background-color: $primaryColor;
            animation: progress 12s;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            z-index: 1111;
            -webkit-transform: skew(-20deg);
            -moz-transform: skew(-20deg);
            -o-transform: skew(-20deg);
            -ms-transform: skew(-20deg);
            transform: skew(-20deg);
        }

        .progress-img {
            position: absolute;
            width: 300px;
            left: 50%;
            margin-left: -150px;
            top: 48%;
            z-index: 7777;
        }
    }

    .hide-progress {
        animation: fadeOut 1s;
        animation-fill-mode: forwards;
    }

    .banner {
        position: relative;
        min-height: 800px;
        height: 100%;
        overflow: hidden;

        .wenan-box {
            color: #ffffff;
            font-size: 38px;
            line-height: 80px;

            &-up {
            }

            &-down {
                font-size: 28px;
            }
        }

        .banner-txt {
            width: 100%;
            text-align: center;
            position: absolute;
            top: 36%;
            z-index: 9;
        }

        // @media (max-width: 1500px) {
        //   .banner-txt {
        //     top: 38%;
        //     left: 50%;
        //     margin-left: 60px;
        //   }
        // }
        .placeholder-ambient-video {
            transform: scale(1);
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        // section .video-placeholder {
        //     position: absolute;
        //     left: 0;
        //     top: 0;
        //     width: 100%;
        //     height: 100%;
        //     -webkit-transform: scale(1.1);
        //     transform: scale(1.1);
        //     overflow: hidden;
        //     -webkit-transition: all 2.8s .2s ease-out,opacity 1.2s ease;
        //     transition: all 2.8s .2s ease-out,opacity 1.2s ease;
        //     transition-property: all, opacity;
        //     transition-duration: 2.8s, 1.2s;
        //     transition-timing-function: ease-out, ease;
        //     transition-delay: 0.2s, initial;
        // }
        .masking {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.75);
            -webkit-transition: all 0.8s ease;
            transition: all 0.8s ease;
            opacity: 0;
            pointer-events: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            /* background-color: rgba(33,32,31,0.6); */
            background-color: #1e2331;
            opacity: 0.8;
        }


        @mixin rotationAnimat($name,$time) {
            animation: $name $time linear infinite forwards;
            -moz-animation: $name $time linear infinite forwards;
            -webkit-animation: $name $time linear infinite forwards;
            -o-animation: $name $time linear infinite forwards;
        }
        @-webkit-keyframes clockwise {
            from {
                -webkit-transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(360deg);
            }
        }

        .rotation {
            width: 60%;
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -800px;
            z-index: 9;
            /* transform: translateY(-50%); */
            right: 40%;
            @include rotationAnimat(clockwise, 30s);
        }

        @media (max-width: 1500px) {
            .rotation {
                top: 0;
                margin-left: -600px;
            }
        }
        // .qiu:hover {
        //   /*-webkit-transform: rotateY( 360deg)*/
        //   animation: rotateImg 5s;
        // }

        @keyframes rotateImg {
            100% {
                -webkit-transform: rotate(270deg);
            }
        }
        // @-webkit-keyframes rotation {
        //   from {
        //     -webkit-transform: rotate(0deg);
        //   }
        //   to {
        //     -webkit-transform: rotate(360deg);
        //   }
        // }

        // .rotation:hover {
        //   /* -webkit-transform: rotate(360deg); */
        //   animation: rotation 5s linear infinite forwards;
        //   -moz-animation: rotation 5s linear infinite forwards;
        //   -webkit-animation: rotation 5s linear infinite forwards;
        //   -o-animation: rotation 5s linear infinite forwards;
        // }
        $largeNum: 1.3;
        @keyframes fadeOut {
            0% {
                display: block;
                opacity: 1;
            }
            100% {
                display: none;
                opacity: 0;
            }
        }
        @keyframes pulse {
            0% {
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
            }
            50% {
                -webkit-transform: scale3d($largeNum, $largeNum, $largeNum);
                transform: scale3d($largeNum, $largeNum, $largeNum);
            }
            100% {
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
            }
        }
        @keyframes progress {
            0% {
                width: 0%;
                height: $lineh;
            }
            15% {
                width: 25%;
                height: $lineh;
            }
            20% {
                width: 40%;
                height: $lineh;
            }
            25% {
                width: 50%;
                height: $lineh;
            }
            30% {
                width: 65%;
                height: $lineh;
            }
            45% {
                width: 75%;
                height: $lineh;
            }
            60% {
                width: 110%;
                height: $lineh;
                margin-top: 0;
                -webkit-transform: skew(-20deg);
                -moz-transform: skew(-20deg);
                -o-transform: skew(-20deg);
                -ms-transform: skew(-20deg);
                transform: skew(-20deg);
            }
            85% {
                -webkit-transform: skew(0);
                -moz-transform: skew(0);
                -o-transform: skew(0);
                -ms-transform: skew(0);
                transform: skew(0);
                height: 1500px;
                margin-top: -700px;
                opacity: 1;
            }
            100% {
                height: 1500px;
                margin-top: -700px;
                opacity: 0;
            }
        }
        @keyframes rubberBand {
            0% {
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
            }
            30% {
                -webkit-transform: scale3d(1.25, 0.75, 1);
                transform: scale3d(1.25, 0.75, 1);
            }
            40% {
                -webkit-transform: scale3d(0.75, 1.25, 1);
                transform: scale3d(0.75, 1.25, 1);
            }
            50% {
                -webkit-transform: scale3d(1.15, 0.85, 1);
                transform: scale3d(1.15, 0.85, 1);
            }
            65% {
                -webkit-transform: scale3d(0.95, 1.05, 1);
                transform: scale3d(0.95, 1.05, 1);
            }
            75% {
                -webkit-transform: scale3d(1.05, 0.95, 1);
                transform: scale3d(1.05, 0.95, 1);
            }
            100% {
                -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
            }
        }

        .timeline-glow {
            animation-name: timeline-glow;
            animation-duration: 2s;
            animation-timing-function: ease;
            animation-delay: initial;
            animation-iteration-count: infinite;
            animation-direction: initial;
            animation-fill-mode: initial;
            animation-play-state: initial;
        }

        h1 {
            animation: timeline-glow 2s ease infinite;
        }
    }

    .productdes {
        box-sizing: border-box;
        @include wh(100%, 970px);
        background-color: $bgColor;
        padding-top: 60px;

        &-title {
            @include textAlign(30px);
            margin-bottom: 120px;

            h2 {
                font-size: 30px;
                font-weight: 600;
                color: $titleColor;
            }

            p {
                font-size: 16px;
                line-height: 66px;
                color: $navColor;
            }
        }

        &-slide {
            position: relative;
            margin: 0px auto;
            @include wh(1000px, 650px);
            //  overflow: hidden;
            &-main {
                position: absolute;
                left: 0px;
                @include wh(4000px, 650px);

                &-list {
                    @include wh(1000px, 650px);
                    float: left;

                    &-left {
                        @include wh(400px, 650px);
                        // padding-top: 180px;
                        h2 {
                            @include style(30px, #333);
                        }

                        .line {
                            @include wh(30px, 3px);
                            background: #5c88fc;
                            margin: 30px 0px 60px 0px;
                        }

                        .des {
                            @include style(16px, #666);
                            line-height: 24px;
                        }

                        .btns {
                            a {
                                display: block;
                                margin-top: 50px;
                                @include wh(180px, 44px);
                                @include textAlign(44px);
                                background: #5c88fc;
                                @include style(16px, #fff);
                                border-radius: 22px;
                                cursor: pointer;
                                transition: all .6s linear;

                                &:hover {
                                    box-shadow: 10px 10px 16px #d1deff;
                                }
                            }
                        }
                    }

                    &-right {
                        height: 650px;
                        width: 550px;

                        img {
                            width: 550px;
                        }
                    }
                }
            }
        }

        .warp {
            position: relative;
            margin: 0px auto;
            @include wh(1100px, 650px);

            &-left {
                @include wh(55px, 55px);
                position: absolute;
                top: 50%;
                left: -40px;
                border: 1px solid #d2d5d6;
                transform: translate(0, -50%);
                border-radius: 50%;
                @include textAlign(55px);
                cursor: pointer;
                transition: all .5s linear;

                &:hover {
                    background: #5c88fc;
                    color: #fff;
                }
            }

            .icon-sdf {
                @include style(25px, #d2d5d6);
            }

            &-right {
                @include wh(55px, 55px);
                position: absolute;
                top: 50%;
                right: -40px;
                border: 1px solid #d2d5d6;
                transform: translate(0, -50%);
                border-radius: 50%;
                @include textAlign(55px);
                cursor: pointer;
                transition: all .5s linear;

                &:hover {
                    background: #5c88fc;
                    color: #fff;
                }
            }

            .icon-arrow-right {
                @include style(25px, #d2d5d6);
            }

            &-focus {
                @include wh(120px, 15px);
                position: absolute;
                bottom: 0px;
                left: 50%;
                transform: translate(-50%, 0);

                li {
                    @include wh(15px, 15px);
                    background: #d2d5d6;
                    float: left;
                    margin-right: 10px;
                    border-radius: 3px;
                }

                .active {
                    background: #5c88fc;
                }
            }
        }
    }

    section {
        position: relative;
        min-height: 300px;

        .section-container {
            width: 1200px;
            margin: 0 auto;
            padding-top: 60px;
            padding-bottom: 80px;

            &-label {
                position: relative;
                z-index: 1;
                @include textAlign(30px);
                font-size: 30px;
                font-weight: 600;
                margin: 30px auto;
                color: $titleColor;
            }

            &-intro {
                position: relative;
                z-index: 1;
                font-size: 18px;
                @include textAlign(30px);
                color: $navColor;
            }
        }

        &.product {
            background-color: $bgColor;

            .product-box {
                min-height: 500px;
                overflow: hidden;
            }

            .product-container {
                width: 280px;
                min-height: 500px;
                float: left;
                margin-left: 100px;
                margin-top: 100px;
                position: relative;
                z-index: 1;

                &-line {
                    width: 40px;
                    height: 5px;
                    margin: 15px 0;
                    background-color: $primaryColor;
                }

                &-name {
                    font-size: 22px;
                    color: $primaryColor;
                }

                &-intro {
                    font-size: 16px;
                    line-height: 26px;
                    color: $navColor;
                }

                &-btn {
                    width: 80%;
                    height: 45px;
                    display: block;
                    margin: auto;
                    margin-top: 50px;
                    color: $primaryColor;
                    background-color: #fff;
                    border: 1px solid $primaryColor;
                    font-size: 16px;
                    // a {
                    //   color: #fff;
                    // }
                }

                &-btn:hover {
                    background-color: $primaryColor;
                    color: #fff;
                }
            }

            .product-view {
                width: 36%;
                position: absolute;
                left: 50%;
                margin-left: -180px;
                margin-top: 0px;
                z-index: 0;
            }

            @media (max-width: 1500px) {
                .product-view {
                    margin-top: 10px;
                    margin-left: -90px;
                }
                .product-container {
                    min-height: 400px;
                }
            }

            .product-group {
                clear: both;

                &-item {
                    & > div {
                        width: 250px;
                        padding: 10px;

                        p {
                            width: 230px;
                            @include textAlign(80px);
                            margin: auto;
                            background-color: #fff;
                            font-size: 25px;
                            color: $navColor;
                        }
                    }

                    & > div:hover {
                        background-color: #dceff9;
                    }
                }
            }
        }

        &.solve {
            min-height: 800px;

            .section-container {
                .solve-list {
                    margin-top: 30px;
                }

                .solve-item {
                    box-sizing: border-box;
                    min-height: 300px;

                    &-img {
                        width: 210px;
                        margin: auto;
                    }

                    &-img:hover {
                        -webkit-animation-name: pulse;
                        animation-name: pulse;
                        -webkit-animation-duration: 1s;
                        animation-duration: 1s;
                        -webkit-animation-fill-mode: both;
                        animation-fill-mode: both;
                    }

                    &-title {
                        width: 90%;
                        margin: auto;
                        @include textAlign(30px);
                        color: $navColor;
                        font-size: 22px;
                    }

                    &-intro {
                        width: 90%;
                        margin: auto;
                        margin-top: 10px;
                        line-height: 24px;
                        text-align: center;
                        vertical-align: middle;
                        font-size: 14px;
                        color: $iconColor;
                    }
                }
            }
        }

        &.friends {
            background-color: $bgColor;

            .friends-group {
                box-sizing: border-box;
                overflow: hidden;
                margin-top: 40px;
                @include flexContainer();

                &-item {
                    width: 230px;
                    @include flexItem();

                    img {
                        width: 90%;
                        margin: 10px auto;
                    }
                }
            }
        }
    }
</style>
