<template>
    <button type="button" :class="[
        'irain-btn',
        type ? 'irain-btn-' + type : '',
        
        {
            'is-round': round,
            'is-circle': circle
        }
    ]">
        <i v-if="icon" :class="['iconfont', `icon-${icon}`]"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script lang="ts">
// 引入css
import './button.less' 

import { PropType } from 'vue'
type IrainButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>
type ComponentSize = PropType<'' | 'large' | 'medium' | 'small' | 'mini' >
export default {
    name: 'Button',
    props: {
        type: {
            type: String as IrainButtonType,
            default: 'default',
            validator: (val: string) => {
                return [
                    'default',
                    'primary',
                    'success',
                    'warning',
                    'info',
                    'danger',
                    'text'
                ].includes(val)
            }
        },
        icon: {
            type: String,
            default: ''
        },
        size: {
            type: String as ComponentSize,
            validator: (val: string) => {
                return [
                    '',
                    'large',
                    'medium',
                    'small',
                    'mini'
                ].includes(val)
            }
        },
        round: Boolean,
        circle: Boolean,
        
    }
}
</script>

<style scoped>
    /* @import './button.less'; */
</style>