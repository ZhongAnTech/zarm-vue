<template lang="html">
  <Container class="icon-page">
    <PageHeader title="图标 Icon" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <div class="grid">
              <div v-for='(i, index) in ICONS' class="grid-column" key={index}>
                <za-icon theme="primary" :type='i' class='icon'/>
                <span class="icon-name">{{i}}</span>
              </div>
            </div>
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
import '../styles/pages/IconPage.scss';

const ICONS = [
  'right', 'right-round', 'right-round-fill',
  'wrong', 'wrong-round', 'wrong-round-fill',
  'info-round', 'info-round-fill',
  'question-round', 'question-round-fill',
  'warning-round', 'warning-round-fill',
  'arrow-left', 'arrow-right', 'arrow-top', 'arrow-bottom',
  'add', 'add-round', 'add-round-fill',
  'minus', 'minus-round', 'minus-round-fill',
  'broadcast',
].sort();

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      ICONS
    }
  },
  methods: {

  },
};
</script>

<style lang="css">
</style>
