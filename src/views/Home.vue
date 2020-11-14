<template>
<div>
    <top-nav></top-nav>
    <div class="banner">
        <h1>这是个UI框架</h1>
        <h2>哈哈哈</h2>
        <p class="actions">
            <a href="#">GitHub</a>
            <a href="#">开始</a>
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

<style lang="sass" scoped>

</style>