import Calendar from './src/calendar';

/* istanbul ignore next */
Calendar.install = function (Vue) {
  Vue.component(Calendar.name, Calendar);
};

export default Calendar;

// import Vue from "vue"

// const calendarConstructor = Vue.extend(require('./calendar.vue'));
// let calendarPool = [];

// let getAnInstance = () => {
//     if (calendarPool.length > 0) {
//         let instance = calendarPool[0];
//         calendarPool.splice(0, 1);
//     }
//     return new calendarConstructor({
//         el: document.createElement('div')
//     });
// };

// let returnAnInstance = instance => {
//     if (instance) {
//         calendarPool.push(instance);
//     }
// };

// let removeDom = event => {
//     if (event.target.parentNode) {
//         event.target.parentNode.removeChild(event.target);
//     }
// };

// calendarConstructor.prototype.close = function() {
//     this.visible = false;
//     returnAnInstance(this);
// };

// const preventDomDefault = (ev) => {
//     ev.preventDefault();
// }
// let calendar = (options = {}) => {
//     let instance = getAnInstance();
//     instance.multiSelected = options.multiSelected || false;
//     instance.minDate = options.minDate || "";
//     instance.maxDate = options.maxDate || "";
//     instance.selectedSuffix = options.selectedSuffix || "";
//     instance.months = options.months || 12;
//     instance.visible = true;
//     instance.callback = options.callback;
//     instance.onClick = options.onClick;
//     document.body.appendChild(instance.$el);
//     document.body.scrollTop = 0;
//     Vue.nextTick(function() {
//         instance.selected = options.selectedValue ? options.selectedValue.split(",") : []
//         instance.$el.querySelector(".ok-btn").addEventListener("click", function() {
//             instance.close();
//             if (options.callback) options.callback(instance.selected);
//         });
//         instance.$el.querySelector(".cancel-btn").addEventListener("click", function() {
//             instance.close();
//         });
//     });
//     return instance;
// };

// export default calendar;
