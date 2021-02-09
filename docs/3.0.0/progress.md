## 进度条 Progress

:::demo 基本

```html
<div class="progress" style="padding:20px 0;">
  <za-progress
    :percent="percent"
    :theme="theme"
    :shape="shape"
    :weight="weight"
  >
    {{percent + '%'}}
  </za-progress>
</div>
<div class="progress">
  <za-progress
    type="circle"
    :percent="percent"
    :theme="theme"
    :shape="shape"
    :weight="weight"
  >
    <div class="progress-content">
      <span class="progress-text">{{percent}}</span
      ><span class="progress-percent">%</span>
    </div>
  </za-progress>
</div>
<div class="progress">
  <za-progress
    type="semi-circle"
    :percent="percent"
    :theme="theme"
    :shape="shape"
    :weight="weight"
  >
    <div class="progress-content">
      <span class="progress-text">{{percent}}</span
      ><span class="progress-percent">%</span>
    </div>
  </za-progress>
</div>

<za-cell title="进度">
  <za-stepper
    shape="radius"
    :step="10"
    :min="0"
    :max="100"
    v-model="percent"
    @step-change="handleStepChange"
  />
</za-cell>
<za-cell title="主题">
  <za-select :defaultValue="theme" :data-source="dataSource" @ok="handleOk" />
</za-cell>
<za-cell title="线条形状">
  <za-select
    :defaultValue="shape"
    :data-source="shapeSource"
    @ok="handleShape"
  />
</za-cell>
<za-cell title="线条粗细">
  <za-select
    :defaultValue="weight"
    :data-source="weightSource"
    @ok="handleWeight"
  />
</za-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      percent: 10,
      theme: 'primary',
      shape: 'round',
      weight: 'normal',
      dataSource:[
        { value: 'primary', label: 'primary' },
        { value: 'warning', label: 'warning' },
        { value: 'error', label: 'error' },
      ],
      shapeSource:[
        { value: 'rect', label: 'rect' },
        { value: 'round', label: 'round' },
      ],
      weightSource:[
        { value: 'normal', label: 'normal' },
        { value: 'thin', label: 'thin' },
      ],
    }
  },
  methods: {
    handleStepChange(e) {

    },
    handleOk(v) {
      this.theme = v.value;
    },
    handleShape(v) {
      this.shape = v.value;
    },
    handleWeight(v) {
      this.weight = v.value;
    },

  },
};
</script>
```

### API

| 属性      | 类型             | 默认值      | 可选值／参数                             | 说明                         |
| :-------- | :--------------- | :---------- | :--------------------------------------- | :--------------------------- |
| theme     | string           | 'primary'   | 'primary', 'success', 'warning', 'error' | 主题                         |
| percent   | number           | 0           |                                          | 进度百分比（范围：0 ～ 100） |
| shape     | string           | 'rect'      | 'rect', 'round'                          | 线条形状                     |
| weight    | string , number | 'normal'    | 'normal', 'thin'                         | 线条粗细                     |
| type      | string           | 'line'      | 'line', 'circle' , 'semi-circle'         | 类型                         |
