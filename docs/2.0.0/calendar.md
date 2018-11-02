<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      value1: [],
      visible3: false,
      minDate: new Date('2018-01-11'),
      maxDate: new Date('2018-10-10'),
      value2: ['2018-02-24','2018-03-10'],
      isMultiSelected: true,
      value3: [],
      getContainer: () => document.body,
    }
  },
  methods: {
    showCal1() {
      this.visible1 = true;
    },
    showCal2() {
      this.visible2 = true;
    },
    showCal3() {
      this.visible3 = true;
    },
    changeDate(date) {
      console.log(date); // eslint-disable-line
    },
    handleOk1(date) {
      this.value1 = date;
      console.log(date); // eslint-disable-line
    },
    handleOk2(date) {
      this.value2 = date;
      console.log(date); // eslint-disable-line
    },
    handleOk3(date) {
      this.value3 = date;
      console.log(date); // eslint-disable-line
    }
  },
};
</script>

:::demo 简单日历
```html
  <za-cell title='选择时间' @click='showCal1'>{{value1.join(',')}}</za-cell>
  <za-cell title='选择时间范围' @click='showCal2'>{{value2.join(',')}}</za-cell>
  <za-cell title='时间范围限制' @click='showCal3'>{{value3.join(',')}}</za-cell>
  <za-calendar :visible.sync='visible1' @changed='changeDate' @ok='handleOk1' :selected-value='value1' ></za-calendar>
  <za-calendar :visible.sync='visible2' @ok='handleOk2' :multi-selected='isMultiSelected' :selected-value='value2'></za-calendar>
  <za-calendar :get-container="getContainer" :selected-value='value3' :visible.sync='visible3' :min='minDate' :max='maxDate' @ok='handleOk3'></za-calendar>
```
:::

### API

#### Calendar Attributes

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-calendar | | 类名前缀 |
| titles | Array | | ['日', '一', '二', '三', '四', '五', '六'] | 周期标题 |
| visible | bool | false | | 是否显示, 支持.sync 修饰符 (v2.3.0+) |
| multiSelected | boolean | false |  | 是否日期范围选择开关 |
| selectedValue | Array | | ['2017-01-01'] 或日期范围['2017-01-01','2017-11-11']  | 设置选中的日期 |
| min | Date | 当天日期 |  | 最小日期限制 |
| max | Date | 当天日期开始往后一年 |  | 最大日期限制 |
| months | number | 12 |  | 可显示的最大月份数 |
| dateItemFormat | string | | 'YYYY年MM月' | 月份标题格式化 |
| cancelBtnText | string | '取消' |  | 取消按钮文案 |
| okBtnText | string | '确定' |  | 确定按钮文案 |
| getContainer | Func |  |  | 指定挂载的父容器DOM节点 |

#### Calendar Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| changed | 当选择日期点击时触发的事件。| Date日期数组，['2017-01-01'] |
| ok | 当点击确定按钮时触发的事件。| Date日期数组，['2017-01-01'] |
