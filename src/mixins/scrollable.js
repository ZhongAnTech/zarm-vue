/**
 * document scrollable on clientwindow
 */
function getScrollTop() {
  // vue-jest ignore
  if (!document) return;
  if (document.scrollingElement) {
    return document.scrollingElement.scrollTop;
  }
  if (document.body || window.pageXOffset) {
    return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
  }
}

function setScrollTop(scrollTop) {
  // vue-jest ignore
  if (!document) return;
  if (document.scrollingElement) {
    document.scrollingElement.scrollTop = scrollTop;
    return;
  }
  document.documentElement.scrollTop = scrollTop;
  document.body.scrollTop = scrollTop;
}

export default {
  data() {
    return {
      documentScrollble: this.lockScroller || true, // 判断是否开启scrolllock
      documentBodyStyle: null,
      documentScrollTop: 0, // 保留scrolllock的历史scrollTop滚动距离
    };
  },
  mounted() {
    this.documentBodyStyle = document.body.style;
  },
  beforeDestroy() {
    this.onAfterClose();
  },
  methods: {
    handlerClient(event) {
      event.preventDefault();
    },
    onAfterOpen() {
      if (!this.documentScrollble) return;
      this.documentScrollTop = getScrollTop();
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `${-this.documentScrollTop}px`;
    },
    onAfterClose() {
      if (!this.documentScrollble) return;
      document.body.style = this.documentBodyStyle;
      // scrollTop lost after set position:fixed, restore it back.
      setScrollTop(this.documentScrollTop);
    },
  },
};
