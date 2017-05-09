<template>
  <mt-header fixed :title="headContent">
    <router-link to="/" slot="left">
      <mt-button icon="back" @click="back"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'head',
  computed: {
    ...mapGetters({
      headContent: 'header/head/headContent'
    })
  },
  methods: {
    back: function () {
      this.$router.go(-1);
    }
  },
}
</script>

