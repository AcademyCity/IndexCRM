<template>
    <div class="content">
        <div class="suggestInfo">
            <div class="suggestInfoTitle">{{items[0].detail}}</div>
            <div class="suggestInfoContent">
                <mt-radio :title="items[0].detail" v-model="isFirst" :options="['是', '否']">
                </mt-radio>
            </div>
        </div> 
        <!--<div class="suggestInfo">
            <div class="suggestInfoTitle">{{items[1].detail}}</div>
            <div class="suggestInfoContent">
                <mt-cell @click.native="openSourcePicker" :key="items[1].message" :title="items[1].message" is-link>
                </mt-cell>
            </div>
        </div>
         <div class="suggestInfo">
            <div class="suggestInfoTitle">{{items[2].detail}}</div>
            <div class="suggestInfoContent">
                <mt-cell @click.native="openFeelPicker(0)" :key="items[0].message" title="汤头" is-link>
                    <span>{{feels[0]}}</span>
                </mt-cell>
                <mt-cell @click.native="openFeelPicker(1)" :key="items[0].message" title="肉盘" is-link>
                    <span>{{feels[1]}}</span>
                </mt-cell>
                <mt-cell @click.native="openFeelPicker(2)" :key="items[0].message" title="时蔬" is-link>
                    <span>{{feels[2]}}</span>
                </mt-cell>
                <mt-cell @click.native="openFeelPicker(3)" :key="items[0].message" title="沾酱" is-link>
                    <span>{{feels[3]}}</span>
                </mt-cell>
                <mt-cell @click.native="openFeelPicker(4)" :key="items[0].message" title="服务" is-link>
                    <span>{{feels[4]}}</span>
                </mt-cell>
                <mt-cell @click.native="openFeelPicker(5)" :key="items[0].message" title="整洁" is-link>
                    <span>{{feels[5]}}</span>
                </mt-cell>
            </div>
        </div> -->
        <div class="suggestInfo">
            <div class="suggestInfoTitle">{{items[3].detail}}</div>
            <div class="suggestInfoContent">
                <mt-cell @click.native="openSuggestPicker" :key="items[3].message" :title="items[3].message" is-link>
                </mt-cell>
                <mt-field placeholder="请填写具体建议" type="textarea" rows="4" :value="suggestContent" v-model="suggestContent"></mt-field>
            </div>
        </div>
        <mt-button type="primary" style="" @click="submit">提交</mt-button>
        
        <mt-popup v-model="popupSourceVisible" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="cancel('Source')">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="select('Source')">确定</span>
            </div>
            <mt-picker :slots="sourceSlots" @change="sourceChange"></mt-picker>
        </mt-popup>
        <mt-popup v-model="popupFeelVisible" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="cancel('Feel')">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="select('Feel')">确定</span>
            </div>
            <mt-picker :slots="feelSlots" @change="feelChange"></mt-picker>
        </mt-popup>
        <mt-popup v-model="popupSuggestVisible" position="bottom" class="mint-popup-4">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="cancel('Suggest')">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="select('Suggest')">确定</span>
            </div>
            <mt-picker :slots="suggestSlots" @change="suggestChange"></mt-picker>
        </mt-popup>
    </div>
</template>
<script>
import Moment from "moment";
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      items: [
        { message: "请选择", detail: "请问您这是第一次到石头锅用餐吗？" },
        { message: "请选择", detail: "请问您是如何知道门店的呢？" },
        { message: "请选择", detail: "请问您今天的用餐体验？" },
        { message: "请选择", detail: "您的意见和建议是什么？" }
      ],
      isFirst: "",
      suggestContent: "",
      popupSourceVisible: false,
      sourcePicker: null,
      source: "",
      sourceSlots: [
        {
          flex: 1,
          values: [
            "以前来过",
            "朋友推荐",
            "广告文宣",
            "网络信息",
            "路过",
            "其他"
          ],
          className: "slot1"
        }
      ],
      popupFeelVisible: false,
      feelPicker: null,
      feels: ["请选择", "请选择", "请选择", "请选择", "请选择", "请选择"],
      feel: "",
      feelNum: 0,
      feelSlots: [
        {
          flex: 1,
          values: ["非常满意", "满意", "普通", "差", "很差"],
          className: "slot1"
        }
      ],
      popupSuggestVisible: false,
      suggestPicker: null,
      suggest: "",
      suggestSlots: [
        {
          flex: 1,
          values: ["我要赞美", "可以更好"],
          className: "slot1"
        }
      ]
    };
  },
  components: {},
  mounted() {
    if (
      this.$route.query.eatDate == null ||
      this.$route.query.eatTime == null ||
      this.$route.query.storeNo == null
    ) {
      this.$router.push({ path: "/suggest/suggestOne" });
    }
  },
  methods: {
    submit: function() {
      var data = {};
      data.StoreNo = this.$route.query.storeNo;
      data.PosNo = "";
      data.EatDate = this.$route.query.eatDate;
      data.EatTime = this.$route.query.eatTime;
      data.Reply = this.items[3].message;
      data.ReplyDetail = this.suggestContent;
      data.Reply1 = this.isFirst;
      data.Reply2 = "";
      data.Reply3 = "";
      data.Reply4 = "";
      data.Reply5 = "";
      data.Reply6 = "";
      data.Reply7 = "";
      data.Reply8 = "";
      data.OpenId =this.$store.state.common.login.openId;
      
      if (
        data.Reply == "请选择" ||
        data.Reply1 == "" 
      ) {
        Toast({
          message: "请完善建议内容",
          position: "bottom",
          duration: 2000
        });
      } else {
        this.$http
          .post("Suggest/AddSuggest", data)
          .then(response => {
            if (response.success) {
              Toast({
                message: "感谢您的建议",
                position: "bottom",
                duration: 2000
              });
              this.$router.push({ path: "/user/userInfo" });
            } else {
              MessageBox.alert(response.message).then(action => {
                this.$store.dispatch("common/login/logOut");
                window.location.reload();
              });
            }
          })
          .catch(error => {
            MessageBox.alert("发生错误:" + error).then(action => {
              this.$store.dispatch("common/login/logOut");
              window.location.reload();
            });
          });
      }
    },
    openSourcePicker: function() {
      this.popupSourceVisible = true;
    },
    sourceChange: function(picker, values) {
      this.sourcePicker = picker;
      this.source = values[0];
    },
    openFeelPicker: function(value) {
      this.feelNum = value;
      this.popupFeelVisible = true;
      if (this.feels[this.feelNum] == "请选择") {
        this.feelPicker.setSlotValue(0, "非常满意");
      } else {
        this.feelPicker.setSlotValue(0, this.feels[this.feelNum]);
      }
    },
    feelChange: function(picker, values) {
      this.feelPicker = picker;
      this.feel = values[0];
    },
    openSuggestPicker: function() {
      this.popupSuggestVisible = true;
    },
    suggestChange: function(picker, values) {
      this.suggestPicker = picker;
      this.suggest = values[0];
    },
    select: function(value) {
      if (value == "Source") {
        this.popupSourceVisible = false;
        this.items[1].message = this.source;
      }
      if (value == "Feel") {
        this.popupFeelVisible = false;
        this.feels[this.feelNum] = this.feel;
      }
      if (value == "Suggest") {
        this.popupSuggestVisible = false;
        this.items[3].message = this.suggest;
      }
    },
    cancel: function(value) {
      if (value == "Source") {
        this.popupSourceVisible = false;
        this.sourcePicker.setSlotValue(0, this.source);
      }
      if (value == "Feel") {
        this.popupFeelVisible = false;
      }
      if (value == "Suggest") {
        this.popupSuggestVisible = false;
        this.suggestPicker.setSlotValue(0, this.suggest);
      }
    }
  }
};
</script>

<style scoped>
.mint-popup-4 {
  float: left;
}

.suggestInfo {
  border-radius: 6px;
  background: #fff;
  margin-bottom: 0.3rem;
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

.suggestInfoContentItem:last-child {
  border-radius: 0 0 6px 6px;
}

.mint-button--primary {
  margin-bottom: 1rem;
}
</style>
