<template lang="html">
  <Container>
    <PageHeader title="数字键盘 Keyboard & KeyboardPicker" />
    <main>
      <div>
         <za-panel>
          <za-panel-header title="类型"/>
          <za-panel-body>
            <za-cell title='数字' @click="showPicker('visible1')">
              {{v1}}
            </za-cell>
            <za-cell title='金额' @click="showPicker('visible2')">
              {{v2}}
            </za-cell>
             <za-cell title='证件' @click="showPicker('visible3')">
              {{v3}}
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="键盘"/>
          <za-panel-body>
            <za-keyboard type="number" />
          </za-panel-body>
        </za-panel>

        <za-keyboard-picker :visible.sync="visible1" type="number" @keyClick="handleChange1" />
        <za-keyboard-picker :visible.sync="visible2" type="price" @keyClick="handleChange2" />
        <za-keyboard-picker :visible.sync="visible3" type="idcard" @keyClick="handleChange3" />

      </div>
    </main>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';

const getValue = (value, key) => {
  const newValue = (key === 'delete')
      ? value.slice(0, value.length - 1)
      : value + key;
  return newValue;
}

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      v1:'',
      v2:'',
      v3:'',
    }
  },
  methods: {
    handleChange1(key) {
      if (['close', 'ok'].indexOf(key) > -1) {
        return;
      }
      this.v1 = getValue(this.v1, key)
      console.log(this.v1);
    },
    showPicker(name) {
      this[name] = true;
    },
    handleChange2(key) {
      if (['close', 'ok'].indexOf(key) > -1) {
        return;
      }
      this.v2 = getValue(this.v2, key)
      console.log(this.v2);
    },
    handleChange3(key) {
      if (['close', 'ok'].indexOf(key) > -1) {
        return;
      }
      this.v3 = getValue(this.v3, key)
      console.log(this.v3);
    },
  },
};
</script>

<style lang="css">
</style>
