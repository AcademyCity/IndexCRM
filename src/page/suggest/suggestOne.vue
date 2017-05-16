<template>
  <div class="content">
    <div class="suggestInfo">
      <div class="suggestInfoTitle">用餐信息</div>
      <div class="suggestInfoContent">
        <mt-cell class="suggestInfoContentItem" @click.native="openDatePicker" :key="items[0].message" :title="items[0].detail" is-link>
          <span>{{items[0].message}}</span>
        </mt-cell>
        <mt-datetime-picker :startDate="startDate" :endDate="endDate" v-model="nowDate" type="date" ref="picker" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
        </mt-datetime-picker>
        <mt-cell class="suggestInfoContentItem" @click.native="openTimePicker" :key="items[1].message" :title="items[1].detail" is-link>
          <span>{{items[1].message}}</span>
        </mt-cell>
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
          <div class="picker-toolbar">
            <span class="mint-datetime-action mint-datetime-cancel" @click="cancelTime">取消</span>
            <span class="mint-datetime-action mint-datetime-confirm" @click="selectTime">确定</span>
          </div>
          <mt-picker :slots="dateSlots" @change="onTimeChange"></mt-picker>
        </mt-popup>
  
        <mt-cell class="suggestInfoContentItem" :key="items[2].message" :title="items[2].detail" is-link>
          <span>{{items[2].message}}</span>
        </mt-cell>
        <mt-cell class="suggestInfoContentItem" :key="items[3].message" :title="items[3].detail" is-link>
          <span>{{items[3].message}}</span>
        </mt-cell>
      </div>
    </div>
    <mt-button type="primary" @click="next">下一步</mt-button>
  </div>
</template>
<script>
import Moment from 'moment'

export default {
  data() {
    return {
      items: [{ message: '请选择', detail: "用餐日期" }, { message: '请选择', detail: "用餐时间" }, { message: '请选择', detail: "用餐店铺" }, { message: '请选择', detail: "交易序号" }],
      startDate: new Date("2017,1,1"),
      endDate: new Date("2027,12,31"),
      nowDate: new Date(),
      popupVisible: false,
      areaPicker: '', 
      Time:'',
      dateSlots: [{
        flex: 1,
        values: ['14:00之前', '14:00~17:30', '17:30~21:00', '21:00以后'],
        className: 'slot1'
      }],
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
    openDatePicker: function () {
      this.$refs.picker.open()
    },
    handleConfirm: function (value) {
      this.items[0].message = Moment(value).format("YYYY.MM.DD")
    },
    openTimePicker: function () {
      this.popupVisible = true
    },
    onTimeChange: function (picker, values) {
      this.areaPicker = picker
      this.Time=values[0]
    },
    cancelTime: function () {
      this.popupVisible = false
      this.areaPicker.setSlotValue(0, this.Time)
    },
    selectTime: function () {
      this.popupVisible = false
      this.items[1].message = this.Time
    },
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
