import { createApp } from 'vue';
import Toast from './src/toast';

/* istanbul ignore next */
Toast.install = function (Vue) { // eslint-disable-line
  Vue.component(Toast.name, Toast);
};

Toast.root = function (message, options) {
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

  let ToastInstance = null;
  let ToastProps = {};

  function update(newConfig) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    ToastInstance &&
      Object.assign(ToastInstance, { ToastProps: currentConfig });
  }

  function destroy() {
    if (ToastInstance && div.parentNode) {
      ToastInstance = null;
      div.parentNode.removeChild(div);
    }
  }

  function render(props) {
    ToastProps = props;
    return createApp({
      data() {
        return { ToastProps };
      },
      render() {
        // 先解构，避免报错，原因不详
        const cdProps = { ...this.ToastProps };
        return <Toast {...cdProps} onClose={destroy} />;
      },
    }).mount(div);
  }

  ToastInstance = render(currentConfig);

  return {
    close: destroy,
    update,
  };
};

export default Toast;
