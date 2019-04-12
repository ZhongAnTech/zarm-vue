import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Actionsheet from './actionsheet';
import Alert from './alert';
import Badge from './badge';
import Button from './button/index';
import Calendar from './calendar';
import Cell from './cell';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Confirm from './confirm';
import DatePicker from './date-picker';
import DateSelect from './date-select';
import DatePickerView from './date-picker-view';
import Drag from './drag';
import Icon from './icon';
import Input from './input';
import InputNumber from './input-number';
import Keyboard from './keyboard';
import KeyboardPicker from './keyboard-picker';
import Loading from './loading';
import Mask from './mask';
import Message from './message';
import Modal from './modal';
import NoticeBar from './notice-bar';
import NavBar from './nav-bar';
import Panel from './panel';
import PanelHeader from './panel-header';
import PanelBody from './panel-body';
import PanelFooter from './panel-footer';
import Picker from './picker';
import PickerView from './picker-view';
import Popup from './popup';
import Progress from './progress';
import Pull from './pull';
import SearchBar from './search-bar';
import Select from './select';
import Slider from './slider';
import ActivityIndicator from './activity-indicator';
import StackPicker from './stack-picker';
import StackSelect from './stack-select';
import Stepper from './stepper';
import Carousel from './carousel';
import SwipeAction from './swipe-action';
import CarouselItem from './carousel-item';
import Switch from './switch';
import Radio from './radio';
import RadioGroup from './radio-group';
import Tabs from './tabs';
import TabPanel from './tab-panel';
import Toast from './toast';
import Tooltip from './tooltip';
import FilePicker from './file-picker';
import LocaleProvider from './locale-provider';

const version = '2.0.0';
const components = [
  Collapse,
  CollapseItem,
  Actionsheet,
  Alert,
  Badge,
  Button,
  Calendar,
  Cell,
  Checkbox,
  CheckboxGroup,
  Confirm,
  DatePicker,
  DatePickerView,
  DateSelect,
  Drag,
  Icon,
  Input,
  InputNumber,
  Keyboard,
  KeyboardPicker,
  Loading,
  Mask,
  Message,
  Modal,
  NoticeBar,
  NavBar,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Picker,
  PickerView,
  Popup,
  Progress,
  Pull,
  Radio,
  RadioGroup,
  SearchBar,
  Select,
  Slider,
  ActivityIndicator,
  StackPicker,
  StackSelect,
  Stepper,
  Carousel,
  SwipeAction,
  CarouselItem,
  Switch,
  Tabs,
  TabPanel,
  Toast,
  Tooltip,
  FilePicker,
  LocaleProvider,
];

const install = (Vue) => { // eslint-disable-line no-unused-vars
  /* istanbul ignore if */
  if (install.installed) return;

  components.map(component => Vue.component(component.name, component));

  Vue.use(Loading.directive);

  Vue.prototype.$zaToast = Toast.root;
  Vue.prototype.$zaTooltip = Tooltip.root;
  Vue.prototype.$zaLoading = Loading.root;
  Vue.prototype.$zaAlert = Alert.root;
  Vue.prototype.$zaConfirm = Confirm.root;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Collapse,
  CollapseItem,
  Actionsheet,
  Alert,
  Badge,
  Button,
  Calendar,
  Cell,
  Checkbox,
  CheckboxGroup,
  Confirm,
  DatePicker,
  DatePickerView,
  DateSelect,
  Drag,
  Icon,
  Input,
  InputNumber,
  Keyboard,
  KeyboardPicker,
  Loading,
  Mask,
  Message,
  Modal,
  NoticeBar,
  NavBar,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Picker,
  PickerView,
  Popup,
  Progress,
  Pull,
  Radio,
  RadioGroup,
  SearchBar,
  Select,
  Slider,
  ActivityIndicator,
  StackPicker,
  StackSelect,
  Stepper,
  Carousel,
  SwipeAction,
  CarouselItem,
  Switch,
  Tabs,
  TabPanel,
  Toast,
  Tooltip,
  FilePicker,
  LocaleProvider,
};

export default {
  install,
  version,
};
