<template>
    <article class="markdown-body" v-html="md">
    </article>
</template>
<script>
import md from '../../markdown/intro.md'
export default {
    data () {
        return {md}
    }
}
</script>
<style scoped>
.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>