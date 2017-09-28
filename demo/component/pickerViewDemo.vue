<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>PickerView
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-picker-view :data="data[0]" @select="handleSelect(0,arguments)" :selected-index="selectedIndex[0]"></v-picker-view>
            </div>
        </div>
    </div>
</template>

<script>

let data1 = [
    {
        text: '剧毒',
        value: 1
    }, {
        text: '蚂蚁',
        value: 2
    },
    {
        text: '幽鬼',
        value: 3
    },
    {
        text: '主宰',
        value: 4
    },
    {
        text: '卡尔',
        value: 5
    },
    {
        text: '宙斯',
        value: 6
    },
    {
        text: '巫医',
        value: 7
    }, {
        text: '巫妖',
        value: 8
    },
    {
        text: '神谕者',
        value: 9
    },
    {
        text: '撼地神牛',
        value: 10
    },
    {
        text: '蓝胖子',
        value: 11
    },
    {
        text: '水晶室女',
        value: 12
    },
    {
        text: '莉娜',
        value: 13
    },
    {
        text: '斯拉克',
        value: 14
    },
    {
        text: '斯拉达',
        value: 15
    }
]

let data2 = [
    {
        text: '输出',
        value: 'a'
    }, {
        text: '控制',
        value: 'b'
    },
    {
        text: '核心',
        value: 'c'
    },
    {
        text: '爆发',
        value: 'd'
    },
    {
        text: '辅助',
        value: 'e'
    },
    {
        text: '打野',
        value: 'f'
    },
    {
        text: '逃生',
        value: 'g'
    }, {
        text: '先手',
        value: 'h'
    }
]

let data3 = [
    {
        text: '梅肯',
        value: 's'
    }, {
        text: '秘法鞋',
        value: 'ss'
    },
    {
        text: '假腿',
        value: 'sss'
    },
    {
        text: '飞鞋',
        value: 'ssss'
    },
    {
        text: '辉耀',
        value: 'sssss'
    },
    {
        text: '金箍棒',
        value: 'ssssss'
    }
]

export default {
    name: 'name',
    data: function() {
        return {
            data: [
                [data1],
                [data1, data2],
                [data1, data2, data3],
                // [provinceList, cityList, areaList]
            ],
            selectedIndex: [
                [0],
                [1, 0],
                [0, 1, 2],
                // [0, 0, 0]
            ],
        }
    },
    methods: {
        handleSelect(index, args) {
            // this.selectedText.splice(index, 1, args[2].join('，'))
        }
    }

}
</script>

<style scoped>

</style>