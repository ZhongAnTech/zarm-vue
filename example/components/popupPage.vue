<template lang="html">
  <Container class="popup-page">
    <PageHeader title="弹出框 Popup" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-cell>
              <za-button size='xs' slot='description' @click='visible1 = true'>开启</za-button>
              从上方弹出
            </za-cell>
            <za-cell>
              <za-button size='xs' slot='description' @click='visible2 = true'>开启</za-button>
              从下方弹出
            </za-cell>
            <za-cell>
              <za-button size='xs' slot='description' @click='visible3 = true'>开启</za-button>
              从左侧弹出
            </za-cell>
            <za-cell>
              <za-button size='xs' slot='description' @click='visible4 = true'>开启</za-button>
              从右侧弹出
            </za-cell>
          </za-panel-body>
        </za-panel>
      </div>

      <za-popup
        :visible.sync='visible1'
        direction="top"
        :duration='3000'
        maskType="transparent"
        autoClose
        @close='popupClose'
      >
        <div class="popup-box-top">更新成功</div>
      </za-popup>

      <za-popup
        :visible.sync='visible2'
        direction="bottom"
        @close='popupClose'
      >
      <div class="popup-box">
        <za-button size="sm" @click='visible2 = false'>关闭弹层</za-button>
      </div>
      </za-popup>

      <za-popup
        :visible.sync='visible3'
        direction="left"
        @close='popupClose'
      >
      <div class="popup-box-left">
        <za-button size="sm" @click='visible3 = false'>关闭弹层</za-button>
      </div>
      </za-popup>

      <za-popup
        :visible.sync='visible4'
        direction="right"
        @close='popupClose'
      >
      <div class="popup-box">
        <za-button size="sm" @click='visible4 = false'>关闭弹层</za-button>
      </div>
      </za-popup>

    </main>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/PopupPage.scss';

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
      visible3: false,
      visible4: false,
    }
  },
  methods: {
    popupClose(reason, event) {
      console.log(reason, event);
    },
  },
};
</script>
