import Loading from './loading';

exports.install = Vue => {
  const LoadingConstructor = Vue.extend(Loading);

  const toggleLoading = function (el, binding) {
    if (binding.value) {
      Vue.nextTick(() => {
        document.body.appendChild(el.instance.$el);
        el.domInserted = true;
        Vue.nextTick(() => {
          el.instance.visible = true;
        });
      });
    } else {
      el.instance.visible = false;
    }
  };

  Vue.directive('zaLoading', {
    bind(el, binding) { // eslint-disable-line
      const loading = new LoadingConstructor({
        el: document.createElement('div'),
        props: {
          visible: binding.value,
        },
      });
      el.instance = loading;
      toggleLoading(el, binding);
    },
    update(el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },
    unbind(el, binding) { // eslint-disable-line
      if (el.domInserted) {
        document.body.removeChild(el.instance.$el);
      }
    },
  });
};
