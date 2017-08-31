<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Badge
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <!-- <v-badge dot>
                    <span style="width: 0.52rem, height: 0.52rem, background: #ddd, display: inline-block" />
                </v-badge> -->
                <v-list>
                    <v-list-item align="middle" arrow="horizontal">
                        <v-badge dot>
                            哈哈
                        </v-badge>
                        <span>Dot Badge</span>
                        <div slot="extra">小红帽</div>
                    </v-list-item>
                    <v-list-item align="middle" arrow="horizontal">
                        <span>Dot Badge</span>
                        <div slot="extra">
                            <v-badge text="166" ></v-badge>
                        </div>
                    </v-list-item>
                    <v-list-item align="middle" class="special-badge">
                        <span>Use corner pro</span>
                        <div slot="extra">
                            <v-badge text="促" :corner="false"></v-badge>
                        </div>
                    </v-list-item>
                    <v-list-item align="middle">
                        <v-badge text="促" hot></v-badge>
                        <v-badge text="减" hot></v-badge>
                        <v-badge text="满" hot></v-badge>
                        <v-badge text="反" hot></v-badge>
                        <v-badge text="HOT" hot></v-badge>
                    </v-list-item>
                    <v-list-item align="middle">
                        <v-badge text="500">
                            <img src="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png">
                        </v-badge>
                        <div slot="extra">带数字</div>
                    </v-list-item>
                </v-list>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {
        return {
            animating: false
        }
    },
    methods: {
        show() {
            this.animating = !this.animating;

            setTimeout(() => {
                this.animating = false;
            }, 3000);
        }
    }
}
</script>

<style >

.special-badge .am-list-line {
  padding-right: 0;
}
.special-badge .am-list-line .am-list-extra {
  padding: 0;
  height: 100%;
}
.special-badge .am-badge {
  transform: rotate(45deg);
  transform-origin: right bottom;
  right: 0;
  top: 0.26rem;
  width: 1rem;
}
.special-badge .am-badge-text {
  border-radius: 0.02rem;
}
</style>