// import Collapse from '../src/collapse';
// import CollapseItem from '../src/collapse-item';
// import Actionsheet from '../src/actionsheet';
// import Alert from '../src/alert';
// import Badge from '../src/badge';
// import Button from '../src/button';
// import Calendar from '../src/calendar';
import Cell from '../src/cell';
// import Checkbox from '../src/checkbox';
// import CheckboxGroup from '../src/checkbox-group';
// import Confirm from '../src/confirm';
// import DatePicker from '../src/date-picker';
// import DateSelect from '../src/date-select';
// import DatePickerView from '../src/date-picker-view';
// import Drag from '../src/drag';
import Icon from '../src/icon';
import Input from '../src/input';
// import InputNumber from '../src/input-number';
// import Keyboard from '../src/keyboard';
// import KeyboardPicker from '../src/keyboard-picker';
// import Loading from '../src/loading';
// import Mask from '../src/mask';
import Message from '../src/message';
// import Modal from '../src/modal';
// import NoticeBar from '../src/notice-bar';
// import NavBar from '../src/nav-bar';
// import Panel from '../src/panel';
// import PanelHeader from '../src/panel-header';
// import PanelBody from '../src/panel-body';
// import PanelFooter from '../src/panel-footer';
// import Picker from '../src/picker';
// import PickerView from '../src/picker-view';
// import Popup from '../src/popup';
// import Popper from '../src/popper';
// import Progress from '../src/progress';
// import Pull from '../src/pull';
// import SearchBar from '../src/search-bar';
// import Select from '../src/select';
// import Slider from '../src/slider';
// import ActivityIndicator from '../src/activity-indicator';
// import StackPicker from '../src/stack-picker';
// import StackSelect from '../src/stack-select';
// import Stepper from '../src/stepper';
// import Carousel from '../src/carousel';
// import SwipeAction from '../src/swipe-action';
// import CarouselItem from '../src/carousel-item';
// import Switch from '../src/switch';
// import Radio from '../src/radio';
// import RadioGroup from '../src/radio-group';
// import Tabs from '../src/tabs';
// import TabPanel from '../src/tab-panel';
// import Toast from '../src/toast';
// import Tooltip from '../src/tooltip';
// import FilePicker from '../src/file-picker';
// import TabBar from '../src/tab-bar';
// import TabBarItem from '../src/tab-bar-item';
// import LocaleProvider from '../src/locale-provider';

const version = '3.0.0';
const components = [
  // Collapse,
  // CollapseItem,
  // Actionsheet,
  // Alert,
  // Badge,
  // Button,
  // Calendar,
  Cell,
  // Checkbox,
  // CheckboxGroup,
  // Confirm,
  // DatePicker,
  // DatePickerView,
  // DateSelect,
  // Drag,
  Icon,
  Input,
  // InputNumber,
  // Keyboard,
  // KeyboardPicker,
  // Loading,
  // Mask,
  Message,
  // Modal,
  // NoticeBar,
  // NavBar,
  // Panel,
  // PanelHeader,
  // PanelBody,
  // PanelFooter,
  // Picker,
  // PickerView,
  // Popup,
  // Popper,
  // Progress,
  // Pull,
  // Radio,
  // RadioGroup,
  // SearchBar,
  // Select,
  // Slider,
  // ActivityIndicator,
  // StackPicker,
  // StackSelect,
  // Stepper,
  // Carousel,
  // SwipeAction,
  // CarouselItem,
  // Switch,
  // Tabs,
  // TabPanel,
  // Toast,
  // Tooltip,
  // FilePicker,
  // TabBar,
  // TabBarItem,
  // LocaleProvider,
];

const install = function (Vue, opts = {}) { // eslint-disable-line no-unused-vars
  /* istanbul ignore if */
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));

  // Vue.use(Loading.directive);

  // Vue.prototype.$zaToast = Toast.root;
  // Vue.prototype.$zaTooltip = Tooltip.root;
  // Vue.prototype.$zaLoading = Loading.root;
  // Vue.prototype.$zaAlert = Alert.root;
  // Vue.prototype.$zaConfirm = Confirm.root;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  // Collapse,
  // CollapseItem,
  // Actionsheet,
  // Alert,
  // Badge,
  // Button,
  // Calendar,
  Cell,
  // Checkbox,
  // CheckboxGroup,
  // Confirm,
  // DatePicker,
  // DatePickerView,
  // DateSelect,
  // Drag,
  Icon,
  Input,
  // InputNumber,
  // Keyboard,
  // KeyboardPicker,
  // Loading,
  // Mask,
  Message,
  // Modal,
  // NoticeBar,
  // NavBar,
  // Panel,
  // PanelHeader,
  // PanelBody,
  // PanelFooter,
  // Picker,
  // PickerView,
  // Popup,
  // Popper,
  // Progress,
  // Pull,
  // Radio,
  // RadioGroup,
  // SearchBar,
  // Select,
  // Slider,
  // ActivityIndicator,
  // StackPicker,
  // StackSelect,
  // Stepper,
  // Carousel,
  // SwipeAction,
  // CarouselItem,
  // Switch,
  // Tabs,
  // TabPanel,
  // Toast,
  // Tooltip,
  // FilePicker,
  // TabBar,
  // TabBarItem,
  // LocaleProvider,
};

export default {
  install,
  version,
};
