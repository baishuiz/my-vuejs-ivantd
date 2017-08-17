<template>
    <div id="index" style="padding:0 30px 30px 30px;">
        <div id="content_7_0" class="content-template-wrapper content5-wrapper">
            <div class="content-template content5">
                <div class="content5-text" id="content_7_0-textWrapper">
                    <h1 id="content_7_0-title" class="" style="opacity: 1; transform: translate(0px, 0px);">复星金服提供专业的UI服务</h1>
                    <p id="content_7_0-content" class="" style="opacity: 1; transform: translate(0px, 0px);">基于Ant Design强大的基础资源</p>
                    <ul id="content_7_0-ul" class="" style="opacity: 1; transform: translate(0px, 0px);">
                        <li id="content_7_0-block0" class="" style="opacity: 1; transform: translate(0px, 0px);">
                            <span>
                                <img src="https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png" width="100%">
                            </span>
                            <h2>技术</h2>
                            <p>丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。</p>
                        </li>
                        <li id="content_7_0-block1" class="" style="opacity: 1; transform: translate(0px, 0px);">
                            <span>
                                <img src="https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png" width="100%">
                            </span>
                            <h2>融合</h2>
                            <p>解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。 解放业务及技术生产力，推动金融服务底层创新。
                            </p>
                        </li>
                        <li id="content_7_0-block2" class="" style="opacity: 1; transform: translate(0px, 0px);">
                            <span>
                                <img src="https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png" width="100%">
                            </span>
                            <h2>开发</h2>
                            <p>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。</p>
                        </li>
                    </ul>
                </div>
                <div class="content5-img" id="content_7_0-img" style="transform: translate(0px, 0px); opacity: 1;">
                    <img src="https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png" width="100%">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="babel">
    export default{
        data() {
            return {
                menuData: [{
                    name: 'nav 1',
                    selected: true
                }, {
                    name: 'nav 2',
                }, {
                    name: 'nav 3',
                }],
            };
        },

        mounted() {
           
        }
    }
</script>

<style lang="less">
.content-template-wrapper {
    width: 100%;
    background: #fff;
    height: 100vh;
    border-color: #666;
    position: relative;
    border-radius: 5px;
}

.content-template-wrapper .content-template {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: auto;
    position: relative
}

.content-template-wrapper .content-template h1 {
    font-size: 32px;
    font-weight: 400;
    color: #404040;
    line-height: 48px
}

.content-template-wrapper .content-template>p {
    font-size: 12px;
    margin: 20px auto
}

.content-half-wrapper {
    height: 50vh
}

@media screen and (max-width:767px) {
    .content-template-wrapper .content-template h1 {
        font-size: 24px
    }
}

@content5: content5;
.@{content5} {
    &-text {
        width: 35%;
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: 15%;
        left: 5%;
        &>*.queue-anim-leaving {
            position: relative !important;
        }
        &>h1 {
            position: relative;
        }
        &>p {
            position: relative;
            margin-top: 10px;
        }
        & ul {
            position: relative;
            margin-top: 10%;
            display: inline-block;
            & li {
                margin-top: 8%;
                & span {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    position: absolute;
                }
                & h2,
                & p {
                    margin-left: 45px;
                }
                & h2 {
                    font-size: 14px;
                    margin-bottom: 10px;
                }
            }
        }
    }
    &-img {
        width: 50%;
        display: inline-block;
        position: relative;
        float: right;
        top: 15%;
        right: 5%;
    }
}

@media screen and (max-width: 767px) {
    .@{content5}-wrapper {
        height: 800px;
        overflow: hidden;
        .@{content5} {
            width: 90%;
            max-width: 100%;
            &-img,
            &-text {
                display: block;
                width: 100%;
                top: auto;
                left: auto;
                right: auto;
            }
            &-text {
                height: 430px;
                >h1 {
                    margin: 40px auto 20px;
                    font-size: 24px;
                }
                >h1,
                >p {
                    text-align: center;
                }
            }
            &-img {
                margin-top: 20px;
            }
        }
    }
}
</style>
