<template>
    <div class="content">
        <mt-button type="primary" @click="sendSuggest">提交</mt-button>
    </div>
</template>
<script>


export default {
    components: {
    },
    mounted() {
    },
    methods: {
        sendSuggest: function () {
            this.$router.push({ path: '/user/userInfo' })
        }
    }
}
</script>

