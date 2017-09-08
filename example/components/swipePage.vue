<template lang="html">
  <Container class="swipe-page">
    <PageHeader title="图片轮播 swipe" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-swipe
              direction='left'
              @changeStart='handleChangeStart'
              @changeEnd='handleChangeEnd'>
              <za-swipe-item
                v-for='(i, index) in ITEMS'
                key='index'>
                <div class='swipe-item-pic'>
                  <img :src="i.img" alt="">
                </div>
              </za-swipe-item>
            </za-swipe>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="纵向"/>
          <za-panel-body>
            <za-swipe
              direction='bottom'
              @changeStart='handleChangeStart'
              @changeEnd='handleChangeEnd'>
              <za-swipe-item
                v-for='(i, index) in ITEMS'
                key='index'>
                <div class='swipe-item-pic'>
                  <img :src="i.img" alt="">
                </div>
              </za-swipe-item>
            </za-swipe>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="循环轮播"/>
          <za-panel-body>
            <za-swipe
              ref='swipe'
              direction='left'
              loop
              @changeStart='handleChangeStart'
              @changeEnd='handleChangeEnd'>
              <za-swipe-item
                v-for='(i, index) in ITEMS'
                key='index'>
                <div class='swipe-item-pic'>
                  <img :src="i.img" alt="">
                </div>
              </za-swipe-item>
            </za-swipe>
            <div class="controls">
              <za-button
                block
                size="sm"
                @click='onJumpTo'>无动画切换指定页</za-button>
              <za-button
                block
                size="sm"
                @click='onSlideTo'>滑动到指定页</za-button>
            </div>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="自动循环轮播"/>
          <za-panel-body>
            <za-swipe
              direction='left'
              loop
              autoPlay>
              <za-swipe-item
                v-for='(i, index) in ITEMS'
                key='index'>
                <div class='swipe-item-pic'>
                  <img :src="i.img" alt="">
                </div>
              </za-swipe-item>
            </za-swipe>
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
import '../styles/pages/SwipePage.scss';

const ITEMS = [
  {
    url: '#',
    img: require('../images/banners/1.png'),
  },
  {
    url: '#',
    img: require('../images/banners/2.png'),
  },
  {
    url: '#',
    img: require('../images/banners/3.png'),
  },
];

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      ITEMS,
    }
  },
  methods: {
    handleChangeStart(index){
      console.log(index);
    },
    handleChangeEnd(index){
      console.log(index);
    },
    onJumpTo(){
      this.$refs.swipe.onJumpTo(0)
    },
    onSlideTo(){
      this.$refs.swipe.onSlideTo(2)
    }
  },
};
</script>
