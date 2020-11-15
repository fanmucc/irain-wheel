<template>
<div class="irain-home">
    <top-nav></top-nav>
    <div class="banner">
        <h1>这是个UI框架</h1>
        <h2>哈哈哈</h2>
        <p class="actions">
            <a href="#">GitHub</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
</div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav'
export default {
    name: 'Home',
    components: {
        TopNav
    }
}
</script>
<style lang="less" scoped>
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
            /*正常的未被访问过的链接*/
            a:link {
                text-decoration: none;
            }
            /*已经访问过的链接*/
            a:visited {
                text-decoration: none;
            }
            /*鼠标划过(停留)的链接*/
            a:hover {
                text-decoration: none;
            }
            /* 正在点击的链接，鼠标在元素上按下还没有松开*/
            a:active {
                text-decoration: none;
            }
            /* 获得焦点的时候 鼠标松开时显示的颜色*/
            a:focus {
                text-decoration: none;
            }
        }
    }
}
</style>