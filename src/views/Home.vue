<template>
<div class="irain-home">
    <header class="header">
        <nav class="navigation">
            <div class="logo">Irain-Wheel</div>
            <div class="nav-menu">
                <router-link class="link link-active" to="/">首页</router-link>
                <router-link class="link" to="/doc">组件</router-link>
            </div>
        </nav>
    </header>
    <div class="banner">
        <h1>Irain-Wheel</h1>

        <p class="actions">
            <a href="#">GitHub</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
</div>
</template>
<script lang="ts">
export default {
    name: 'Home',
    components: {
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
.irain-home {
    width: 100%;
    min-height: 100vh;
    background: #fff;
    .banner {
        padding-top: 64px;
        height: calc(100vh - 64px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .actions {
            display: flex;
            a {
                display: block;
                width: 120px;
                line-height: 32px;
                text-align: center;
                text-decoration: none;
                color: black;
                border: 1px solid #2d8cf0;
                padding: 5px 10px;
                font-size: 16px;
                border-radius: 25px;
                margin: 10px 20px;
            }
        }
    }
}
</style>