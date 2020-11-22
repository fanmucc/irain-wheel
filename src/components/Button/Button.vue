<template>
    <button type="button" class="irain-btn">
        <slot></slot>
    </button>
</template>
<script lang="ts">
export default {
    name: 'Button'
}
</script>

<style scoped>
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
.irain-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    user-select: none;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    color: #515a6e;
    background-color: #fff;
    border-color: #dcdee2;
}
.irain-btn:hover {
    color: #57a3f3;
    background-color: #fff;
    border-color: #57a3f3;
}
.irain-btn:active {
    color: #2b85e4;
    background-color: #fff;
    border-color: #2b85e4;
    outline: 0;
}
.irain-btn:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
}
</style>