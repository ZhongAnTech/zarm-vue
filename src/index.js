import Input from '../src/input';
import Alert from '../src/alert';
import Panel from '../src/panel';
import PanelHeader from '../src/panel-header';
import PanelTitle from '../src/panel-title';
import PanelBody from '../src/panel-body';
import PanelFooter from '../src/panel-footer';
import PanelMore from '../src/panel-more';
import Cell from '../src/cell';
import Checkbox from '../src/checkbox';
import CheckboxGroup from '../src/checkbox-group';
import Icon from '../src/icon';
import Button from '../src/button';
import Spinner from '../src/spinner';

const components = [
  Input,
  Alert,
  Panel,
  PanelHeader,
  PanelTitle,
  PanelBody,
  PanelFooter,
  PanelMore,
  Cell,
  Checkbox,
  CheckboxGroup,
  Icon,
  Button,
  Spinner,
];

const install = function (Vue, opts = {}) { // eslint-disable-line no-unused-vars
  /* istanbul ignore if */
  if (install.installed) return;

  components.map(component => Vue.component(component.name, component));
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
  PanelTitle,
  PanelBody,
  PanelFooter,
  PanelMore,
  Cell,
  Checkbox,
  CheckboxGroup,
  Icon,
  Button,
  Spinner,
};
