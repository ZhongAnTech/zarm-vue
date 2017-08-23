import Vue from 'vue';

const CalendarConstructor = Vue.extend(require('./calendar.vue'));

const calendarPool = [];

const getAnInstance = () => {
  if (calendarPool.length > 0) {
    // const instance = calendarPool[0];
    calendarPool.splice(0, 1);
  }
  return new CalendarConstructor({
    el: document.createElement('div'),
  });
};

const returnAnInstance = instance => {
  if (instance) {
    calendarPool.push(instance);
  }
};

// const removeDom = event => {
//   if (event.target.parentNode) {
//     event.target.parentNode.removeChild(event.target);
//   }
// };

CalendarConstructor.prototype.close = instance => {
  instance.visible = false;
  returnAnInstance(instance);
};

// const preventDomDefault = ev => {
//   ev.preventDefault();
// };
const calendar = (options = {}) => {
  const instance = getAnInstance();
  instance.multiSelected = options.multiSelected || false;
  instance.minDate = options.minDate || '';
  instance.maxDate = options.maxDate || '';
  instance.selectedSuffix = options.selectedSuffix || '';
  instance.months = options.months || 12;
  instance.visible = true;
  instance.callback = options.callback;
  instance.onClick = options.onClick;
  document.body.appendChild(instance.$el);
  document.body.scrollTop = 0;
  Vue.nextTick(() => {
    instance.selected = options.selectedValue ? options.selectedValue.split(',') : [];
    instance.$el.querySelector('.ok-btn').addEventListener('click', () => {
      instance.close(instance);
      if (options.callback) options.callback(instance.selected);
    });
    instance.$el.querySelector('.cancel-btn').addEventListener('click', () => {
      instance.close(instance);
    });
  });
  return instance;
};

export default calendar;
