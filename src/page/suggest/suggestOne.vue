<template>
  <div class="content">
    <div class="suggestInfo">
      <div class="suggestInfoTitle">用餐信息</div>
      <div class="suggestInfoContent">
        <mt-cell @click.native="openDatePicker" :key="items[0].message" :title="items[0].detail" is-link>
          <span>{{items[0].message}}</span>
        </mt-cell>
        <mt-cell @click.native="openTimePicker" :key="items[1].message" :title="items[1].detail" is-link>
          <span>{{items[1].message}}</span>
        </mt-cell>
        <mt-cell @click.native="openStorePicker" :key="items[2].message" :title="items[2].detail" is-link>
          <span>{{items[2].message}}</span>
        </mt-cell>
      </div>
    </div>
    <mt-button type="primary" @click="next">下一步</mt-button>

    <mt-datetime-picker :startDate="startDate" v-model="this.nowDate" type="date" ref="picker" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
    </mt-datetime-picker>
    <mt-popup v-model="popupTimeVisible" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="cancel('Time')">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="select('Time')">确定</span>
      </div>
      <mt-picker :slots="timeSlots" @change="timeChange"></mt-picker>
    </mt-popup>
    <mt-popup v-model="popupStoreVisible" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="cancel('Store')">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="select('Store')">确定</span>
      </div>
      <mt-picker :slots="storeSlots" @change="storeChange"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import Moment from "moment";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      items: [
        { message: "请选择", detail: "用餐日期" },
        { message: "请选择", detail: "用餐时间" },
        { message: "请选择", detail: "用餐店铺" }
      ],

      startDate: new Date(new Date().getFullYear() + ",1,1"),
      nowDate: new Date(),

      popupTimeVisible: false,
      timePicker: null,
      time: "",
      timeSlots: [
        {
          flex: 1,
          values: ["14:00 之前", "14:00~17:30", "17:30~21:00", "21:00 以后"],
          className: "slot1"
        }
      ],

      popupStoreVisible: false,
      storePicker: null,
      store: "",
      storeSlots: [
        {
          flex: 1,
          values: ["宝地广场店", "田尚坊店", "万科海上传奇店", "中原城市广场店"],
          className: "slot1"
        }
      ]
    };
  },
  components: {},
  mounted() {},
  methods: {
    next: function() {
      if (
        this.items[0].message == "请选择" ||
        this.time == "请选择" ||
        this.store == "请选择"
      ) {
        Toast({
          message: "请选择用餐信息",
          position: "bottom",
          duration: 2000
        });
      } else {
        this.$router.push({
          path: "/suggest/suggestTwo",
          query: {
            eatDate: this.items[0].message,
            eatTime: this.time,
            storeNo: this.store
          }
        });
      }
    },
    openDatePicker: function() {
      this.$refs.picker.open();
    },
    handleConfirm: function(value) {
      this.items[0].message = Moment(value).format("YYYY-MM-DD");
    },
    openTimePicker: function() {
      this.popupTimeVisible = true;
    },
    timeChange: function(picker, values) {
      this.timePicker = picker;
      this.time = values[0];
    },
    openStorePicker: function() {
      this.popupStoreVisible = true;
    },
    storeChange: function(picker, values) {
      this.storePicker = picker;
      this.store = values[0];
    },
    select: function(value) {
      if (value == "Time") {
        this.popupTimeVisible = false;
        this.items[1].message = this.time;
      }
      if (value == "Store") {
        this.popupStoreVisible = false;
        this.items[2].message = this.store;
      }
    },
    cancel: function(value) {
      if (value == "Time") {
        this.popupTimeVisible = false;
        this.timePicker.setSlotValue(0, this.time);
      }
      if (value == "Store") {
        this.popupStoreVisible = false;
        this.storePicker.setSlotValue(0, this.store);
      }
    }
  }
};
</script>

<style scoped>
.suggestInfo {
  border-radius: 6px;
  background: #fff;
}

.suggestInfoTitle {
  color: #fff;
  background: #86c166;
  padding: 0 0.25rem;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.4rem;
  border-radius: 6px 6px 0 0;
}

.suggestInfoContent {
  color: #0b1013;
  /*height: 1rem;
  line-height: 1rem;
  font-size: .35rem;*/
}
</style>
