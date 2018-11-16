<script>
export default {
  data() {
    return {
      min: "2018-05-06",
      max: "2018-10-02",
      value: '2018-05-08',
      defaultValue: ["2018-05-07", "2018-06-08"],
      multiple: 1,
      multipleOptions: [
        { value: '1', label: "true" },
        { value: '0', label: "false" }
      ]
    }
  },
  methods: {
    change(date) {
      console.log('change:' + date);
    },
    handleChange(val) {
      this.multiple = val.value;
    },
    disabledDate(date) {
      return false;
    }
  },
  watch: {
    value(val) {
      console.log('watch:' + val);
    }
  }
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
    :defaultValue="defaultValue"
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
| multiple | boolean | false |  | 是否日期范围选择开关 |
| defaultValue | String / Number / Date / [Date, Date] | 无 | 设置选中的日期 |
| v-model | String / Number / Date / [Date, Date] | 无 | 双向绑定日期值 |
| min | String / Number / Date | 当天日期 |  | 最小日期限制 |
| max | String / Number / Date | min开始往后一年 |  | 最大日期限制 |

#### Calendar Events
| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| change | 当选择日期点击时触发的事件。| multiple 为 true 返回 [Date, Date]，否则返回 Date |
