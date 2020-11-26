<template>
    <div>
        <Button>默认</Button>
        <Button type="primary" style="margin-left: 20px">primary</Button>
        <Button type="info" style="margin-left: 20px">info</Button>
        <Button type="success" style="margin-left: 20px">success</Button>
        <Button type="warning" style="margin-left: 20px">warning</Button>
        <Button type="error" style="margin-left: 20px">error</Button>
        <Button type="text" style="margin-left: 20px">text</Button>
        <br>
        <br>
        <br>
        <hr>
        <br><br>
        <br>
        <Button type="primary" round style="margin-left: 20px">primary</Button>
        <Button type="info" round style="margin-left: 20px">info</Button>
        <Button type="success" round style="margin-left: 20px">success</Button>
        <Button type="warning" round style="margin-left: 20px">warning</Button>
        <Button type="error" round style="margin-left: 20px">error</Button>
        <Button type="text" round style="margin-left: 20px">text</Button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Button from '../../components/Button'
export default {
    name: 'ButtonPage',
    components: {
        Button
    }
}
</script>