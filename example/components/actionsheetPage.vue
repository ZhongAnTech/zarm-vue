<template lang="html">
  <Container class="actionsheet-page">
    <PageHeader title="动作面板 ActionSheet" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>基本</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell>
              <za-button size="xs" slot='description' @click='visible2 = true'>开启</za-button>
              普通
            </za-cell>
            <za-cell>
              <za-button size="xs" slot='description' @click='visible1 = true'>开启</za-button>
              带取消操作
            </za-cell>
          </za-panel-body>
        </za-panel>
      </div>

      <za-actionsheet :visible.sync='visible1' :actions='actions1' @cancel='cancelCb'/>
      <za-actionsheet :visible.sync='visible2' :actions='actions2' :showCancel='false' @cancel='cancelCb'/>

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
      visible1: false,
      visible2: false,
      actions1: [{
        text: '操作一',
        onClick: () => console.log('action 1'),
      },{
        text: '操作二',
        onClick: () => console.log('action 2'),
      },{
        theme: 'error',
        text: '操作三',
        onClick: () => console.log('action 3'),
      }],
      actions2: [{
        text: '操作一',
        onClick: () => console.log('action 1'),
      },{
        text: '操作二',
        onClick: () => console.log('action 2'),
      }],
    }
  },
  methods: {
    cancelCb(reason, event){
      console.log(reason, event)
    }
  },
};
</script>
