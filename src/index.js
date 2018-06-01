import Accordion from '../src/accordion';
import AccordionItem from '../src/accordion-item';
import Actionsheet from '../src/actionsheet';
import Alert from '../src/alert';
import Badge from '../src/badge';
import Button from '../src/button';
import Calendar from '../src/calendar';
import Cell from '../src/cell';
import Checkbox from '../src/checkbox';
import CheckboxGroup from '../src/checkbox-group';
import Confirm from '../src/confirm';
import DatePicker from '../src/date-picker';
import DateSelect from '../src/date-select';
import DatePickerView from '../src/date-picker-view';
import Drag from '../src/drag';
import Icon from '../src/icon';
import Input from '../src/input';
import InputNumber from '../src/input-number';
import Keyboard from '../src/keyboard';
import KeyboardPicker from '../src/keyboard-picker';
import Loading from '../src/loading';
import Mask from '../src/mask';
import Message from '../src/message';
import Modal from '../src/modal';
import NoticeBar from '../src/notice-bar';
import Panel from '../src/panel';
import PanelHeader from '../src/panel-header';
import PanelBody from '../src/panel-body';
import PanelFooter from '../src/panel-footer';
import Picker from '../src/picker';
import PickerView from '../src/picker-view';
import Popup from '../src/popup';
import Progress from '../src/progress';
import Pull from '../src/pull';
import Select from '../src/select';
import Slider from '../src/slider';
import Spinner from '../src/spinner';
import StackPicker from '../src/stack-picker';
import Stepper from '../src/stepper';
import Swipe from '../src/swipe';
import SwipeAction from '../src/swipe-action';
import SwipeItem from '../src/swipe-item';
import Switch from '../src/switch';
import Radio from '../src/radio';
import RadioGroup from '../src/radio-group';
import Tabs from '../src/tabs';
import TabPane from '../src/tab-pane';
import Toast from '../src/toast';
import Tooltip from '../src/tooltip';
import Uploader from '../src/uploader';

const components = [
  Accordion,
  AccordionItem,
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
  Select,
  Slider,
  Spinner,
  StackPicker,
  Stepper,
  Swipe,
  SwipeAction,
  SwipeItem,
  Switch,
  Tabs,
  TabPane,
  Toast,
  Tooltip,
  Uploader,
];

const install = function (Vue, opts = {}) { // eslint-disable-line no-unused-vars
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

module.exports = {
  install,
  Accordion,
  AccordionItem,
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
  Select,
  Slider,
  Spinner,
  StackPicker,
  Stepper,
  Swipe,
  SwipeAction,
  SwipeItem,
  Switch,
  Tabs,
  TabPane,
  Toast,
  Tooltip,
  Uploader,
};

module.exports.default = module.exports;
