import { createApp } from 'vue';
import Tooltip from './src/tooltip';

/* istanbul ignore next */
Tooltip.install = function (Vue) { // eslint-disable-line
  Vue.component(Tooltip.name, Tooltip);
};

Tooltip.root = function (message, options) {
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

  let TooltipInstance = null;
  let TooltipProps = {};

  function update(newConfig) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    TooltipInstance &&
      Object.assign(TooltipInstance, { TooltipProps: currentConfig });
  }

  function destroy() {
    if (TooltipInstance && div.parentNode) {
      div.parentNode.removeChild(TooltipInstance.$el);
      div.parentNode.removeChild(div);
      TooltipInstance = null;
    }
  }

  function render(props) {
    TooltipProps = props;
    return createApp({
      data() {
        return { TooltipProps };
      },
      render() {
        // 先解构，避免报错，原因不详
        const cdProps = { ...this.TooltipProps };
        return <Tooltip {...cdProps} onClose={destroy} />;
      },
    }).mount(div);
  }

  TooltipInstance = render(currentConfig);

  return {
    close: destroy,
    update,
  };
};

export default Tooltip;

