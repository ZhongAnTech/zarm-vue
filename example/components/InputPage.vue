<template lang="html">
  <Container>
    <PageHeader title="文本框 Input" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="普通"/>
          <za-panel-body>
            <za-cell title='单行文本'>
              <za-input ref='inputFirst' v-model='v1' type="text" placeholder="type is text" @change='handleChange'></za-input>
            </za-cell>
            <za-cell title='多行文本'>
              <za-input v-model='v2' type="textarea" placeholder="type is textarea" @change='handleChange'></za-input>
            </za-cell>
            <za-cell>
              <a @click='focus'>click to focus the first input</a>
            </za-cell>
          </za-panel-body>
        </za-panel>

         <za-panel>
          <za-panel-header title="输入类型"/>
          <za-panel-body>
            <za-cell title='数字'>
              <za-input-number v-model='v5' type="number"  @change='handleChange'></za-input-number>
            </za-cell>
            <za-cell title='金额'>
              <za-input-number v-model='v6' type="price"  @change='handleChange'></za-input-number>
            </za-cell>
             <za-cell title='证件'>
              <za-input-number v-model='v7' type="idcard"  @change='handleChange'></za-input-number>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="高度自适应"/>
          <za-panel-body>
            <za-cell title='多行文本'>
              <za-input autosize v-model='v3' type="textarea" placeholder="this is a autosize textarea"></za-input>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="无标签栏"/>
          <za-panel-body>
            <za-cell>
              <za-input type="text" placeholder="标题" @change='handleChange3'/>
            </za-cell>
            <za-cell>
              <za-input autosize v-model='v4' type="textarea" rows='4' placeholder="摘要"></za-input>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="显示输入字数"/>
          <za-panel-body>
            <za-cell>
              <za-input autosize showLength type="textarea" rows="4" maxLength="200" placeholder="摘要" v-model='v5'></za-input>
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
      v2:'这是一个textarea',
      v3:'',
      v4:'',
      v5:'',
      v6:'',
      v7:'327198092039342',
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
    focus() {
      this.$refs.inputFirst.focus()
    },
  },
};
</script>

<style lang="css">
</style>
