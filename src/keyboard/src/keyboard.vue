<template>
  <div :class="prefixCls" @click.stop='() => {}'>
    <div :class="`${prefixCls}-keys`">
      <div
          v-for="(text, index) in getKeys()"
          :class="{
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item-disabled`]: text.length === 0,
          }"
          :key="index"
          @click="onKeyClick(text)"
        >
          <template v-if="text === 'close'">
              <za-icon type="keyboard" />
          </template>
          <template v-else>
              {{ text }}
          </template>
        </div>
    </div>
    <div :class="`${prefixCls}-handle`">
      <div
        :class="`${prefixCls}-item`"
        @touchstart="onLongPressIn('delete')"
        @touchend="onLongPressOut"
      >
        <za-icon type="deletekey" />
      </div>
      <div :class="{
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-ok`]: true,
      }"
      @click="onKeyClick('ok')">确定</div>
    </div>
  </div>
</template>

<script>
import zaIcon from '@/icon';
import { enumGenerator } from '@/utils/validator';

const NUMBER_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'close'];
const PRICE_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'close'];
const IDCARD_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'x', '0', 'close'];


export default {
  name: 'zaKeyboard',
  props: {
    prefixCls: {
      type: String,
      default: 'za-keyboard',
    },
    type: {
      type: String,
      validator: enumGenerator(['number', 'price', 'idcard']),
      default: 'number',
    },
  },
  data() {
    return {
      longPressTimer: null,
      pressBegin: 0,
      pressEnd: 800,
      longPressClick: null,
    };
  },
  components: {
    zaIcon,
  },
  methods: {
    onLongPressIn(key) {
      const self = this;
      self.$emit('keyClick', key);
      self.longPressTimer = setTimeout(() => {
        self.longPressTimer = setInterval(() => {
          self.$emit('keyClick', key);
        }, 100);
      }, 800);
    },

    onLongPressOut() {
      clearInterval(this.longPressTimer);
    },

    onKeyClick(key) {
      if (key.length === 0) {
        return;
      }
      this.$emit('keyClick', key);
    },

    getKeys() {
      const { type } = this;
      switch (type) {
        case 'price':
          return PRICE_KEYS;

        case 'idcard':
          return IDCARD_KEYS;

        default:
          return NUMBER_KEYS;
      }
    },
  },
};
</script>
