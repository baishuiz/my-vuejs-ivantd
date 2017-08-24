<template>
    <div :class="gridClassName">
        <v-flex justify="center" align="stretch" v-for="(i1,i) in gridData" :key="i">
            <v-flex-item :className="prefixCls+'-item'" v-for="(j1,j) in i1" :key="j">
                <div :class="prefixCls+'-item-content'">
                    <div :class="prefixCls+'-item-inner-content column-num-'+columnNum">
                        <img :class="prefixCls+'-icon'" :src="j1.icon" v-if="j1.icon">
                        <v-icon :className="prefixCls+'-icon'" :name="j1.svg" size="lg" v-if="j1.svg"/>
                        <div :class="prefixCls+'-text'" v-text="j1.text"></div>
                    </div>
                </div>
            </v-flex-item>
            <v-flex-item v-if="i1.length!=columnNum" :className="prefixCls+'-item '+prefixCls+'-null-item'" v-for="f in (columnNum-i1.length)" :key="f">
                <div :class="prefixCls+'-item-content'">
                    <div :class="prefixCls+'-item-inner-content'"></div>
                </div>
            </v-flex-item>
        </v-flex>
    </div>
</template>

<script>
import Flex from '../flex';
export default {
    name: 'Grid',
    data: function () {
        return {
            prefixCls: 'am-grid',
            gridData: [],
        }
    },
    props: {
        data: { //数据
            type: Array,
            required: true
        },
        columnNum: { //列数
            type: Number,
            default: 4,
        },
        hasLine: { //是否有边框
            type: Boolean,
            default: true
        }
    },
    comments: {
        Flex
    },
    computed: {
        gridClassName() {
            let {
                prefixCls,
                hasLine
            } = this;
            let className = {};
            className[prefixCls] = true;
            className[prefixCls + '-line'] = hasLine;
            return className;
        }
    },
    mounted() {
        if (this.data) {
            //拆分数组
            //[[],[],[],[]]
            let adata = new Array();
            let bdata = new Array();
            this.data.map((e, i) => {
                bdata.push(e)
                if ((i + 1) % this.columnNum == 0) {
                    adata.push(bdata)
                    bdata = new Array();
                }
                if ((i + 1) == this.data.length && bdata.length > 0) {
                    adata.push(bdata)
                }
            })
            this.gridData = adata;
        }
    }
}
</script>

<style scoped>

</style>