<template lang="html">
  <Container class="spinner-page">
    <PageHeader title="指示器 Spinner" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-cell>
              <za-spinner slot='description' class="rotate360"/>
              普通
            </za-cell>
            <za-cell>
              <za-spinner slot='description' class="rotate360" theme='error'/>
              主题
            </za-cell>
            <za-cell>
              <za-spinner slot='description' class="rotate360" size="lg"/>
              大号
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
import '../styles/pages/SpinnerPage.scss';

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

  },
};
</script>

<style lang="css">
</style>
