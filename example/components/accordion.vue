<template lang="html">
  <Container class="zaAccordion-page">
    <PageHeader title="手风琴 zaAccordion" />
    <main>
      <div>
        <za-panel>
            <za-panel-header title="基本" />
            <za-panel-body>
              <zaAccordion @change='onChange'>
                <zaAccordionItem title="50元套餐" aiTag='0'>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                </zaAccordionItem>
                <zaAccordionItem title="100元套餐" aiTag='1'>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                </zaAccordionItem>
                <zaAccordionItem title="200元套餐" aiTag='2'>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                </zaAccordionItem>
              </zaAccordion>
            </za-panel-body>
          </za-panel>

          <za-panel>
            <za-panel-header title="手风琴模式" />
            <za-panel-body>
              <zaAccordion animated  :multiple='true' >
                <zaAccordionItem title="50元套餐" aiTag='0'>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                </zaAccordionItem>
                <zaAccordionItem title="100元套餐" aiTag='1'>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                </zaAccordionItem>
                <zaAccordionItem title="200元套餐" aiTag='2'>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                </zaAccordionItem>
              </zaAccordion>
            </za-panel-body>
          </za-panel>

          <za-panel>
            <za-panel-header title="默认展开项" />
            <za-panel-body>
              <zaAccordion animated :defaultActiveTag='["a"]'>
                <zaAccordionItem title="50元套餐" aiTag='a'>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                </zaAccordionItem>
                <zaAccordionItem title="100元套餐" aiTag='b'>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                </zaAccordionItem>
                <zaAccordionItem title="200元套餐" aiTag='d'>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                </zaAccordionItem>
              </zaAccordion>
            </za-panel-body>
          </za-panel>

          <za-panel>
            <za-panel-header title="强制展开模式" />
            <za-panel-body>
              <zaAccordion open>
                <zaAccordionItem title="50元套餐">
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                  <div>我是50元套餐内容</div>
                </zaAccordionItem>
                <zaAccordionItem title="100元套餐">
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                  <div>我是100元套餐内容</div>
                </zaAccordionItem>
                <zaAccordionItem title="200元套餐">
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                  <div>我是200元套餐内容</div>
                </zaAccordionItem>
              </zaAccordion>
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
      active: [],
    }
  },
  mounted() {
    setTimeout(() => {
        console.log(this.active)
        this.active = ['1'];
    }, 2000);
  },
  methods: {
    onChange(n){
      console.log(n);
    },
  },
};
</script>
