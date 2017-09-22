<template>
    <div class="am-picker" style="flex-direction: row;">
        <div class="am-picker-col" style="flex: 1 1 0%;" v-for="(data,index) in pickerData" :key="index">
            <div class="am-picker-col-mask" style="background-size: 100% 1.02rem;"></div>
            <div class="am-picker-col-indicator " style="top: 1.02rem;"></div>
            <div class="am-picker-col-content" style="padding: 1.02rem 0px;">
                <div class="am-picker-col-item" v-for="(item,i) in data" :key="i">{{item.text}}</div>
                <!-- <div class="am-picker-col-item  am-picker-col-item-selected ">2014</div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PickerView',
    data: function() {
        return {
            pickerData: this.data.slice(),
            pickerSelectedIndex: this.selectedIndex,
            pickerSelectedVal: [],
            pickerSelectedText: []
        }
    },
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        selectedIndex: {
            type: Array,
            default() {
                return []
            }
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    created() {
        if (!this.pickerSelectedIndex.length) {
            this.pickerSelectedIndex = []
            for (let i = 0; i < this.pickerData.length; i++) {
                this.pickerSelectedIndex[i] = 0
            }
        }
    },
    methods: {
        setData(data) {
            this.pickerData = data.slice()
            this.dirty = true
        },
    },
    watch: {
        
    }
}
</script>