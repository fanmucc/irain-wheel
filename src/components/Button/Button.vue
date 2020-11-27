<template>
    <button type="button" :class="[
        'irain-btn',
        type ? 'irain-btn-' + type : '',
        buttonSize ? 'irain-btn--' + buttonSize : '',
        {
            'is-round': round,
            'is-circle': circle,
            'is-disabled': buttonDisabled
        },
    ]"
    :disabled="buttonDisabled"
    >
        <i v-if="icon" :class="['iconfont', `icon-${icon}`]"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script lang="ts">
// 引入css
import './button.less' 

import { computed, PropType } from 'vue'
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
        disabled: Boolean
        
    },
    setup(props, context) {
        const buttonSize = computed(() => {
            return props.size
        })
        const buttonDisabled = computed(() => {
            return props.disabled
        })
        return {
            buttonSize,
            buttonDisabled
        }
    }
}
</script>

<style scoped>
    /* @import './button.less'; */
</style>