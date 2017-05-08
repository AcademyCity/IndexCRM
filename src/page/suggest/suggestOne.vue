<template>
  <div class="suggestOne">
    <div class="suggestOneBox">
      <mt-button type="primary" @click="next">下一步</mt-button>
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
    next:function () {
      this.$router.push({ path: '/suggest/suggestTwo' })
    }
  }
}
</script>

<style scoped>
.suggestOneBox {
  padding: 0 .5rem;
  padding-top: 55px
}

.mint-button {
  width: 100%;
  margin: 1rem 0;
  background-color: #86C166
}

</style>
