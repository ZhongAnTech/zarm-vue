## 按需加载组件清单

- zaInput
- zaAlert
- zaPanel
- zaPanelHeader
- zaPanelBody
- zaPanelFooter
- zaCell
- zaCheckbox
- zaCheckboxGroup
- zaIcon
- zaButton
- zaSpinner
- zaMessage
- zaRadio
- zaRadioGroup
- zaBadge
- zaTabs
- zaTabPane
- zaStepper
- zaSlider
- zaSwitch
- zaMask
- zaToast
- zaLoading
- zaPopup
- zaUploader
- zaActionSheet
- zaModal
- zaConfirm
- zaSwipeAction
- zaSwipe
- zaSwipeItem
- zaPicker
- zaCalendar
- zaColume
- zaColumeGroup
- zaCascader
- zaProgress
- zaDatePicker
- zaStackPicker
- zaNoticeBar
- zaDrag
- zaPull
```

## 参考示例

首先，编写示例`javascript`文件：zarm-config.js


```javascript
import { zaInput } from 'zarm-vue/dist'

const components = [
  zaInput
]

const install = function (Vue) { 
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.use(zaLoading.directive)
  Vue.prototype.$zaToast = zaToast.root
  Vue.prototype.$zaLoading = zaLoading.root
  Vue.prototype.$zaAlert = zaAlert.root
  Vue.prototype.$zaConfirm = zaConfirm.root
}

export default install
```

## 使用配置文件

```js
import Vue from 'vue'
import zarmConfig from './zarm-config.js'
zarmConfig(Vue)
```