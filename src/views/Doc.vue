<template>
<div class="irain-doc">
    <header class="header">
        <nav class="navigation">
            <div class="logo">Irain-Wheel</div>
            <div class="nav-menu">
                <router-link class="link" to="/">首页</router-link>
                <router-link class="link link-active" to="/doc">组件</router-link>
            </div>
        </nav>
    </header>
    <div class="content">
        <aside class="aside">
            <ul class="aside-ul">
                <li>
                    <router-link to="/doc/color">颜色</router-link>
                </li>
                <li>
                    <router-link to="/button">Icon</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button</router-link>
                </li>
            </ul>
        </aside>
        <main class="main">
            <router-view class="main-content"/>
            
        </main>
    </div>
</div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav'
import Tabs from '../components/Tabs.vue'
import Tab from '../components/Tab.vue'
import Icon from '../components/Icon'
import Button from '../components/Button'
import { ref } from 'vue'
export default {
    name: 'Doc',
    components: {
        TopNav,
        Tabs,
        Tab,
        Icon,
        Button
    },
    setup() {
        const isCollapsible = ref(false)
        const handleChangeStatus = (status) => {
            console.log(status)
            isCollapsible.value = status
        }
        return {
            isCollapsible,
            handleChangeStatus
        }
    }
}
</script>
<style lang="less" scoped>
a {
    color: #2d8cf0;
    background: 0 0;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    transition: color .2s ease;
}
.header {
    position: fixed;
    width: 100%;
    height: 64px;
    line-height: 64px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    .navigation {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .logo {
            font-size: 16px;
            color: #2d8cf0;
        }
        .nav-menu {
            font-size: 14px;
            color: #515a6e;
            display: flex;
        }
        .link {
            display: block;
            outline: 0;
            list-style: none;
            font-size: 14px;
            padding: 0 20px;
            position: relative;
            z-index: 1;
            color: #515a6e;
            cursor: pointer;
            // transition: all .2s ease-in-out;
        }
        .link-active {
            color: #2d8cf0;
            border-bottom: 2px solid #2d8cf0;
        }
        .link:hover {
            color: #2d8cf0;
            border-bottom: 2px solid #2d8cf0;
        }
    }
}
    .irain-doc {
        width: 100%;
        min-height: 100vh; 
        padding: 0.1px;
        background: #fff;
        .content {
            width: 100%;
            margin-top: 64px;
            display: flex;
            height: calc(100vh - 64px);
            .aside {
                width: 200px;
                height: 100%;
                box-shadow: 1px 1px 1px rgba(0,0,0,.2);
                .aside-ul {
                    a {
                        display: block;
                        box-sizing: border-box;
                        width: 100%;
                        padding: 10px 30px;
                        font-size: 14px;
                        color: #515a6e;
                    }
                    .router-link-active {
                        color: #2d8cf0;
                        border-right: 2px solid #2d8cf0;
                        background: #f0faff;
                    }
                }
            }
            .main {
                flex: 1;
                padding: 20px;
                font-size: 16px;
            }
        }
    }
</style>
