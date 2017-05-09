<template>
  <div id="app">
    <headTop></headTop>
    <router-view></router-view>
    <load></load>
  </div>
</template>
<script>
import load from './components/common/loading'
import headTop from './components/header/head'

export default {
  name: 'app',
  components: {
    load,headTop
  },
  mounted: function(){
  },
  methods: {
  }
}
</script>

