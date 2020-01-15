## za-popper 气泡层

:::demo 基本

```html
<za-cell class="direction-demo">
  <div>
    <div style="marginLeft: 60px">
      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="topLeft" content="topLeft text">
        <za-button ghost size="xs">TL</za-button>
      </za-popper>

      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="top" content="top text">
        <za-button ghost size="xs">Top</za-button>
      </za-popper>

      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="topRight" content="topRight text">
        <za-button ghost size="xs">TR</za-button>
      </za-popper>
    </div>

    <div style="width: 60px;float: left;clear: both">
      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="leftTop" content="leftTop text">
        <za-button ghost size="xs">LT</za-button>
      </za-popper>

      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="left" content="left text">
        <za-button ghost size="xs">Left</za-button>
      </za-popper>

      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="leftBottom" content="leftBottom text">
        <za-button ghost size="xs">LB</za-button>
      </za-popper>
    </div>

    <div style="width: 60px;marginLeft: 260px;">
      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="rightTop" content="rightTop text">
        <za-button ghost size="xs">RT</za-button>
      </za-popper>

      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="right" content="right text">
        <za-button ghost size="xs">Right</za-button>
      </za-popper>

      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="rightBottom" content="rightBottom text">
        <za-button ghost size="xs">RB</za-button>
      </za-popper>
    </div>

    <div style="marginLeft: 60px;clear: both">
      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="bottomLeft" content="bottomLeft text">
        <za-button ghost size="xs">BL</za-button>
      </za-popper>

      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="bottom" content="bottom text">
        <za-button ghost size="xs">Bottom</za-button>
      </za-popper>

      <za-popper :arrowPointAtCenter="arrow === '1'" className="custom-arrow-content" hasArrow direction="bottomRight" content="bottomRight text">
        <za-button ghost size="xs">BR</za-button>
      </za-popper>
    </div>
  </div>
</za-cell>
```

:::

### Vue Script

```javascript
<script name="vue">
export default {
  data() {
    return {
      arrow: '1',
    }
  },
  methods: {

  },
};
</script>
```
