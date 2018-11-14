<script>
export default {
  data() {
    return {
      min: '2018-02-02',
      max: '2018-02-28',
      value: '2018-02-25',
      multiple: 0,
      multipleOptions: [
        { value: '1', label: "true" },
        { value: '0', label: "false" }
      ]
    }
  },
  methods: {
    change(date) {
      console.log(date);
    },
    handleChange(val) {
      this.multiple = !(this.multiple + 1) % 2;
    },
    disabledDate(date) {
      return false;
    }
  },
};
</script>

:::demo 简单日历
```html
  <za-cell title="multiple">
    <za-select
      v-model='multiple'
      @ok='handleChange'
      :data-source='multipleOptions'/>
  </za-cell>
  <za-cell title="min">
    <za-date-select
    v-model='min'
    title="选择日期"
    placeholder="请选择日期"
    mode='date'
    format='yyyy-MM-dd'
    max='2030-10-25'
    min='1917-10-25'>
    </za-date-select>
  </za-cell>
  <za-cell title="max">
    <za-date-select
    v-model='max'
    title="选择日期"
    placeholder="请选择日期"
    mode='date'
    format='yyyy-MM-dd'
    max='2030-10-25'
    min='1917-10-25'>
    </za-date-select>
  </za-cell>
  
  <za-calendar
    v-model='value'
    @change="change"
    :multiple="multiple == '1'"
    :disabledDate="disabledDate" 
    :min='min'
    :max='max'/>
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
