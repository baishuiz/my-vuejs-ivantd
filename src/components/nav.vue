<template lang="html">
  <ul>
    <li class="nav-item" v-for="(item,index) in data" :key="index">
        <router-link :to="item.link.path" v-if="item.link" :class="['at',{'active':$route.path==item.link.path}]">{{item.name}}</router-link>
        <a class="at" v-else-if="item.href" :href="item.href" target="_blank">
            {{item.name}}
            <span v-if="item.version" class="version">{{item.version}}</span>
        </a>
        
        <a v-else>{{item.name}}</a>
        <template v-if="item.children">
            <ul>
                <li class="nav-sub-item" v-for="(child,c) in item.children" :key="c">
                    <router-link :to="child.link.path">{{child.name}}</router-link>
                </li>
            </ul>
        </template>
        <template v-if="item.groups">
            <div v-for="(group,g) in item.groups" :key="g">
                <div class="nav-group-title">{{group.groupName}}</div>
                <ul>
                    <li class="nav-sub-item" v-for="(child,c) in group.list" :key="c">
                        <router-link :to="child.link.path">{{child.name}}</router-link>
                    </li>
                </ul>
            </div>
        </template>
    </li>
</ul>
</template>
<style lang="less">
.version{
    // position: absolute;
    // left: 100px;
    // top:3px;
    // bottom: 0px;
    font-size: 12px;
    color:#ed3f14;
    // &:hover{
    //     color:#455a64;
    // }
}
</style>
<script lang="babel">

  export default {
    name: 'Nav',
    data:()=>({
    }),
    props: {
      data: {
        type: Array,
        default: ()=>[]
      },
    }
  }
</script>
