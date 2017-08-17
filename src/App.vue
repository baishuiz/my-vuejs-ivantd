<template>
    <div class="page-wrapper">
        <header class="clearfix">
            <div class="ant-row">
                <div class="ant-col-xs-24 ant-col-sm-7 ant-col-md-6 ant-col-lg-4">
                    <router-link to="/" id="logo">
                        <img alt="logo" src="./assets/logo.png">
                        <span>Vue+Ant.design</span>
                    </router-link>
                </div>
                <div id="nav">
                    <ul>
                        <li class="nav-item">
                            <router-link active-class="nav-active" to="/guide">指南</router-link>
                        </li>
                        <li class="nav-item ">
                            <a href="javascript:;">设计规范</a>
                        </li>
                        <li class="nav-item ">
                            <router-link active-class="nav-active" to="/components/start">组件</router-link>
                        </li>
                        <li class="nav-item ">
                            <a href="javascript:;">资源</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <router-view keep-alive></router-view>
        <footer id="footer">
            <ul>
                <li>
                    <h2>相关网站</h2>
                    <a target="_blank" href="http://www.fomoney.com/">复星金服</a>
                    <a target="_blank" href="http://m.fomoney.com/">复星金服移动端</a>
                </li>
                <li>
                    <h2>友情链接</h2>
                    <a target="_blank" href="http://www.fosun.com/">复星集团</a>
                </li>
            </ul>
            <div class="copyright">
                Copyright © 2017 复星金服 Powered By FomoneyUI
            </div>
        </footer>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
header {
    transition: opacity .5s;
    // background: #fff;
    border-bottom: 1px solid #eee;
    height: 80px;
    // margin-bottom: 24px;
    padding: 0 4%;
    width: 100%;
}

#logo {
    float: left;
    height: 80px;
    line-height: 80px;

    img {
        height: 54px;
        margin-top: 14px;
        margin-right: 8px;
    }

    span {
        float: right;
        font-size: 16px;
        font-family: Raleway, Hiragino Sans GB, sans-serif;
        line-height: 94px;
        font-weight: bold;
        color: #666;
    }
}

#nav {
    border: 0;
    float: right;
    font-size: 14px;
    font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;

    ul {
        float: right;
        width: 100%;
        li {
            a {
                outline: none;
                background: transparent;
                text-decoration: none;
            }
        }
        li.nav-item {
            float: left;
            padding: 0;
            margin: 0 0 0 30px;
            text-align: center;
        }
        li.nav-item>a,
        li.nav-item>div>a {
            -webkit-transition: all .5s;
            transition: all .5s;
            border-top: 3px solid transparent;
            color: #666;
            display: inline-block;
            font-size: 14px;
            padding: 0 20px;
            position: relative;
            height: 80px;
            line-height: 75px;
            text-align: center;
        }
        li>a.nav-active,
        li>div>a.nav-active {
            border-bottom: 3px solid #108ee9;
            color: #108ee9;
        }
    }
}

footer {
    background: #f7f7f7;
    clear: both;
    color: rgba(0, 0, 0, .6);
    position: relative;
    font-size: 12px;
    ul {
        overflow: hidden;
        margin: 0 8%;
        list-style: none;
        li {
            float: left;
            width: 33%;
            padding: 56px 64px 56px 0;
        }
        li>h2 {
            font-size: 14px;
            margin: 0 auto 24px;
            font-weight: 500;
        }
        li>a {
            display: inline-block;
            width: 120px;
            line-height: 2.6em;
            color: rgba(0, 0, 0, .6);
        }
        li:last-child {
            width: 66%;
            padding-right: 0;
        }
    }
    .copyright {
        text-align: center;
        border-top: 1px solid #e9e9e9;
        line-height: 5em;
    }
}
</style>
