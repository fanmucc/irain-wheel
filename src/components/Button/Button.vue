<template>
    <button type="button" class="irain-btn">
        <slot></slot>
    </button>
</template>
<script lang="ts">
import './button.less'
export default {
    name: 'Button'
}
</script>

<style scoped>
    /* @import './button.less'; */
</style>