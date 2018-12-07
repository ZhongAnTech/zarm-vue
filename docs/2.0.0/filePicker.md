

## 文件选择器 FilePicker

:::demo 基本用法
```html
    <div class="uploader-wrapper" style="display:flex;padding:15px;">
      <za-badge sup v-for= '(i, index) in files' class="uploader-item" shape='circle' :key='index' @click='remove(index)' style="display:inline-block;margin-right:15px;align-items: center;justify-content: center;width:74px;height:74px;border:2px solid #ddd;">
        <za-icon type='wrong' slot='text' style="font-size:10px;"></za-icon>
        <div class='uploader-item-img'>
          <a :href="i.thumbnail" target="_blank"><img :src="i.thumbnail" alt=""></a>
        </div>
      </za-badge>
      <div class="uploader-wrapper">
        <za-file-picker
          class="uploader-btn" style="display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;"
          accept="image/jpg, image/jpeg, image/gif, image/png"
          @change='handleChange'>
          <za-icon type="add" style="fontSize:30px;"/>
        </za-file-picker>
      </div>
    </div>
```
:::

::: demo 多选模式
```html
    <div class="uploader-wrapper" style="display:flex;padding:15px;">
      <za-badge sup v-for= '(i, index) in fileList' class="uploader-item" shape='circle' :key='index' @click='remove2(index)' style="display:inline-block;margin-right:15px;align-items: center;justify-content: center;width:74px;height:74px;border:2px solid #ddd;">
        <za-icon type='wrong' slot='text' style="font-size:10px;"></za-icon>
        <div class='uploader-item-img'>
          <a :href="i.thumbnail" target="_blank"><img :src="i.thumbnail" alt=""></a>
        </div>
      </za-badge>
      <div class="uploader-wrapper">
        <za-file-picker
          v-if='fileList.length < 5'
          multiple
          class="uploader-btn"
          style="display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;"
          :before-select='beforeSelect'
          accept="image/jpg, image/jpeg, image/gif, image/png"
          @change='handleChangeMulti'>
          <za-icon type="add" />
        </za-file-picker>
      </div>
    </div>
    <za-toast :visible.sync='visible' :duration='1000'>删除成功</za-toast>
```
:::

:::demo 禁用状态
```html
    <div class="uploader-wrapper" style="display:flex;padding:15px;">
      <div class="uploader-wrapper">
        <za-file-picker
          class="uploader-btn" style="display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;"
          disabled>
          <za-icon type="add" style="fontSize:30px;"/>
        </za-file-picker>
      </div>
    </div>
```
:::

### Vue Script
```javascript
<script name="vue">
export default {
  data() {
    return {
      files: [],
      fileList: [],
      visible: false,
    }
  },
  methods: {
    handleChange(data){
      console.log(data);
      this.files.push(data)
    },
    handleChangeMulti(dataList){
      if(dataList.length + this.fileList.length > 5){
        alert('超过5张')
        this.fileList = this.fileList.concat(...(dataList.slice(0, 5 - this.fileList.length)));
      }else{
        this.fileList = this.fileList.concat(...dataList);
      }
    },
    remove(index){
      this.files.splice(index, 1);
      this.visible = true
    },
    remove2(index){
      this.fileList.splice(index, 1);
      this.visible = true
    },
    beforeSelect(){
      if(this.fileList.length > 5){
        alert('超过5张')
        return false
      }else{
        alert('before select')
      }
    }
  },
};
</script>
```

### API

#### Uploader

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| accept | string | | | 允许上传的附件格式,参考File文件类型 |
| multiple | bool | false | | 是否支持多选 |
| disabled | bool | false | | 是否禁用 |
| prefixCls | string | za-filepicker | | 类名前缀 |

#### Uploader Event

| 事件名称 | 说明 | 回调参数 |
| :--- | :--- | :--- |
| beforeSelect | 选择前触发的事件 |() => boolean |
| change | 值变化时触发的回调函数。multiple为true时，返回文件数组格式，否则为文件对象 |(file?: object \| object[]) => void |
