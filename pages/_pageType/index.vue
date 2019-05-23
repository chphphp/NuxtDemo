<template>
    <div :class="topClass" ref="list" v-if="!getRoot">
        <!--<header>-->
        <!--<Topbar :idx="6" :isMobile="isMobile"></Topbar>-->
        <!--</header>-->
        <section class="article-content" v-if="listData.list">
            <div class="article-content-list">
                <div class="article-content-list-top">
                    <strong><h1>{{menuData.menuNameCn}}</h1></strong>
                    <p>
                        <span>当前位置:</span>
                        <a href="/">首页</a>>
                        <a :href="route.fullPath">{{menuData.menuNameCn}}</a>
                    </p>
                </div>
                <div class="article-content-list-middle">
                    <ul>
                        <li v-for="(item) in listData.list" :key="item.id">
                            <h2>
                                <nuxt-link :to="{path:`/${columnName}/${item.articleId}.html`}" target="_blank">
                                    {{item.title}}
                                </nuxt-link>
                                <!--<a href="">考研英语作文万能模板使用禁忌</a>-->
                            </h2>
                            <p>
                                <span>{{item.createTime | timeToDate}}</span>
                                <span>{{item.browseCount}}次浏览</span>
                            </p>
                            <!--<p>-->
                            <!--很多同学盲目地去背诵各种版本的 作文 模板，却不会正确地将其运用到考试当中。在使用模板之前你需要避免以下禁忌。 禁忌一：频繁使用高度大众化模板 对于所有的考生，尽管大家程度水平各异，但是都需要准备相应的模 ...-->
                            <!--</p>-->
                            <p v-html="item.abstracts">
                            </p>
                        </li>
                        <!--<li>-->
                        <!--<h2>-->
                        <!--<nuxt-link to="/1232">考研英语作文万能模板使用禁忌</nuxt-link>-->
                        <!--</h2>-->
                        <!--<p>-->
                        <!--<span>2018-12-08</span>-->
                        <!--<span>126次浏览</span>-->
                        <!--</p>-->
                        <!--<p>-->
                        <!--很多同学盲目地去背诵各种版本的 作文 模板，却不会正确地将其运用到考试当中。在使用模板之前你需要避免以下禁忌。 禁忌一：频繁使用高度大众化模板 对于所有的考生，尽管大家程度水平各异，但是都需要准备相应的模 ...-->
                        <!--</p>-->
                        <!--</li>-->

                    </ul>
                </div>
                <div class="article-content-list-bottom">
                    <a target="_blank" v-for="(item,idx) in pageList" :key="idx"
                       :href="'/'+ columnName +'/list_'+item.url" :class="{active:item.index==listData.pageNum}">{{item.name}}</a>
                </div>
            </div>
            <div class="article-content-more">
                <div class="article-content-more-search">
                    <input type="text" placeholder="请输入搜索关键词" v-model="searchContent">

                    <button @click="search()">搜索</button>
                </div>
                <div class="article-content-more-info" v-if="false">
                    <p>客服QQ：<span>632552007</span></p>
                    <p>E-mail: <span>632552007@qq.com</span></p>
                    <p>QQ群号: <span>123456789</span></p>
                </div>
                <div class="article-content-more-new">
                    <h3>最新文章</h3>
                    <ul>
                        <li v-for="item in listData.list" :key="item.id">
                            <h4>
                                <nuxt-link :to="{path:`/${item.menuName}/${item.articleId}.html`}" target="_blank">
                                    {{item.title}}
                                </nuxt-link>
                            </h4>
                            <span>{{item.browseCount}} 次浏览</span>
                        </li>


                    </ul>
                </div>
                <div class="article-content-more-about" v-if="false">
                    <h3>相关文章</h3>
                    <ul>
                        <li v-for="item in listData.list" :key="item.id">
                            <h4>
                                <nuxt-link :to="{path:`/${columnName}/${item.id}.html`}" target="_blank">
                                    {{item.title}}
                                </nuxt-link>
                            </h4>
                            <span>{{item.browseCount}} 次浏览</span>
                        </li>

                    </ul>
                </div>
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
    import indexPage from "~/pages/index"
    import animate from "animate.css";
    import http from '~/plugins/http'
    import axios from 'axios'

    export default {
        components: {
            Topbar,
            Bottombar,
            indexPage
        },
        data() {
            return {
                isMobile: true,
                topClass: 'article',
                aboutArticleList: [],
                pageList: [],
                searchContent: '',
                metaData:[],
                linkData:[],
                getRoot:false
            };
        },
        head() {
            return {
                title: this.menuData&&this.menuData.menuNameCn,
                meta: [
                    {
                        httpEquiv: "X-UA-Compatible",
                        name: "viewport",
                        content: "ie=edge,width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
                    },
                    ...this.metaData

                ],
                link: [...this.linkData]
            }
        },
        async asyncData({params, route}) {
            if (process.server) {

                // let res = await http.post('/cms/article/api/articleList', {
                //     pageNum: 1,
                //     pageSize: 10,
                //     keyWord: route.query.keyWord || undefined,
                //     menuName: params.pageType || undefined
                //     // menuName:'test'
                // });
                // http.post('/cms/menu/api/get/' + menuName, {
                // })

                let getRoot = false,menuData,returnData
                if (params.pageType.indexOf('.')!==-1) {
                    getRoot = true
                    returnData = {
                        getRoot:getRoot
                    }
                }else {
                    let [res,menuData] = await Promise.all([
                        http.post('/cms/article/api/articleList', {
                            pageNum: 1,
                            pageSize: 10,
                            keyWord: route.query.keyWord || undefined,
                            menuName: params.pageType || undefined
                            // menuName:'test'
                        }),
                        http.post('/cms/menu/api/get/' + params.pageType, {
                        })
                    ])
                    menuData = menuData.data
                    returnData = {
                        menuData:{
                            menuName:menuData.directory,
                            menuNameCn: menuData.name,
                            ...menuData
                        },
                        listData: res.data,
                        params: params,
                        query: route.query,
                        columnName: params.pageType,
                        route: JSON.parse(JSON.stringify(route)),
                        linkData: [
                            {
                                rel: "canonical",
                                href: `http://sxfq.com/${params.pageType}/`
                            }
                        ],
                        metaData: [
                            // TODO
                            {
                                name: "title",
                                content:  menuData.title
                            },
                            {
                                name: "description",
                                content:  menuData.description
                            },
                            {
                                name: "Keywords",
                                content: menuData.keywords
                            }
                        ]
                    }
                }

                return returnData
            }
        },

        beforeCreate(){
            if (this.getRoot) {
                let ele = document.documentElement
                ele.innerHTML = ''
                console.log(ele)
                window.location
            }
        },
         beforeMount() {

            if (this.getRoot) {
                let ele =  document.documentElement
                ele.innerHTML = ''
                console.log(ele)
            } else {
                this.isMobile = !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                this.topClass = ''
                this.topClass = this.isMobile ? 'm-article' : 'article'
                this.setPaging();
            }
        },
        mounted() {
            console.log(this,'mounted')
            if (this.getRoot) {
                let ele = document.documentElement
                ele.innerHTML = ''
                console.log(ele)
            }
        },
        methods: {
            setPaging(keyWord) {
                this.pageList = []
                let pages = this.listData.pages
                let pageNum = this.listData.pageNum
                let pageNumPostion = Math.floor(this.listData.pageNum / 10)
                let start = 1 + pageNumPostion * 10
                let end = (start + 9 > pages) ? pages : (start + 9)
                for (let i = start; i <= end; i++) {
                    this.pageList.push({
                        url: '' + i,
                        name: i,
                        index: i
                    })
                }
                start > 10 && this.pageList.unshift({
                    url: '' + 1,
                    name: '...',
                    index: 1
                })
                end < pages && this.pageList.push({
                    url: '' + 1,
                    name: '...',
                    index: 1
                })
                pageNum != 1 && this.pageList.unshift({
                    url: '' + (pageNum - 1),
                    name: '上一页',
                    index: pageNum - 1
                })
                pageNum != pages && this.pageList.push({
                    url: '' + (pageNum + 1),
                    name: '下一页',
                    index: pageNum + 1
                })
                pageNum != pages && this.pageList.push({
                    url: '' + pages,
                    name: '末页',
                    index: pages
                })
                let flag = !!keyWord
                flag && this.pageList.forEach(ele => {
                    ele.url = ele.url + '?keyWord=' + keyWord
                })
            },
            async search() {
                let res = await http.post('/cms/article/api/articleList', {
                    pageNum: 1,
                    pageSize: 10,
                    keyWord: this.searchContent
                });
                res.data.list && (this.listData = res.data)
                this.setPaging(this.searchContent)

            },
            setParams() {
                alert(111)
            },
            switchPage(e) {
                // console.log(e, 'ee')
            },

        },
        filters: {
            timeToDate: function (value) {
                var date = new Date(value);//如果date为13位不需要乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
                // var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                // var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
                // var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
                return Y + M + D
            }
        }
    };
</script>
<style lang="scss">

    .m-article {
        width: 100%;

        .article-content {
            width: 100%;
            flex-direction: column;
            margin-top: 100px;

            &-list {
                width: 100%;
            }

            &-more {
                width: 100%;
            }
        }
    }

    .article {
        background: #EAEBE6;
        padding-top: 10px;

        &-content {
            width: 990px;
            min-height: 1000px;
            /*border:1px solid black;*/
            margin: 55px auto 0;
            display: flex;
            flex-direction: row;

            &-list {
                width: 720px;
                border-right: 1px solid #ececec;
                padding: 15px;
                background: #fff;
                height: 100%;
                display: inline-block;

                &-top {
                    display: flex;
                    justify-content: space-around;
                    border-bottom: 1px dashed #ddd;
                    padding-bottom: 10px;

                    strong:first-child {
                        border-left: 3px solid black;
                        padding-left: 10px;

                        flex: 1;
                    }

                    a {
                        color: #242831;
                    }
                }

                &-middle {
                    ul {
                        li {
                            border-bottom: 1px dashed #ddd;
                            padding-bottom: 12px;

                            a {
                                font-size: 14px;
                                color: #242831;
                                font-weight: bold;
                                line-height: 44px;

                                &:hover {
                                    text-decoration: underline;

                                }
                            }

                            p:nth-child(2) {
                                margin-bottom: 8px;

                                span {
                                    font-size: 12px;
                                    margin-right: 10px;
                                    color: #777;
                                }
                            }

                            p:nth-child(3) {
                                color: #777;
                                font-size: 12px;
                            }
                        }
                    }
                }

                &-bottom {
                    margin-top: 15px;
                    display: flex;
                    justify-content: left;

                    a {
                        padding: 6px 12px;
                        background: #eee;
                        border-bottom: 1px solid #DADAD9;
                        margin-right: 6px;
                        color: #555;
                    }

                    a.active {
                        background: #242831;
                        color: #fff;
                    }

                    .el-pagination {
                        ul {
                            li.active {
                                background-color: #242831 !important;
                            }
                        }
                    }
                }
            }

            &-more {
                width: 270px;
                height: 100%;
                background: #fcfcfc;
                padding: 10px;
                display: inline-block;
                margin-left: 10px;

                &-search {
                    width: 100%;
                    height: 28px;
                    display: flex;
                    margin-bottom: 20px;

                    input {
                        flex: 1;
                        padding: 0 5px;
                        border: 1px solid #ddd;
                        height: 100%;
                    }

                    button {
                        width: 48px;
                        background: #242831;
                        color: #fff;
                        border: 0;
                        height: 100%;
                        font-size: 12px;
                        cursor: pointer;
                    }
                }

                &-info {
                    height: 110px;
                    border: 1px dashed #ddd;
                    margin-top: 15px;
                    background: #fff;
                    padding-top: 6px;
                    margin-bottom: 15px;

                    p {
                        height: 24px;
                        line-height: 24px;
                        padding-left: 35px;
                        font-size: 12px;

                        span {
                            color: #777;
                        }
                    }
                }

                &-new, &-about {
                    margin-bottom: 15px;

                    h3 {
                        font-size: 14px;
                        font-weight: 700;
                        padding-bottom: 10px;
                        padding-left: 5px;
                        border-bottom: 1px solid #ddd;
                    }

                    ul {
                        li {
                            margin-top: 6px;
                            padding-left: 11px;
                            border-bottom: 1px dashed #ddd;
                            padding-bottom: 10px;
                            font-size: 12px;
                            color: #555;

                            a {
                                color: #555;

                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
