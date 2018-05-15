<template lang="html">
  <Container>
    <PageHeader title="数字键盘 InputNumber" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="普通"/>
          <za-panel-body>
            <za-cell title='数字'>
              <za-input-number v-model='v1' type="number"  @change='handleChange'></za-input-number>
            </za-cell>
            <za-cell title='金额'>
              <za-input-number v-model='v2' type="price"  @change='handleChange2'></za-input-number>
            </za-cell>
             <za-cell title='证件'>
              <za-input-number v-model='v3' type="idcard"  @change='handleChange3'></za-input-number>
            </za-cell>
          </za-panel-body>
        </za-panel>
      </div>
    </main>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      v1:'',
      v2:'',
      v3:'',
    }
  },
  methods: {
    handleChange(v) {
      console.log(this.v1, v);
    },
    handleChange2(v) {
      console.log(this.v2, v);
    },
    handleChange3(v) {
      console.log(v);
    },
  },
};
</script>

<style lang="css">
</style>
