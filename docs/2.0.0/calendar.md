<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      minDate: '2018-02-02',
      maxDate: '2018-02-28',
      value1: new Date(),
      value2: [new Date()  + 10 * 24 * 60 * 60 * 1000, new Date().getTime() + 20 * 24 * 60 * 60 * 1000],
      isMultiSelected: true,
      value3: ['2018-02-11', '2018-02-15'],
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
    handle1Change(date) {
      console.log(date);
      if(date) this.visible1 = false;
    },
    handle2Change(date){
      console.log(date);
      if(date) this.visible2 = false;
    },
    handle3Change(date) {
      console.log(date);
      if(date) this.visible3 = false;
    },
    dateFormat(date, fmt = 'yyyy-MM-dd')  {
      if (!date || !fmt) {
        return date;
      }
      date = new Date(date.toString().replace(/-/g, '/'));
      const o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'H+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
      }
      Object.keys(o).forEach((k) => {
        if (new RegExp(`(${k})`).test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
        }
      });
      return fmt;
    }
  },
};
</script>

:::demo 简单日历
```html
  <za-cell title='选择时间' @click='showCal1'>{{dateFormat(value1)}}</za-cell>
  <za-cell title='选择时间范围' @click='showCal2'>{{value2 ? value2.map(val=>dateFormat(val)).join(',') : '请选择'}}</za-cell>
  <za-cell title='时间范围限制' @click='showCal3'>{{value3 ? value3.map(val=>dateFormat(val)).join(',') : '请选择'}}</za-cell>
  <za-calendar :visible='visible1' v-model='value1' @change='handle1Change'  ></za-calendar>
  <za-calendar :visible='visible2' v-model='value2' @change="handle2Change" multiple  ></za-calendar>
  <za-calendar :visible='visible3' v-model='value3' @change="handle3Change" multiple :min='minDate' :max='maxDate'></za-calendar>
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
