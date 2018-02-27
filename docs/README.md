## 按需加载组件清单

```JS
export const zaInput = Input;
export const zaAlert = Alert;
export const zaPanel = Panel;
export const zaPanelHeader = PanelHeader;
export const zaPanelBody = PanelBody;
export const zaPanelFooter = PanelFooter;
export const zaCell = Cell;
export const zaCheckbox = Checkbox;
export const zaCheckboxGroup = CheckboxGroup;
export const zaIcon = Icon;
export const zaButton = Button;
export const zaSpinner = Spinner;
export const zaMessage = Message;
export const zaRadio = Radio;
export const zaRadioGroup = RadioGroup;
export const zaBadge = Badge;
export const zaTabs = Tabs;

export const zaTabPane = TabPane;
export const zaStepper = Stepper;
export const zaSlider = Slider;
export const zaSwitch = Switch;
export const zaMask = Mask;
export const zaToast = Toast;
export const zaTooltip = Tooltip;
export const zaLoading = Loading;
export const zaPopup = Popup;
export const zaUploader = Uploader;
export const zaActionSheet = ActionSheet;
export const zaModal = Modal;
export const zaConfirm = Confirm;
export const zaSwipeAction = SwipeAction;
export const zaSwipe = Swipe;

export const zaSwipeItem = SwipeItem;
export const zaPicker = Picker;
export const zaCalendar = Calendar;
export const zaColume = Colume;
export const zaColumeGroup = ColumeGroup;
export const zaCascader = Cascader;
export const zaProgress = Progress;

export const zaDatePicker = DatePicker;
export const zaStackPicker = StackPicker;
export const zaNoticeBar = NoticeBar;
export const zaDrag = Drag;
export const zaPull = Pull;
```

## 参考示例

首先，编写示例`javascript`文件：zarm-config.js


```javascript
import { zaInput, zaAlert, zaPanel, zaPanelHeader, zaPanelBody, zaPopup, zaCheckbox, zaCell, zaButton, zaMessage, zaRadio, zaRadioGroup, zaTabs, zaTabPane, zaToast, zaLoading, zaActionSheet, zaModal, zaConfirm, zaPicker, zaDatePicker } from 'zarm-vue/dist'

const components = [
  zaInput,
  zaAlert,
  zaPanel,
  zaPanelHeader,
  zaPanelBody,
  zaPopup,
  zaCheckbox,
  zaCell,
  zaButton,
  zaMessage,
  zaRadio,
  zaRadioGroup,
  zaTabs,
  zaTabPane,
  zaToast,
  zaLoading,
  zaActionSheet,
  zaModal,
  zaConfirm,
  zaPicker,
  zaDatePicker
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