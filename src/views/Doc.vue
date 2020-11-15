<template>
<div class="irain-doc">
    <TopNav collapsible :isCollapsible="isCollapsible" @on-collapsible="handleChangeStatus"> </TopNav>
    <div class="content">
        <aside :style="{transform: isCollapsible ? 'translateX(-300px)' : ''}">边栏</aside>
        <main :style="{width: isCollapsible ? '100vw' : '', paddingLeft: isCollapsible ? '0px' : '300px'}">内容区</main>
    </div>
</div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav'
import { ref } from 'vue'
export default {
    name: 'Doc',
    components: {
        TopNav
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
    .irain-doc {
        width: 100%;
        min-height: 100vh; 
        padding: 0.1px;
        .content {
            width: 100%;
            margin-top: 64px;
            display: flex;
            height: calc(100vh - 64px);
            position: relative;
            box-sizing: content-box;
            aside {
                position: absolute;
                height: 100%;
                width: 300px;
                overflow: hidden;
                border-right: 1px solid;
            }
            main {
                position: absolute;
                width: calc(100% - 300px);
            }
        }
    }
</style>
