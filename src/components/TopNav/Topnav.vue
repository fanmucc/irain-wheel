<template>
    <div class="irain-topnav">
        <span class="collapsible" v-if="collapsible" @click="handleChangeCollapsible">切换</span>
        <div>
            <span>Logo</span>
        </div>
        <ul class="menu" v-show="mobile">
            <li class="menu-list"><span>菜单1</span></li>
            <li class="menu-list"><span>菜单2</span></li>
        </ul>
    </div>
</template>
<script lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
// import Vue from 'vue'
import './TopNav.less'
export default {
    name:'TopNav',
    props: {
        collapsible: {
            type: Boolean,
            default: false
        },
        isCollapsible: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const mobile = ref(false)
        const mobileStatus = () => {
            console.log(document.documentElement.clientWidth)
            let clientWidth = document.documentElement.clientWidth
            if (clientWidth < 800) {
                mobile.value = true
            } else {
                mobile.value = false
            }
        }
        const handleChangeCollapsible = () => {
            context.emit('on-collapsible', !props.isCollapsible)
        }

        onMounted(() => {
            window.addEventListener('resize', mobileStatus)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', mobileStatus)   
        })

        return {
            handleChangeCollapsible,
            mobile
        }
    }
}
</script>