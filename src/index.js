import Input from '../src/input';
import Alert from '../src/alert';
import Panel from '../src/panel';
import PanelHeader from '../src/panel-header';
import PanelBody from '../src/panel-body';
import PanelFooter from '../src/panel-footer';
import Cell from '../src/cell';
import Checkbox from '../src/checkbox';
import CheckboxGroup from '../src/checkbox-group';
import Icon from '../src/icon';
import Button from '../src/button';
import Spinner from '../src/spinner';
import Message from '../src/message';
import Radio from '../src/radio';
import RadioGroup from '../src/radio-group';
import Badge from '../src/badge';
import Tabs from '../src/tabs';
import TabPane from '../src/tab-pane';
import Stepper from '../src/stepper';
import Switch from '../src/switch';
import Mask from '../src/mask';
import Toast from '../src/toast';
import Tooltip from '../src/tooltip';
import Loading from '../src/loading';
import Popup from '../src/popup';
import Uploader from '../src/uploader';
import ActionSheet from '../src/actionsheet';
import Modal from '../src/modal';
import Confirm from '../src/confirm';
import Slider from '../src/slider';
import SwipeAction from '../src/swipe-action';
import Swipe from '../src/swipe';
import SwipeItem from '../src/swipe-item';
import Picker from '../src/picker';
import Calendar from '../src/calendar';
import Colume from '../src/column';
import ColumeGroup from '../src/column-group';
import Cascader from '../src/cascader';
import Progress from '../src/progress';
import DatePicker from '../src/date-picker';
import StackPicker from '../src/stack-picker';
import NoticeBar from '../src/notice-bar';
import Drag from '../src/drag';
import Pull from '../src/pull';

const components = [
  Input,
  Alert,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Cell,
  Checkbox,
  CheckboxGroup,
  Icon,
  Button,
  Spinner,
  Message,
  Radio,
  RadioGroup,
  Badge,
  Tabs,
  TabPane,
  Stepper,
  Switch,
  Mask,
  Toast,
  Tooltip,
  Loading,
  Popup,
  Uploader,
  ActionSheet,
  Modal,
  Confirm,
  Slider,
  SwipeAction,
  Swipe,
  SwipeItem,
  Picker,
  Colume,
  ColumeGroup,
  Cascader,
  Progress,
  DatePicker,
  Calendar,
  StackPicker,
  NoticeBar,
  Drag,
  Pull,
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

export default {
  install,
  Input,
  Alert,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Cell,
  Checkbox,
  CheckboxGroup,
  Icon,
  Button,
  Spinner,
  Message,
  Radio,
  RadioGroup,
  Badge,
  Tabs,
  TabPane,
  Stepper,
  Switch,
  Mask,
  Toast,
  Loading,
  Popup,
  Uploader,
  ActionSheet,
  Modal,
  Confirm,
  SwipeAction,
  Swipe,
  SwipeItem,
  Picker,
  Calendar,
  Colume,
  ColumeGroup,
  Cascader,
  Progress,
  DatePicker,
  StackPicker,
  NoticeBar,
  Drag,
  Pull,
};
