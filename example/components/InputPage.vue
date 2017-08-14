<template lang="html">
  <Container>
    <PageHeader title="文本框 Input" />
    <main>
      <div>
        <za-input ref='inputFirst' v-model='v1' type="text" placeholder="type is text" @change='handleChange'></za-input>
        <a @click='focus'>click to focus the first input</a></Cell>
      </div>
      <div>
        <za-input v-model='v2' type="textarea" placeholder="type is textarea" @change='handleChange2'></za-input>
      </div>
      <div>
        <za-input autosize v-model='v3' type="textarea" placeholder="this is a autosize textarea"></za-input>
      </div>
      <div>
        <za-input autosize showLength type="textarea" rows="4" :maxLength="200" placeholder="摘要"></za-input>
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
      v2:'这是一个textarea',
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
    focus() {
      this.$refs.inputFirst.focus()
    }
  },
};
</script>

<style lang="css">
</style>
