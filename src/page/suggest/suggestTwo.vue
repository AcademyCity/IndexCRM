<template>
    <div class="suggestTwo">
        <div class="suggestTwoBox">
            <mt-button type="primary" @click="sendSuggest">提交</mt-button>
        </div>
    </div>
</template>
<script>


export default {
  name: 'suggestTwo',
  components: {
  },
  mounted() {
  },
  methods: {
    sendSuggest:function () {
        this.$router.push({ path: '/user/userInfo' })
    }
  }
}
</script>

<style scoped>
.suggestTwoBox {
    padding: 0 .5rem;
    padding-top: 55px
}

.mint-button {
    width: 100%;
    margin: 1rem 0;
    background-color: #86C166
}
</style>
