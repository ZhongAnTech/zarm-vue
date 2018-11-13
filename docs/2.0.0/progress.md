<script>
export default {
  data() {
    return {
      percent: 10,
      theme: 'primary',
      dataSource:[
        { value: 'default', label: 'default' },
        { value: 'primary', label: 'primary' },
        { value: 'info', label: 'info' },
        { value: 'warning', label: 'warning' },
        { value: 'error', label: 'error' },
      ],
    }
  },
  methods: {
    handleStepChange(e) {

    },
    handleOk(v) {
      this.theme = v.value;
    }
  },
};
</script>

## 进度条 Progress

:::demo 基本
```html
  <div class="progress" style="padding:20px 0;">
    <za-progress :percent='percent' :theme='theme'>
      {{percent + '%'}}
    </za-progress>
  </div>
  <div class="progress">
    <za-progress type='circle' :percent='percent' :theme='theme'>
      <div class="progress-content">
        <span class="progress-text">{{percent}}</span>
        <span class="progress-percent">%</span>
      </div>
    </za-progress>
  </div>

  <za-cell title='进度'>
    <za-stepper
      shape="radius"
      :step='10'
      :min='0'
      :max='100'
      v-model='percent'
      @step-change='handleStepChange'
    />

  </za-cell>
  <za-cell title='主题'>
    <za-select
      v-model='theme'
      :data-source='dataSource'
      @ok='handleOk'
    />
  </za-cell>
```
:::

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | za-progress | | 类名前缀 |
| theme | string | 'primary' | 'default', 'primary', 'info', 'success', 'warning', 'error' | 主题 |
| percent | number | 0 | | 进度百分比（范围：0～100） |
| shape | string | 'line' | 'line', 'circle' | 类型 |