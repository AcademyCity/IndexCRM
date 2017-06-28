<template>
  <mt-header fixed :title="headContent">
      <mt-button icon="back" @click="back" slot="left"></mt-button>
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

