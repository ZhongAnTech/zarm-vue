<template lang="html">
  <Container class="pull-page">
    <PageHeader title="下拉刷新 Pull" />
    <main>
      <div>
        <img src='https://avatars2.githubusercontent.com/u/499550?v=4&s=72' :style='{width:0,height:0}' />
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-pull :on-refresh='refresh(1)' :refreshing='refreshing1'>
              <za-cell v-for='(i, index) in myData1' :key='index'>ID号 {{i}} </za-cell>
            </za-pull>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="上拉加载下拉刷新 Pull"/>
          <za-panel-body>
            <za-pull :on-refresh='refresh(2)' :refreshing='refreshing2' :loading='loading' :on-load='loadData'>
              <za-cell v-for='(i, index) in myData2' :key='index'>ID号 {{i}} </za-cell>
              <!-- 此处的几个slot用来覆盖默认样式，定义的会覆盖，不定义的依然使用默认样式 -->
              <template scope='props' slot='refreshPull'>
                <div class='custom-control' :style='{
                  transform: `scale(${props.percent / 100})`
                  }'>
                  <img src='https://avatars2.githubusercontent.com/u/499550?v=4&s=72' alt="" />
                </div>
              </template>
              <template scope='props' slot='refreshDrop'>
                <div class='custom-control'>
                  释放加载
                </div>
              </template>
              <template scope='props' slot='refreshLoading'>
                <div class='custom-control'>
                  <za-spinner class="rotate360" />
                </div>
              </template>
              <template scope='props' slot='refreshSuccess'>
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

let times = 0;

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  mounted() {
    this.refreshing2 = true
    setTimeout(() => {
      this.myData2 = [1,2,3,4,5,6,7,8,9,10]
      this.refreshing2 = false
    }, 1500)
  },
  data() {
    return {
      myData1: [1,2,3,4],
      myData2: [],
      refreshing1: false,
      refreshing2: false,
      loading: false,
    }
  },
  methods: {
    random(length){
      const newData = [];
      for(let i = 0; i < length; i++){
        newData.push(Math.round(Math.random() * 100))
      }
      return newData;
    },
    refresh(index) {
      return () => new Promise((resolve, reject) => {
        this[`refreshing${index}`] = true;
        setTimeout(() => {
          let length = index == 1 ? this.myData1.length : this.myData2.length
          this[`myData${index}`] = this.random(length);
          resolve(true);
          this[`refreshing${index}`] = false;
        }, 1000)
      })
    },
    loadData() {
      this.loading = true
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.8) {
            return reject(false); // capture error and reject it
          };
          if(times < 2){
            const length = this.myData2.length + 1
            for(let i = 0; i < 10; i++) {
              this.myData2.push( length + i);
            }
            resolve(true) // has more
          }else{
            resolve(false) // no more
          }
          this.loading = false
          times++;
        }, 1200)
      })
    }
  },
};
</script>
