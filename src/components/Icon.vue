<template>
    <i :class="iconClass" :style="styles"></i>
</template>
<script lang="ts">
import { computed, ref } from 'vue'
export default {
    name: 'Icon',
    props: {
        type: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '@515afe'
        },
        size: {
            type: String,
            default: ''
        }
    },
    setup (props, context) {
        const iconClass = computed(() => {
            return [
                'iconfont',
                `icon-${props.type}`
            ]
        })
        const styles = computed(() => {
            return {
                color: props.color,
                fontSize: `${props.size}px`
            }
        })
        return {
            iconClass,
            styles
        }
    }
}
</script>