<template>
    <div class="container">
        <h1>页面不存在</h1>
        <nuxt-link to="/">首 页</nuxt-link>
    </div>
</template>

<script>
    export default {
        props: ['error'],
        layout: 'blog' // 你可以为错误页面指定自定义的布局
    }
</script>


