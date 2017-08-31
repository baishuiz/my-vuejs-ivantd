<template>
    <header class="header-wrapper">
        <div class="header">
            <div class="header-logo">
                <img height="22" src="../assets/fosun_logo.png" />
            </div>
            <nav class="web-nav">
                <ul style="list-style: none;">
                    <li v-for="(item,index) in data" :key="index">
                        <router-link :to="item.path" v-text="item.name" :class="{'active':$route.path==item.path}"></router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import main from '../main.json'
export default {
    name: 'Header',
    data() {
        return {
            data: main.headerNav
        }
    }
}
</script>