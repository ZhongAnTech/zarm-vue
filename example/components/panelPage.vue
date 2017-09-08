<template lang="html">
  <Container class="panel-page">
    <PageHeader title="面板 Panel" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title='普通' />
          <za-panel-body>
            <za-cell>body</za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title='带更多按钮'>
            <a slot='more' @click='handleClick'>更多</a>
          </za-panel-header>
          <za-panel-body>
            <za-cell>body</za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title='带底部' />
          <za-panel-body>
            <za-cell>body</za-cell>
          </za-panel-body>
          <za-panel-footer title="左侧文案" more="右侧文案" />
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

    }
  },
  methods: {
    handleClick() {
      alert('click me')
    }
  },
};
</script>
