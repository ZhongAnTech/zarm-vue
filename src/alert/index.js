import { createApp } from 'vue';
import Alert from './src/alert';

/* istanbul ignore next */
Alert.install = function (Vue) { // eslint-disable-line
  Vue.component(Alert.name, Alert);
};

Alert.root = function (message, options) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  options = options || {};
  if (typeof message === 'object') {
    options = message;
    message = '';
  } else {
    options.message = message;
  }

  let currentConfig = { ...options, visible: true };

  let AlertInstance = null;
  let alertProps = {};

  function update(newConfig) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    AlertInstance &&
      Object.assign(AlertInstance, { alertProps: currentConfig });
  }

  function destroy() {
    if (AlertInstance && div.parentNode) {
      div.parentNode.removeChild(AlertInstance.$el);
      div.parentNode.removeChild(div);
      AlertInstance = null;
    }
  }

  function render(props) {
    alertProps = props;
    return createApp({
      data() {
        return { alertProps };
      },
      render() {
        // 先解构，避免报错，原因不详
        const cdProps = { ...this.alertProps };
        return <Alert {...cdProps} onClose={destroy} />;
      },
    }).mount(div);
  }

  AlertInstance = render(currentConfig);

  return {
    close: destroy,
    update,
  };
};

export default Alert;
