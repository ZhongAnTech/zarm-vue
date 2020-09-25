import { createApp } from 'vue';
import Loading from './src/loading';

/* istanbul ignore next */
Loading.install = function (Vue) { // eslint-disable-line
  Vue.component(Loading.name, Loading);
};

Loading.root = function (message, options) {
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

  let LoadingInstance = null;
  let loadingProps = {};

  function update(newConfig) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    LoadingInstance &&
      Object.assign(LoadingInstance, { loadingProps: currentConfig });
  }

  function destroy() {
    if (LoadingInstance && div.parentNode) {
      div.parentNode.removeChild(LoadingInstance.$el);
      div.parentNode.removeChild(div);
      LoadingInstance = null;
    }
  }

  function render(props) {
    loadingProps = props;
    return createApp({
      data() {
        return { loadingProps };
      },
      render() {
        // 先解构，避免报错，原因不详
        const cdProps = { ...this.loadingProps };
        return <Loading {...cdProps} onClose={destroy} />;
      },
    }).mount(div);
  }

  LoadingInstance = render(currentConfig);

  return {
    close: destroy,
    update,
  };
};

export default Loading;
