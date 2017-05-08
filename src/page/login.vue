<template>
  <div class="login">
    <div class="loginBox">
      <mt-button id="btn_login" type="custom" @click="login">登录</mt-button>
    </div>
  </div>
</template>
<script>


export default {
  name: 'login',
  components: {
  },
  mounted() {
  },
  methods: {
    login:function () {
      this.$router.push({ path: '/user/userInfo' })
    }
  }
}
</script>

<style scoped>
.loginBox {
  padding: 0 .5rem;
  padding-top: 55px
}

</style>
