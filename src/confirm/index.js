import { createApp } from 'vue';
import Confirm from './src/confirm';

/* istanbul ignore next */
Confirm.install = function (Vue) { // eslint-disable-line
  Vue.component(Confirm.name, Confirm);
};

Confirm.root = function (message, options) {
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

  let ConfirmInstance = null;
  let confirmProps = {};

  function update(newConfig) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    ConfirmInstance &&
      Object.assign(ConfirmInstance, { confirmProps: currentConfig });
  }

  function destroy() {
    if (ConfirmInstance && div.parentNode) {
      div.parentNode.removeChild(ConfirmInstance.$el);
      div.parentNode.removeChild(div);
      ConfirmInstance = null;
    }
  }

  function render(props) {
    confirmProps = props;
    return createApp({
      data() {
        return { confirmProps };
      },
      render() {
        // 先解构，避免报错，原因不详
        const cdProps = { ...this.confirmProps };
        return <Confirm {...cdProps} onClose={destroy} />;
      },
    }).mount(div);
  }

  ConfirmInstance = render(currentConfig);

  return {
    close: destroy,
    update,
  };
};

export default Confirm;
