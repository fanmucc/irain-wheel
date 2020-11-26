<template>
    <button type="button" :class="[
        'irain-btn',
        type ? 'irain-btn-' + type : '',
        {
            'is-round': round
        }
    ]">
        <slot></slot>
    </button>
</template>
<script lang="ts">
// 引入css
import './button.less' 

import { PropType } from 'vue'
type IrainButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | 'default'>
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
        round: Boolean
        // size: {
        //     type: String as PropType<ComponentSize>,
        //     validator: isValidComponentSize
        // }
    }
}
</script>

<style scoped>
    /* @import './button.less'; */
</style>