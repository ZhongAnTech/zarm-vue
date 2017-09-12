<template lang="html">
  <Container class="pull-page">
    <PageHeader title="下拉刷新 Pull" />
    <main>
      <div>
        <img src='https://avatars2.githubusercontent.com/u/499550?v=4&s=72' :style='{width:0,height:0}' />
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-pull :on-refresh='fetch(1)' :refreshing='refreshing1'>
              <za-cell v-for='i in myData1' :key='i'>第 {{i}} 行</za-cell>
            </za-pull>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="自定义样式"/>
          <za-panel-body>
            <za-pull :on-refresh='fetch(2)' :refreshing='refreshing2'>
              <za-cell v-for='i in myData2' :key='i'>第 {{i}} 行</za-cell>
              <!-- 此处的几个slot用来覆盖默认样式，定义的会覆盖，不定义的依然使用默认样式 -->
              <template scope='props' slot='pull'>
                <div class='custom-control' :style='{
                  transform: `scale(${props.percent / 100})`
                  }'>
                  <img src='https://avatars2.githubusercontent.com/u/499550?v=4&s=72' alt="" />
                </div>
              </template>
              <template scope='props' slot='drop'>
                <div class='custom-control'>
                  释放加载
                </div>
              </template>
              <template scope='props' slot='loading'>
                <div class='custom-control'>
                  <za-spinner class="rotate360" />
                </div>
              </template>
              <template scope='props' slot='success'>
                <div class='custom-control'>
                  加载成功
                </div>
              </template>
            </za-pull>
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
import '../styles/pages/PullPage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      myData1: [1,2,3,4],
      myData2: [1,2,3,4],
      refreshing1: false,
      refreshing2: false,
    }
  },
  methods: {
    fetch(index) {
      return () => {
        this[`refreshing${index}`] = true;
        setTimeout(() => {
          const myData = index == 1 ? this.myData1 : this.myData2
          let length = myData.length
          myData.push(++length, ++length);
          this[`refreshing${index}`] = false;
        }, 1000)
      }
    }
  },
};
</script>
