<template>
    <div class="content">
        <div class="suggestInfo">
            <div class="suggestInfoTitle">{{items[0].detail}}</div>
            <div class="suggestInfoContent">
                <mt-radio :title="items[0].detail" v-model="value" :options="['是', '否']">
                </mt-radio>
            </div>
        </div>
    
        <div class="suggestInfo">
            <div class="suggestInfoTitle">{{items[1].detail}}</div>
            <div class="suggestInfoContent">
                <mt-cell @click.native="openDatePicker" :key="items[0].message" :title="items[0].message" is-link>
                    <span></span>
                </mt-cell>
            </div>
        </div>
    
        <div class="suggestInfo">
            <div class="suggestInfoTitle">{{items[2].detail}}</div>
            <div class="suggestInfoContent">
                <mt-cell @click.native="openDatePicker" :key="items[0].message" title="汤头" is-link>
                    <span>{{items[0].message}}</span>
                </mt-cell>
                <mt-cell @click.native="openDatePicker" :key="items[0].message" title="肉盘" is-link>
                    <span>{{items[0].message}}</span>
                </mt-cell>
                <mt-cell @click.native="openDatePicker" :key="items[0].message" title="时蔬" is-link>
                    <span>{{items[0].message}}</span>
                </mt-cell>
                <mt-cell @click.native="openDatePicker" :key="items[0].message" title="沾酱" is-link>
                    <span>{{items[0].message}}</span>
                </mt-cell>
                <mt-cell @click.native="openDatePicker" :key="items[0].message" title="服务" is-link>
                    <span>{{items[0].message}}</span>
                </mt-cell>
                <mt-cell @click.native="openDatePicker" :key="items[0].message" title="整洁" is-link>
                    <span>{{items[0].message}}</span>
                </mt-cell>
            </div>
        </div>
        <div class="suggestInfo">
            <div class="suggestInfoTitle">{{items[3].detail}}</div>
            <div class="suggestInfoContent">
                <mt-cell @click.native="openDatePicker" :key="items[0].message" :title="items[0].message" is-link>
                </mt-cell>
    
                <mt-field placeholder="请填写具体建议" type="textarea" rows="4" v-modal="introduction"></mt-field>
    
            </div>
        </div>
        <mt-button type="primary" @click="next">提交</mt-button>
    </div>
</template>
<script>
import Moment from 'moment'
import { MessageBox } from 'mint-ui'

export default {
    data() {
        return {
            items: [{ message: '请选择', detail: "请问您这是第一次到XXXXX用餐吗？" }, { message: '请选择', detail: "请问您是如何知道门店的呢？" }, { message: '请选择', detail: "请问您今天的用餐体验？" }, { message: '请选择', detail: "您的意见和建议是什么" }],

            popupTimeVisible: false,
            timePicker: '',
            time: '',
            timeSlots: [{
                flex: 1,
                values: ['14:00之前', '14:00~17:30', '17:30~21:00', '21:00以后'],
                className: 'timeSlot'
            }],

            popupStoreVisible: false,
            storePicker: '',
            store: '',
            storeSlots: [{
                flex: 1,
                values: ['宝地广场店', '田尚坊店', '万科海上传奇店', '中原城市广场店', '春申大润发店', '曹安大润发店', '江桥万达店'],
                className: 'storeSlot'
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
            this.popupTimeVisible = true
        },
        timeChange: function (picker, values) {
            this.timePicker = picker
            this.time = values[0]
        },
        cancelTime: function () {
            this.popupTimeVisible = false
            this.timePicker.setSlotValue(0, this.time)
        },
        selectTime: function () {
            this.popupTimeVisible = false
            this.items[1].message = this.time
        },
        openStorePicker: function () {
            this.popupStoreVisible = true
        },
        storeChange: function (picker, values) {
            this.storePicker = picker
            this.store = values[0]
        },
        cancelStore: function () {
            this.popupStoreVisible = false
            this.storePicker.setSlotValue(0, this.store)
        },
        selectStore: function () {
            this.popupStoreVisible = false
            this.items[2].message = this.store
        }
    }
}
</script>

<style scoped>
.suggestInfo {
    border-radius: 6px;
    background: #fff;
    margin-bottom: .3rem;
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
