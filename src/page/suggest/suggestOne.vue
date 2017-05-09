<template>
  <div class="content">
    <div class="suggestInfo">
      <div class="suggestInfoTitle">用餐信息</div>
      <div class="suggestInfoContent">
        <mt-cell :key="item.message" :title="item.detail">
          <span>{{item.message}}</span>
        </mt-cell>
      </div>
    </div>
    <mt-button type="primary" @click="next">下一步</mt-button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      item: { message: '请选择', detail: "用餐日期" }
    }
  },
  components: {
  },
  mounted() {
  },
  methods: {
    next: function () {
      this.$router.push({ path: '/suggest/suggestTwo' })
    }
  }
}
</script>

<style scoped>
.suggestInfo {
  border-radius: 6px;
  background: #fff;
}

.suggestInfoTitle {
  color: #fff;
  background: #86C166;
  padding: 0 .6rem;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: .45rem;
  border-radius: 6px 6px 0 0;
}

.suggestInfoContent {
  color: #0B1013;
  padding: 0 .6rem;
  height: 1rem;
  line-height: 1rem;
  font-size: .35rem;
}
</style>
