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
         <br>
        <br>
        <br>
        <hr>
        <br><br>
        <br>
        <Button type="primary" icon="search" circle></Button>
        <Button type="primary" icon="search">搜索</Button>


        <Button type="primary" size="medium" round style="margin-left: 20px">primary</Button>
        <Button type="info" round style="margin-left: 20px">info</Button>
        <Button type="success" round style="margin-left: 20px">success</Button>
        <br>
        <br>
        <br>
        <hr>
        <br><br>
        <br>
        <Button>默认</Button>
        <Button type="primary" size="medium" style="margin-left: 20px">primary</Button>
        <Button type="info" size="small" style="margin-left: 20px">info</Button>
        <Button type="success" size="mini" style="margin-left: 20px">success</Button>
        <br>
        <br>
        <br>
        <hr>
        <br><br>
        <br>
        <Button :disabled="true">默认</Button>
        <Button type="primary" :disabled="true" size="medium" style="margin-left: 20px">primary</Button>
        <Button type="info" :disabled="true" size="small" style="margin-left: 20px">info</Button>
        <Button type="success" :disabled="true" size="mini" style="margin-left: 20px">success</Button>
        <Button type="text" :disabled="true" style="margin-left: 20px">text</Button>
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