<template lang="html">
  <Container class="switch">
    <PageHeader title="开关 Switch" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-cell>
              <za-switch slot='description' v-model='switch1' @change='handleChange'></za-switch>
              普通
            </za-cell>
            <za-cell>
              <za-switch slot='description' v-model='switch2'></za-switch>
              默认开
            </za-cell>
            <za-cell>
              <za-switch slot='description' v-model='switch3' disabled></za-switch>
              禁用的开关（默认关）
            </za-cell>
            <za-cell>
              <za-switch slot='description' v-model='switch4' disabled></za-switch>
              禁用的开关（默认开）
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="受控开关"/>
          <za-panel-body>
            <za-cell>
              <za-switch slot='description' v-model='switch5' @change='handleChange2'></za-switch>
              主开关
            </za-cell>
            <za-cell>
              <za-switch slot='description' v-model='switch6'></za-switch>
              受控开关
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
import '../styles/pages/BadgePage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      switch1: false,
      switch2: true,
      switch3: false,
      switch4: true,
      switch5: false,
      switch6: false,
    }
  },
  methods: {
    handleChange(event){
      console.log(event);
    },
    handleChange2(){
      this.switch6 = this.switch5;
    }
  },
};
</script>
