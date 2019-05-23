<template>
    <div class="article-item">
        <div :class="articleItemContent" ref="article" v-if="returnType=='article'">
            <section class="article-item-content-left">
                <div class="article-item-content-left-top">
                    <div class="head-title" v-text="res.menuNameCn">
                        <!--{{res.menuName}}-->
                    </div>
                    <div class="article-info">
                        <nuxt-link to="/">首页-</nuxt-link>
                        <a :href="'/' + res.menuName" v-text="res.menuNameCn"></a><span>-</span>
                        <a :href="'/' + res.menuName + '/' + res.articleId + '.html'"
                           v-text="res.title">{{res.title}}</a>
                    </div>
                </div>
                <div class="article-item-content-left-middle">
                    <strong><b><h1><a :href="'/' + res.menuName + '/' + res.articleId + '.html'" :title="res.title">{{res.title}}</a>
                    </h1></b></strong>
                    <div class="author-txt">
                        作者：<a :href="'/author'  + '/list_01?author=' + res.author">{{res.author}}</a>
                    </div>
                    <div class="article-source">
                        来源：<a :href="'/source'  + '/list_01?source=' + res.source">{{res.source}}</a><span
                            class="release_date">北京时间：{{res.createTime | timeToDate}}</span>
                    </div>
                    <div class="description">
                        摘要：{{res.abstracts}}
                    </div>
                    <div class="content" v-html="res.content">

                    </div>
                    <div class="keywords">
                        关键词：
                        <a :href="'/' + res.menuName + '/' + res.articleId + '.html'"
                           :title="res.title">{{res.title}}</a>
                        <a :href="'/keyWord' + '/list_01?keyWord=' + item"
                           v-for="(item,idx) in res.keyWord.split(',')" :key="idx">,{{item}}</a>
                        <!--<a href="http://news.sxfq.com/a/?s=水象分期" target="_blank">水象分期</a>,-->
                        <!--<a href="http://news.sxfq.com/a/?s=水象科技" target="_blank">水象科技</a>,-->
                        <!--<a href="http://news.sxfq.com/a/?s=上海水象分期" target="_blank">上海水象分期</a>,-->
                        <!--<a href="http://news.sxfq.com/a/?s=上海水象科技" target="_blank">上海水象科技</a>,-->
                        <!--<a href="http://news.sxfq.com/a/?s=水象金融" target="_blank">水象金融</a>-->
                    </div>
                    <div class="mzsm">
                        免责声明：本文由互联网作者上传并发布，水象分期仅提供信息发布平台。文章仅代表作者个人观点，不代表水象分期立场。未经作者许可，不得转载。
                    </div>
                    <div class="prev_next">
                        <div class="prev">上一篇：
                            <nuxt-link :to="{path:`/${lastData.menuName}/${lastData.articleId}.html`}" target="_blank">
                                {{lastData.title}}
                            </nuxt-link>
                        </div>
                        <div class="next">下一篇：
                            <nuxt-link :to="{path:`/${nextData.menuName}/${nextData.articleId}.html`}" target="_blank">
                                {{nextData.title}}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="article-item-content-right">
                <div class="new-article">
                    <div class="head">
                        <div class="head-title">
                            最新文章
                        </div>
                        <a :href="'/' + res.menuName">更多>></a>
                    </div>
                    <ul>
                        <li v-for="(item,idx) in newList.list" :key="idx">
                            <nuxt-link :to="{path:`/${item.menuName}/${item.articleId}.html`}" target="_blank">
                                {{item.title}}
                            </nuxt-link>
                            <p class="hoverContent">{{item.title}}</p>
                        </li>

                    </ul>
                </div>
                <div class="about-article">
                    <div class="head">
                        <div class="head-title">
                            相关文章
                        </div>
                        <a :href="'/'+  res.menuName +'/list_01?keyWord=' + res.keyWord">更多>></a>
                    </div>
                    <ul>
                        <li v-for="(item,idx) in aboutList.list" :key="idx">
                            <nuxt-link :to="{path:`/${item.menuName}/${item.articleId}.html`}" target="_blank">
                                {{item.title}}
                            </nuxt-link>
                            <p class="hoverContent">{{item.title}}</p>
                        </li>

                    </ul>
                </div>
            </section>
        </div>
        <div :class="topClass" ref="list" v-if="returnType=='list'">
            <section class="article-content">
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
                                    <nuxt-link :to="{path:`/${item.menuName}/${item.articleId}.html`}" target="_blank">
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
                        </ul>
                    </div>
                    <div class="article-content-list-bottom">
                        <a target="_blank" v-for="(item,idx) in pageList" :key="idx"
                           :href="'/'+ pageType +'/list_'+item.url" :class="{active:item.index==listData.pageNum}">{{item.name}}</a>
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
                                    <nuxt-link :to="{path:`/${item.menuName}/${item.articleId}.html`}" target="_blank">
                                        {{item.title}}
                                    </nuxt-link>
                                </h4>
                                <span>{{item.browseCount}} 次浏览</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import http from '~/plugins/http'

    export default {
        data() {
            return {
                title: '111',
                isMobile: true,
                topClass: 'article',
                aboutArticleList: [],
                pageList: [],
                searchContent: '',
                articleItemContent: 'article-item-content'
            }
        },
        head() {
            return {
                title: this.titleWord,

                meta: [
                    {
                        httpEquiv: "X-UA-Compatible",
                        name: "viewport",
                        content: "ie=edge,width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
                    },
                    ...this.metaList
                ],

                link: [
                    ...this.linkList
                ]
            }

        },
        async asyncData({params, route}) {
            if (process.server) {
                let param = params.id
                let returnData = {} //返回数据
                returnData.pageType = params.pageType
                let metaList = [] //meta 标签
                let linkList = [] //link 标签
                let titleWord = ''
                let menuData = ''
                if (param.indexOf('list_') !== -1) {
                    //查询列表
                    let menuName = ''
                    let queryContent = route.query.keyWord || route.query.author || route.query.source
                    let res = ''
                    if (queryContent) {
                        // 聚合页
                        menuName = undefined
                        menuData = {
                            menuName: '',
                            menuNameCn: queryContent
                        }
                        metaList = [...metaList, ...[
                            {
                                name: "title",
                                content: queryContent + "的最新相关信息"
                            },
                            {
                                name: "description",
                                content: queryContent + "的最新相关信息|sxfq.com"
                            },
                            {
                                name: "Keywords",
                                content: queryContent
                            },
                            {
                                property: "og:type",
                                content: "news"
                            },
                            {
                                property: "og:title",
                                content: queryContent + "的最新相关信息"
                            },
                            {
                                property: "og:keyWords",
                                content: queryContent
                            },
                            {
                                property: "og:description",
                                content: queryContent + "的最新相关信息|sxfq.com"
                            },
                            {
                                property: "og:url",
                                content: "http://sxfq.com" + route.fullPath.split("=")[0] + "=" + queryContent
                            },
                            {
                                name: "author",
                                content: queryContent
                            },
                            {
                                name: "release_date",
                                content: ""
                                // TODO  时间
                            },
                        ]]
                        titleWord = `${queryContent}的最新相关信息第${param.split('_')[1]}页`
                        res = await http.post('/cms/article/api/articleList', {
                            pageNum: +param.split('_')[1] || 1,
                            pageSize: 10,
                            keyWord: route.query.keyWord || undefined,
                            author: route.query.author || undefined,
                            source: route.query.source || undefined,
                            abstracts: route.query.abstracts || undefined,

                        });
                    }
                    else {
                        //栏目列表页

                        menuName = params.pageType


                        let allRes = await Promise.all([
                            http.post('/cms/article/api/articleList', {
                                pageNum: +param.split('_')[1] || 1,
                                pageSize: 10,
                                menuName: menuName
                            }),
                            http.post('/cms/menu/api/get/' + menuName, {
                            })
                        ])
                        res = allRes[0]
                        let menuRes = allRes[1].data

                        menuData = {
                            menuName:menuRes.directory,
                            menuNameCn: menuRes.name,
                            ...menuRes
                        }
                        metaList = [...metaList, ...[
                            {
                                name: "title",
                                content: menuData.title
                            },
                            {
                                name: "description",
                                content: menuData.description
                            },
                            {
                                name: "Keywords",
                                content: menuData.keywords
                            }
                        ]]
                        titleWord = `${menuData.title}第${param.split('_')[1]}页_水象分期`
                    }

                    // returnData.menuData = menuData
                    // returnData.returnType = 'list'
                    // returnData.listData = res.data || {}
                    // titleWord = queryContent || menuName

                    // returnData.query = route.query || {}

                    linkList = [
                        {
                            rel: "canonical",
                            href: `http://sxfq.com${queryContent ? route.fullPath.split("=")[0] + "=" + queryContent:route.fullPath}/`
                        }
                    ]

                    returnData = {
                        ...returnData,
                        menuData:menuData,
                        returnType:'list',
                        listData: res.data || {},
                        query:route.query || {},
                        titleWord:titleWord,
                        metaList:metaList,
                        linkList:linkList,
                    }
                }
                if (param.indexOf('.html') !== -1) {
                    //查询文章
                    // returnData.returnType = 'article'
                    let res = await http.post('/cms/article/api/getArticleLines/' + params.pageType + '/' + param.split('.')[0])
                    let [newList, aboutList, last, next,addB] = await Promise.all([
                        http.post('/cms/article/api/articleList', {
                            pageNum: 1,
                            pageSize: 5
                        }),
                        http.post('/cms/article/api/articleList', {
                            pageNum: 1,
                            pageSize: 5,
                            keyWord: res.data.keyWord
                        }),
                        http.post('/cms/article/api/lastArticle/' + res.data.deployTime),
                        http.post('/cms/article/api/nextArticle/' + res.data.deployTime),
                        http.post('/cms/article/api/addBrowse/' + res.data.id)
                    ])


                    let resData = res.data
                    var date = new Date(resData.deployTime);//如果date为13位不需要乘1000
                    var Y = date.getFullYear() + '-';
                    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
                    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '';
                    // var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
                    let seoData = Y + M + D + h + m
                    titleWord = res.data && res.data.title
                    metaList = [
                        {
                            name: 'title',
                            content: resData.seoTitle || '',
                        },
                        {
                            name: 'Keywords',
                            content: resData.keyWord,

                        },
                        {
                            name: 'description',
                            content: resData.seoDescription || resData.abstracts,
                        },
                        {
                            property: "og:type",
                            content: "news"
                        },
                        {
                            property: "og:title",
                            content: resData.seoTitle || ''
                        },
                        {
                            property: "og:keywords",
                            content: resData.keyWord
                        },
                        {
                            property: "og:description",
                            content: resData.seoDescription || resData.abstracts
                        },
                        {
                            property: "og:url",
                            content: ` http://sxfq.com${route.fullPath}`
                        },
                        {
                            property: "og:image",
                            content: resData.imgurl
                            // TODO 图片地址
                        },
                        {
                            property: "og:site_name",
                            content: "http://sxfq.com/"
                        },
                        {
                            name: "author",
                            content: resData.author
                        },
                        {
                            name: "release_date",
                            content: seoData + '北京时间'
                        },
                    ]
                    linkList = [
                        {
                            rel: "canonical",
                            href: `http://sxfq.com${route.fullPath}`
                        },
                        {
                            rel: "shortcut icon",
                            href: "/favicon.ico",
                            type: "image/x-icon",
                            content: resData.keyWord,
                        }
                    ]

                    // returnData.newList = newList.data
                    // returnData.aboutList = aboutList.data
                    // returnData.lastData = last.data
                    // returnData.nextData = next.data
                    // returnData.res = res.data
                    returnData = {
                        ...returnData,
                        returnType:'article',
                        newList:newList.data,
                        aboutList:aboutList.data,
                        lastData: last.data,
                        nextData:next.data,
                        res:res.data,
                        titleWord:titleWord,
                        metaList:metaList,
                        linkList:linkList
                    }
                }
                // returnData.titleWord = titleWord
                // returnData.metaList = metaList
                // returnData.linkList = linkList
                returnData.route = JSON.parse(JSON.stringify(route))
                return returnData
                // let newList = await http.post('/cms/article/api/newArticleList'+res.data.deployTime)
                // let aboutList = await http.post('/cms/article/api/lastArticle'+res.data.deployTime)
                // console.log(res)
                // return {
                //   route: JSON.stringify(path),
                //   params: params,
                //   res: res.data,
                //   lastData: last.data,
                //   nextData: next.data,
                //   newList: newList.data,
                //   aboutList: aboutList.data
                // }
            }

        },
        beforeMount() {
            this.setDevice()
            this.returnType === 'list' && this.setPaging()
            this.returnType === 'article' && this.addBrowse()

        },
        mounted() {
            console.log(this, 'eeee3333')
            // http.post('/cms/menu/api/get/' + this.pageType, {
            // }).then(res=>{
            //     console.log(res)
            // })

            // console.log(this.$refs.article  ,'eeefefefe')

        },
        methods: {
            setDevice() {
                this.isMobile = !!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                this.topClass = ''
                this.topClass = this.isMobile ? 'm-article' : 'article'
                this.articleItemContent = ''
                this.articleItemContent = this.isMobile ? 'm-article-item-content' : 'article-item-content'
            },
            setPaging(keyWord = this.query.keyWord, author = this.query.author, source = this.query.source, abstracts = this.query.abstracts) {
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
                let flagKeyWord = !!keyWord, flagAuthor = !!author, flagSource = !!source, flagAbstracts = !!abstracts
                flagKeyWord && this.pageList.forEach(ele => {
                    ele.url = ele.url + '?keyWord=' + keyWord
                })
                flagAuthor && this.pageList.forEach(ele => {
                    ele.url = ele.url + '?author=' + author
                })
                flagSource && this.pageList.forEach(ele => {
                    ele.url = ele.url + '?source=' + source
                })
                flagAbstracts && this.pageList.forEach(ele => {
                    ele.url = ele.url + '?abstracts=' + abstracts
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
            addBrowse() {
                // http.post('http://106.14.240.253/cms/article/api/addBrowse/' + this.res.id)
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
    }
</script>

<style lang="scss">
    .article-item {
        background: #EAEBE6;

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

        .error {
            width: 100%;
            min-height: 800px;
            line-height: 800px;
            text-align: center;
            font-size: 100px;
        }

        a {
            color: #333;

        }

        .head-title {
            width: 120px;
            padding: 0 10px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 16px;
            color: #FFF;
            background: #242831;
        }

        .article-info {
            line-height: 40px;
            margin-right: 10px;
            display: flex;

            a {
                display: inline-block;

            }

            a:last-child {
                line-height: 40px;
                max-width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        &-content {
            width: 1200px;
            margin: 55px auto 0;
            min-height: 600px;
            display: flex;
            justify-content: space-between;

            &-left {
                width: 880px;
                padding: 10px;

                &-top {
                    display: flex;
                    justify-content: space-between;
                    background: #eee;
                    border-bottom: 2px solid #242831;

                }

                &-middle {
                    background: #fff;
                    padding: 10px;

                    h1 {
                        font-size: 40px;
                        margin: 0 auto;
                        line-height: 70px;
                        font-weight: 700;
                        text-align: center;
                    }

                    .author-txt, .article-source {
                        font-size: 12px;
                        text-align: center;
                        color: #333;
                        line-height: 30px;

                        a {
                            color: #333;
                            margin-right: 5px;
                        }
                    }

                    .description, .mzsm {
                        background: #f5f5f5bf;
                        font-size: 10px;
                        text-align: left;
                        line-height: 30px;
                    }

                    .content {
                        font-size: 14px;
                        line-height: 30px;
                        display: flex;
                        flex-direction: column;

                        p {
                            margin: 10px 0 !important;
                        }

                        img {
                            max-width: 100%;
                            height: auto;
                            display: inline-block;
                        }

                        a {
                            text-decoration: underline;
                            color: blue;
                        }
                    }

                    .keywords {
                        font-size: 10px;
                        text-align: left;
                        line-height: 30px;

                        a {
                            color: #333;
                        }
                    }

                    .prev_next {
                        display: flex;
                        justify-content: space-between;
                        font-size: 16px;
                        line-height: 70px;

                        a {
                            color: #333;
                        }
                    }
                }
            }

            &-right {
                width: 320px;
                padding: 10px;

                .new-article, .about-article {
                    padding-bottom: 15px;
                    line-height: 40px;

                    .head {
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 2px solid #242831;
                        background: #f5f5f5;

                        a {
                            margin-right: 10px;

                        }
                    }

                    ul {
                        padding: 8px;
                        background: #fff;

                        li {
                            padding: 0 0 0 8px;
                            line-height: 40px;
                            border-bottom: 1px dashed #CCC;
                            height: 40px;
                            position: relative;

                            a {
                                display: block;
                                width: 100%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }

                            .hoverContent {
                                position: absolute;
                                bottom: 0;
                                top: 0;
                                margin: auto 0;
                                display: none;
                            }

                            &:hover .hoverContent {
                                display: block;
                                width: 200%;
                                /*background: #F3F3F3;*/
                                line-height: 12px;
                                height: 12px;
                            }
                        }
                    }

                }
            }
        }

        .m-article-item-content {
            padding-top: 100px;
            wdith: 100%;

            .article-item-content-left {
                width: 100%;

                .prev_next {
                    display: block;
                }
            }

            .article-item-content-right {
                width: 100%;
            }
        }

    }
</style>
