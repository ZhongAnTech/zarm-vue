<template lang="html">
  <div :class='prefixCls' @click='handleClick'>
    <div :class='{
      [`${prefixCls}-input`]: true,
      [`${prefixCls}-placeholder`]: !displayLabel,
      [`${prefixCls}-disabled`]: disabled,
      }'>
      <input type="hidden" :value='value' />
      {{displayLabel || placeholder}}
      <div :class='{
        [`${prefixCls}-container`]: true,
        [`${prefixCls}-hidden`]: !currentVisible,
      }' @click.stop='() => {}'>
        <za-popup :visible='currentVisible' @close='onPopupClose'>
          <div :class='`${prefixCls}-wrapper`'>
            <div :class='`${prefixCls}-header`'>
              <div :class='`${prefixCls}-cancel`' @click='handleCancel'>{{cancelText}}</div>
              <div :class='`${prefixCls}-title`'>{{title}}</div>
              <div :class='`${prefixCls}-submit`'></div>
            </div>
            <div :class='`${prefixCls}-crumbs`'>
              <p>选择：{{currentValue.map(item => itemRender(item)).join(labelAddon)}}</p>
              <p :class='`${prefixCls}-crumbs-error`' v-if='errorMsg'>{{errorMsg}}</p>
            </div>
            <div :class='`${prefixCls}-stack-group`'>
              <div v-for='(group, index) in renderGroup()' :class="{
                [`${prefixCls}-stack-column`]: true,
                'lower-hidden': !currentValue[index] || !currentValue[index][valueMember],
                }"
                :key='index'
                @click.stop='(e) => handleChange(index - 1)'
              >
                <div :class='`${prefixCls}-stack-column-wrapper`' ref='columns' @click.stop='() => {}'>
                  <div v-for='(item, i) in group'
                    :key='`item${i}`'
                    :class='{
                      [`${prefixCls}-stack-item`]: true,
                      active: currentValue[index] && currentValue[index][valueMember] === item[valueMember],
                      }' @click.stop='(e) => handleChange(index, item, index === renderGroup().length - 1)'>
                      {{ itemRender(item) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </za-popup>
      </div>
    </div>
  </div>
</template>

<script>
import zaPopup from '../../popup';

export default {
  name: 'zaStackPicker',
  components: {
    zaPopup,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-picker',
    },
    dataSource: {
      type: Array,
      required: true,
    },
    defaultValue: Array,
    value: Array,
    displayMember: {
      type: String,
      default: 'label',
    },
    valueMember: {
      type: String,
      default: 'value',
    },
    title: {
      type: String,
      default: '请选择',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    cols: {
      type: Number,
      default: Infinity,
    },
    labelAddon: {
      type: String,
      default: ' > ',
    },
    displayItems: {
      type: Number,
      default: 8,
    },
    itemHeight: {
      type: Number,
      default: 50,
    },
    displayRender: {
      type: Function,
      default: datas => datas.map(({ label }) => label).join(''),
    },
    itemRender: {
      type: Function,
      default: (d) => d.label,
    },
    validate: {
      type: Function,
      default: () => {},
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
  },
  watch: {
    visible(val, oldVal) { // eslint-disable-line no-unused-vars
      if (this.currentVisible === val) return;
      this.currentVisible = val;
    },
    value(val, oldVal) { // eslint-disable-line no-unused-vars
      const param = {
        value: val,
        defaultValue: '',
        dataSource: this.dataSource,
        validate: this.validate,
      };
      const newCurrentValue = this.resolveProps(param).currentValue;
      if (this.currentValue === newCurrentValue) return;
      this.currentValue = newCurrentValue;
      this.oldValue = this.currentValue;
    },
  },
  computed: {
    displayLabel() {
      return this.displayRender(this.currentValue);
    },
  },
  data() {
    const data = this.resolveProps(this);
    data.currentVisible = this.visible;
    data.oldValue = data.currentValue;
    return data;
  },
  methods: {
    resolveProps({ value, defaultValue, dataSource, validate }) {
      const resolveValue = [];
      const v = value || defaultValue || [];
      v.reduce((list, item) => {
        const valueItem = this.obtainItem(list, item);

        if (valueItem) {
          resolveValue.push(valueItem);

          return valueItem.children || [];
        }

        return [];
      }, dataSource);

      return {
        currentValue: resolveValue,
        errorMsg: validate(v),
      };
    },
    obtainItem(list, value) {
      const { valueMember } = this;
      return list.filter(item => item[valueMember] === value)[0];
    },
    reposition() {
      const {
        dataSource,
        valueMember,
        disabled,
        displayItems,
        itemHeight,
        cols,
        currentValue,
      } = this;

      if (disabled) return;

      currentValue.reduce((data, item, index) => {
        const value = item[valueMember];
        const valIndex = data.map(dataItem => dataItem[valueMember]).indexOf(value);

        if (index < cols && valIndex >= 0) {
          const target = this.$refs.columns[index];
          const position = target.scrollTop;
          const viewTopIndex = valIndex - displayItems;

          if (position < ((viewTopIndex + 1) * itemHeight) || position > (valIndex * itemHeight)) {
            target.scrollTop = valIndex * itemHeight;
          }

          return data[valIndex].children || [];
        }

        return [];
      }, dataSource);
    },
    handleClick(event) {
      if (this.disabled) return;
      this.$emit('click', event);
      this.toggle();
    },
    toggle() {
      if (this.disabled) {
        return;
      }
      this.currentVisible = !this.currentVisible;
      this.$emit('update:visible', this.currentVisible);
    },
    onPopupClose(reason) {
      if (reason === 'clickaway') {
        this.currentVisible = !this.currentVisible;
        this.$emit('update:visible', this.currentVisible);
      }
    },
    handleCancel(event) {
      this.toggle();
      this.currentValue = this.oldValue;
      this.$emit('cancel', event);
    },
    renderGroup() {
      const { valueMember, cols, currentValue } = this;
      const group = [];
      let dataSource = this.dataSource;
      let i = 0;
      while (dataSource) {
        group.push(dataSource);

        const colVal = currentValue[i];
        const childrenData = ((colVal
          ? this.obtainItem(dataSource, colVal[valueMember])
          : dataSource[0]) || {}).children;

        if (childrenData && childrenData.length && (i < (cols - 1))) {
          dataSource = childrenData;
        } else {
          dataSource = null;
        }

        i += 1;
      }

      return group;
    },
    handleChange(index, item, isLast) {
      const { validate } = this;
      const value = this.currentValue.slice(0, index);
      let errorMsg = null;

      if (item) {
        value[index] = item;
      }
      errorMsg = validate(value);
      if (isLast && !errorMsg) {
        this.currentValue = value;
        this.errorMsg = errorMsg;
        this.$emit('input', value.map(v => v[this.valueMember]));
        this.$emit('change', value.map(v => v[this.valueMember]));
        this.$emit('ok', value);
        this.toggle();
      } else {
        this.currentValue = value;
        this.errorMsg = errorMsg;
        this.$emit('input', value.map(v => v[this.valueMember]));
        this.$emit('change', value.map(v => v[this.valueMember]));
      }
    },
  },
  mounted() {
    this.reposition();
  },
  updated() {
    this.reposition();
  },
};
</script>
