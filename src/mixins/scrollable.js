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
    return document.body.scrollTop || window.pageYOffset;
  }
}

function setScrollTop(scrollTop) {
  // vue-jest ignore
  if (!document) return;
  if (document.scrollingElement) {
    document.scrollingElement.scrollTop = scrollTop;
    return;
  }
  if (document.body) {
    document.body.scrollTop = scrollTop;
  }
}

export default {
  data() {
    return {
      documentscrollble: this.lockScroller || true,
      documentBodyStyle: null,
      documentScrollTop: 0,
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
      this.documentScrollTop = getScrollTop();
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `${-this.documentScrollTop}px`;
    },
    onAfterClose() {
      document.body.style = this.documentBodyStyle;
      // console.log(this.documentScrollTop);
      // scrollTop lost after set position:fixed, restore it back.
      setScrollTop(this.documentScrollTop);
    },
  },
};
