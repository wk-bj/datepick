# B 端拖拽日历组件
> 基于Vue.js 的 前端业务组件。

## B 端拖拽日历组件
> Vue 引入

<wk-datepick @dateChange="curDate" :curDateList="dateList"/>

```` html
<wk-datepick @dateChange="curDate" :curDateList="dateList"/>
````

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|curDateList|用于回显的选中数据|Array|否|\[xSummarylist: \'03:00-04:00',xlist: \[ {sid:'seaty7x7',x:'03:00 - 03:30'},{sid:'seaty7x7',x:'03:30 - 04:00'}] ,y: '星期日', yvalue:6\]|


### 方法

|事件名|说明|返回值|
|---|------|-----|
|dateChange|当前选中日期|--|


<script>
import WkDatepick from './Datepick';

export default {
  data() {
    return {
       dateList: [
               {
                 xSummarylist:"03:00-06:00",
                 xlist:[
                   {
                     sid: 'seaty7x7',
                     x: "03:00 - 03:30"
                   },
                   {
                     sid: 'seaty7x8',
                     x: "03:30 - 04:00"
                   },
                   {
                     sid: 'seaty7x9',
                     x: "04:00 - 04:30"
                   },
                   {
                     sid: 'seaty7x10',
                     x: "04:30 - 05:00"
                   },
                   {
                     sid: 'seaty7x11',
                     x: "05:00 - 05:30"
                   },
                   {
                     sid: 'seaty7x12',
                     x: "06:30 - 06:00"
                   }
                 ],
                 y: '星期日',
                 yvalue:6
               },
               {
                 xSummarylist:"03:00-06:00",
                 xlist:[
                   {
                     sid: 'seaty6x7',
                     x: "03:00 - 03:30"
                   },
                   {
                     sid: 'seaty6x8',
                     x: "03:30 - 04:00"
                   },
                   {
                     sid: 'seaty6x9',
                     x: "04:00 - 04:30"
                   },
                   {
                     sid: 'seaty6x10',
                     x: "04:30 - 05:00"
                   },
                   {
                     sid: 'seaty6x11',
                     x: "05:00 - 05:30"
                   },
                   {
                     sid: 'seaty6x12',
                     x: "06:30 - 06:00"
                   }
                 ],
                 y: '星期六',
                 yvalue:5
               }
             ]
    };
  },
  methods:{
    curDate(val) {
      console.log('curDate',val)
    },
  },
  beforeCreate() {

  },
  components: {
    WkDatepick,
  },
}
</script>
<style lang="less" scope>
@import 'assets/style/datepick.less';
</style>
