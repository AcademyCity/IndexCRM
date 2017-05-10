<template>
  <div class="content">
    <div class="suggestInfo">
      <div class="suggestInfoTitle">用餐信息</div>
      <div class="suggestInfoContent">
        <mt-cell class="suggestInfoContentItem" @click.native="openPicker" :key="item.message" :title="item.detail" is-link>
          <span>{{item.message}}</span>
        </mt-cell>
        <mt-datetime-picker :startDate="startDate" :endDate="endDate" v-model="nowDate"
                            type="date" ref="picker" year-format="{value} 年" 
                            month-format="{value} 月" date-format="{value} 日" 
                            @confirm="handleConfirm">
        </mt-datetime-picker>
        <mt-cell class="suggestInfoContentItem" :key="item.message" :title="item.detail" is-link>
          <span>{{item.message}}</span>
        </mt-cell>
        <mt-cell class="suggestInfoContentItem" :key="item.message" :title="item.detail" is-link>
          <span>{{item.message}}</span>
        </mt-cell>
        <mt-cell class="suggestInfoContentItem" :key="item.message" :title="item.detail" is-link>
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
      item: { message: '请选择', detail: "用餐日期" },
      startDate: new Date("2017,1,1"),
      endDate: new Date("2027,12,31"),
      nowDate:new Date()
     
    }
  },
  components: {
  },
  mounted() {
  },
  methods: {
    next: function () {
      this.$router.push({ path: '/suggest/suggestTwo' })
    },
    openPicker: function () {
      console.log("xxx");
      this.$refs.picker.open();
    },
    handleConfirm: function (value) {
      this.item.message=value.toString();
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
  padding: 0 .25rem;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: .4rem;
  border-radius: 6px 6px 0 0;
}

.suggestInfoContent {
  color: #0B1013;
  /*height: 1rem;
  line-height: 1rem;
  font-size: .35rem;*/
}

.suggestInfoContentItem:last-child {
  border-radius: 0 0 6px 6px;
}
</style>
