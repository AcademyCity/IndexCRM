<template>
  <div class="content">
    <mt-button id="btn_login" type="primary" @click="login">登录</mt-button>
  </div>
</template>
<script>


export default {
  components: {
  },
  mounted() {
  },
  methods: {
    login: function () {
      this.$router.push({ path: '/user/userInfo' })
    }
  }
}
</script>

