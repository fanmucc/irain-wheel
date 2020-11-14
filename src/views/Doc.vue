<template>
<div>
    <TopNav></TopNav>
    <div class="content">
        <aside>边栏</aside>
        <main>内容区</main>
    </div>
</div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav'
export default {
    name: 'Doc',
    components: {
        TopNav
    }
}
</script>
