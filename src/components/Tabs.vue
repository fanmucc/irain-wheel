<template>
    <div>
        <div v-for="(title, index) in title" :key="`tap-title-${index}`">{{title}}</div>
        <component v-for="(item, index) in defaults" :is="item" :key="`tab-${index}`"></component>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Tab from './Tab.vue'
export default {
    name: 'Tabs',
    setup(props, context) {
        const defaults = context.slots.default()
        const title = ref([])
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs 子标签必须为 Tab')
            } else {
                title.value.push(tag.props.title)
            }
        })
        return {
            defaults,
            title
        }
    }
}
</script>