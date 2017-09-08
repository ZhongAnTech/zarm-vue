<template lang="html">
  <Container class="button-page">
    <PageHeader title="按钮 Button" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本">
          </za-panel-header>
          <za-panel-body>
            <za-button theme="primary">普通按钮</za-button>
            <za-button theme="primary" block>块级按钮</za-button>
            <za-button theme="primary" block active>激活状态的按钮</za-button>
            <za-button theme="primary" block disabled>禁用状态的按钮</za-button>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="幽灵按钮">
          </za-panel-header>
          <za-panel-body>
            <za-button block bordered>幽灵按钮</za-button>
            <za-button block bordered active>激活状态的按钮</za-button>
            <za-button block bordered disabled>禁用状态的按钮</za-button>
            <za-button theme="primary" block bordered>幽灵按钮</za-button>
            <za-button theme="primary" block bordered active>激活状态的按钮</za-button>
            <za-button theme="primary" block bordered disabled>禁用状态的按钮</za-button>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="多主题">
          </za-panel-header>
          <za-panel-body>
            <za-button>Default</za-button>
            <za-button theme="primary">primary</za-button>
            <za-button theme="info">info</za-button>
            <za-button theme="success">success</za-button>
            <za-button theme="warning">warning</za-button>
            <za-button theme="error">error</za-button>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="按钮大小">
          </za-panel-header>
          <za-panel-body>
            <za-button theme="primary" size='xl'>xl</za-button>
            <za-button theme="primary" size='lg'>lg</za-button>
            <za-button theme="primary">md</za-button>
            <za-button theme="primary" size='sm'>sm</za-button>
            <za-button theme="primary" size='xs'>xs</za-button>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="多形状">
          </za-panel-header>
          <za-panel-body>
            <za-button bordered shape="radius">圆角按钮</za-button>
            <za-button bordered shape="round">椭圆角按钮</za-button>
            <za-button bordered shape="circle">GO</za-button>
            <za-button bordered shape="circle">
              <za-icon type='right' slot='icon'></za-icon>
            </za-button>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="带icon的按钮">
          </za-panel-header>
          <za-panel-body>
            <za-button bordered shape="radius">
              <za-icon type='right-round' theme='success' slot='icon'></za-icon>
              正确
            </za-button>
            <za-button bordered shape="radius">
              <za-icon type='wrong-round' theme='error' slot='icon'></za-icon>
              错误
            </za-button>
            <za-button bordered loading shape="radius">
              加载中
            </za-button>
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
import '../styles/pages/ButtonPage.scss';

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
