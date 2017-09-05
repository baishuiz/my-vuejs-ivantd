<template>
  <!-- <div class="box box-demo">
                                        <slot name="component"></slot>
                                        <div class="box-demo-description">
                                          <slot name="description"></slot>
                                          <span class="btn-toggle" :class="{open: isOpen}" @click="toggle">
                                            123<i class="anticon anticon-down-circle-o"></i>
                                          </span>
                                      
                                        </div>
                                        <transition name="slide">
                                          <div class="box-demo-code" >
                                            <slot name="code"></slot>
                                          </div>
                                        </transition>
                                      </div> -->
  <div class="example code-row" style="overflow: hidden;">
    <div class="example-demo code-col code-col-span-12">
      <div class="example-case">
        <!-- <slot name="demo"></slot> -->
        <!-- <iframe :src="iframeUrl" frameborder="0"></iframe> -->
        <div class="phone" ref="phone">
          <div class="doc-simulator">
            <div class="doc-simulator__nav">
              <div class="doc-simulator__url">{{dpath}}</div>
              <div class="doc-simulator__reload"></div>
            </div>
            <iframe :src="dpath" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="example-split"></div> -->
    <div class="example-code code-col code-col-span-12 desc-b" :style="codeHeight">
      <div class="example-desc">
        <slot name="desc"></slot>
        <span></span>
      </div>
      <!-- <header class="example-header">
                          <span></span>
                        </header> -->
      <div :style="style">
        <slot name="code"></slot>
      </div>
      <div class="example-code-more" v-if="showMore" @click="showCode = !showCode">
        显示代码
        <!-- <Icon type="ios-arrow-down" v-show="!showCode"></Icon>
                              <Icon type="ios-arrow-up" v-show="showCode"></Icon>
                              <i-button type="text" v-show="hideCode && !showCode">
                                <template v-if="lang === 'zh-CN'">显示代码</template>
                                <template v-else>Show Code</template>
                              </i-button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { hostName } from '../config/env.js';
export default {
  name: 'Code',
  props: {
    jsfiddle: Object,
    iframeUrl: '',
    // title: {
    //   type: String,
    //   default: ''
    // },
    // vertical: {
    //   type: Boolean,
    //   default: false
    // },
    hideCode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // isOpen: false,
      // tipmsg: '展开代码'，
      showCode: false,
      showMore: true,
      example_height: 650,
      desc_height: 0,
      code_height: 0,
      ready: false,
      // lang: this.$lang
    };
  },
  computed: {
    dpath() {
      let { iframeUrl } = this;
      if (hostName) {
        return hostName + iframeUrl;
      }
      return iframeUrl;
    },
    codeHeight() {
      //  console.log(this.$slots.code[0].children[0])
      let style = {};
      if (this.ready) {
        if (this.showCode) {
          style.height = `${this.code_height}px`;
        } else {
          style.height = `${this.example_height}px`;
        }
      }
      return style;
    },
    style() {
      let style = {
        opacity: 1
      };
      if (this.hideCode && !this.showCode) {
        style.opacity = 0;
      }
      return style;
    }
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this)
      // console.log(this.$slots.desc[0].elm.offsetHeight)
      // console.log(this.$slots.code[0].elm.offsetHeight)
      // const demo_height = this.$children[0].$children[0].$el.clientHeight;
      // const code_height = this.$children[0].$children[1].$el.clientHeight + 20;
      // this.code_height = code_height;
      // this.code_height = 210;
      // if ((code_height <= demo_height) && !this.hideCode) {
      //   this.showMore = false;
      // }
      // this.demo_height = this.hideCode ? 30 : demo_height;
      // this.demo_height = 210;
      // const example_height = 623;
      // this.code_height = this.example_height - this.$slots.desc[0].elm.offsetHeight;1375 1353
      this.desc_height = this.$slots.desc[0].elm.offsetHeight;
      this.code_height = this.$slots.code[0].elm.offsetHeight + this.desc_height + 85;

      if ((this.code_height <= this.example_height) && !this.hideCode) {
        this.showMore = false;
      }
      // console.log(this.code_height)
      this.ready = true;
      // console.log(1);
    });
  }
};
</script>


<style scoped lang="less">
*,
 :after,
 :before {
  box-sizing: border-box;
}

.code-row {
  position: relative;
  margin-left: 0;
  margin-right: 0;
  height: auto;
  zoom: 1;
  display: block;
}

.code-row:after,
.code-row:before {
  content: "";
  display: table;
}

.code-col {
  position: relative;
  display: block;
}

.code-col-span-12 {
  display: block;
  width: 50%;
  float: left;
  flex: 0 0 auto;
}
</style>
<style scoped lang="less">
.example {
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 20px;
  position: relative;
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
    border-color: transparent;
    position: relative;
  }

  &-demo {
    padding: 20px 0;
    position: relative;
  }

  &-case {
    padding: 0 20px;
    .phone {
      z-index: 1;
      overflow: hidden;
      position: absolute;
      border-radius: 6px;
      background: #f2f2f4;
      -webkit-box-sizing: border-box;
      box-sizing: border-box; // right: 20px;
      width: 375px;
      height: 620px; // min-width: 375px;
      // top: -30px;
      -webkit-box-shadow: 0 2px 3px hsla(0, 0%, 4%, .1), 0 0 0 1px hsla(0, 0%, 4%, .1);
      box-shadow: 0 2px 3px hsla(0, 0%, 4%, .1), 0 0 0 1px hsla(0, 0%, 4%, .1);

      .doc-simulator__nav {
        height: 63px;
        background: url('../assets/doc.png') no-repeat;
        background-size: 100%;
        border-bottom: 1px solid #e5e5e5;

        .doc-simulator__url {
          top: 25px;
          left: 15px;
          right: 40px;
          font-size: 15px;
          position: absolute;
          text-align: center;
          font-weight: 700;
          line-height: 28px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .doc-simulator__reload {
          top: 25px;
          right: 10px;
          width: 28px;
          height: 28px;
          cursor: pointer;
          position: absolute;
        }
      }
      iframe {
        width: 100%;
        height: 556px;
      }
    }
  }

  &-desc {
    font-size: 12px; // padding: 0 20px;
    p {
      font-size: 12px !important;
      text-align: justify;
    }
    ul li {
      font-size: 12px !important;
    }
    blockquote {
      font-size: 12px !important;
    }
    span {
      &:before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #eee; // position: absolute;
        // top: 10px;
        left: 0;
      }
    }
  }

  &-code {
    padding: 0 10px;
    position: relative;
    overflow: hidden;
    transition: height .2s ease-in-out;

    &-more {
      position: absolute;
      bottom: 0;
      left: 4px;
      right: 4px;
      text-align: center;
      cursor: pointer;
      padding: 5px 0;
      /*transition: background .1s ease-in-out;*/
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        box-shadow: 0 -15px 30px #fff inset;
      }

      i {
        position: relative;
        top: 5px;
        z-index: 2;
      }
      .ivu-btn {
        padding: 0 0 4px;
        position: relative;
        top: 4px;
        z-index: 2;
      }

      &:hover {
        /*background: #fff;*/
        i {
          color: #5cb85c;
        }
      }
    }
  }
}
</style>