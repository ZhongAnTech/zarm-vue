## 日期选择器 DatePicker & DateSelect

:::demo 日期选择器

```html
<za-cell title="日期选择">
  <za-button slot="description" size="xs" @click="visible1 = true"
    >开启</za-button
  >
</za-cell>
<za-cell title="年份选择">
  <za-button slot="description" size="xs" @click="visible5 = true"
    >开启</za-button
  >
</za-cell>
<za-cell title="月份选择">
  <za-button slot="description" size="xs" @click="visible2 = true"
    >开启</za-button
  >
</za-cell>
<za-cell title="时间选择">
  <za-button slot="description" size="xs" @click="visible3 = true"
    >开启</za-button
  >
</za-cell>
<za-cell title="时间&日期">
  <za-button slot="description" size="xs" @click="visible4 = true"
    >开启</za-button
  >
</za-cell>
<za-date-picker
  :close-on-click-modal="false"
  :visible.sync="visible1"
  title="选择日期"
  placeholder="请选择日期"
  mode="date"
  max="2030-10-25"
  min="1917-02-12"
  @ok="handleOk"
>
</za-date-picker>
<za-date-picker
  :visible.sync="visible5"
  title="选择年份"
  defaultValue="2015"
  placeholder="请选择年份"
  mode="year"
  @ok="handleOk"
>
</za-date-picker>
<za-date-picker
  :visible.sync="visible2"
  title="选择月份"
  defaultValue="2018-09"
  placeholder="请选择月份"
  mode="month"
  @ok="handleOk"
>
</za-date-picker>
<za-date-picker
  :visible.sync="visible3"
  title="选择时间"
  defaultValue="2018-09-10 09:45"
  placeholder="请选择时间"
  mode="time"
  :minute-step="minuteStep"
  @ok="handleOk"
>
</za-date-picker>
<za-date-picker
  :visible.sync="visible4"
  title="选择"
  placeholder="请选择时间和日期"
  mode="datetime"
  @ok="handleOk"
>
</za-date-picker>
```

:::

:::demo 日期选择器 Select

```html
<za-cell title="日期选择">
  <za-date-select
    v-model="v5"
    title="选择日期"
    placeholder="请选择日期"
    mode="date"
    format="yyyy年MM月dd日"
    max="2030-10-25"
    min="1917-10-25"
    @ok="handleOk"
  >
  </za-date-select>
</za-cell>
<za-cell title="日期格式化">
  <za-date-select
    v-model="v7"
    title="选择日期"
    placeholder="请选择日期"
    mode="datetime"
    value-format="yyyy-MM-dd HH:mm"
    max="2030-10-25"
    min="1917-10-25"
    @ok="handleOk"
  >
  </za-date-select>
</za-cell>
```

:::

:::demo 平铺日期选择器 DatePickerView

```html
<za-date-picker-view
  title="选择年份"
  placeholder="请选择年份"
  mode="datetime"
  min="2018-01-13"
  max="2090-11-27"
  :defaultValue="v6"
  @change="handleChange"
>
</za-date-picker-view>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      v1:'',
      v2:'',
      v3:'',
      v4:'',
      v5:'2008-01-10',
      v6:'2018-12-24 11:23',
      v7:'2008-01-10',
      minuteStep: 15,
    }
  },
  methods: {
    handleOk(v){
      console.log('it may still scrolling when ok is clicked. so ues v-model or @change instead')
      console.log(v);
      this.$zaToast(v.toString())
    },
    handleChange(v){
      console.log(v);
    },
    handleCancel(event){
      console.log('cancelled');
    },
    displayGenerator(selected) {
      return selected.map(item => item.name).join('/')
    }
  },
};
</script>
```

### API

#### Attributes

| 属性          | 类型   | 默认值         | 可选值／参数                        | 说明             |
| :------------ | :----- | :------------- | :---------------------------------- | :--------------- |
| prefixCls     | string | za-date-picker |                                     | 类名前缀         |
| default-value | string |                |                                     | 初始值           |
| disabled      | bool   | false          |                                     | 是否禁用         |
| title         | string | '请选择'       |                                     | 选择器标题       |
| mode          | string | date           | `year`, `date`, `time` , `datetime` | 指定日期选择模式 |
| max           | string |                | 例：2017-08-10                      |
| min           | string |                | 例：2000-01-03                      |
| minuteStep    | number | 1              |                                     | 分钟步长         |

#### DatePicker & DateSelect Attributes

| 属性         | 类型   | 默认值   | 可选值／参数                                                                  | 说明         |
| :----------- | :----- | :------- | :---------------------------------------------------------------------------- | :----------- |
| v-model      | string |          |                                                                               | 绑定值       |
| title        | string | '请选择' |                                                                               | 选择器标题   |
| okText       | string | '确定'   |                                                                               | 输入提示信息 |
| cancelText   | string | '取消'   |                                                                               | 输入提示信息 |
| placeholder  | string | '请选择' |                                                                               | 输入提示信息 |
| format       | string |          | 例：yyyy 年 MM 月 dd 日<br /> 年:`yyyy`, 月:`MM`, 日:`dd`, 时:`HH`, 分:`mm`。 | 格式化显示值 |
| value-format | string |          | 例：`yyyy-MM-dd HH:mm`                                                        | 格式化绑定值 |

#### DatePicker & DateSelect Events

| 事件名称 | 说明                         | 回调参数         |
| :------- | :--------------------------- | :--------------- |
| ok       | 点击确定时触发的回调函数     | 选中值的对象列表 |
| cancel   | 点击取消时触发的回调函数     | event 对象       |
| change   | 滚动时值变化时触发的回调函数 | 选中值的对象列表 |
