<template lang="html">
  <Container class="tab-page">
    <PageHeader title="标签页 Tab" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>基本</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-tabs v-model="activeName" @change="handleClick">
              <za-tab-pane label='用户管理' name='first'>
                <div class='content'>用户管理</div>
              </za-tab-pane>
              <za-tab-pane label='配置管理' name='second'>
                <div class='content'>配置管理</div>
              </za-tab-pane>
              <za-tab-pane label='角色管理' name='third'>
                <div class='content'>角色管理</div>
              </za-tab-pane>
            </za-tabs>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>可滑动</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-tabs v-model="activeNameSwipe" @change="handleClick" canSwipe>
              <za-tab-pane label='选项卡1' name='first'>
                <div class='content'>试试左滑</div>
              </za-tab-pane>
              <za-tab-pane label='选项卡2' name='second'>
                <div class='content'>试试右滑</div>
              </za-tab-pane>
            </za-tabs>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>多主题</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-tabs theme='info' v-model="activeName2" @change="handleClick">
              <za-tab-pane label='用户管理' name='first' />
              <za-tab-pane label='配置管理' name='second' />
              <za-tab-pane label='角色管理' name='third' />
            </za-tabs>
            <za-tabs theme='success' v-model="activeName3" @change="handleClick">
              <za-tab-pane label='用户管理' name='first' />
              <za-tab-pane label='配置管理' name='second' />
              <za-tab-pane label='角色管理' name='third' />
            </za-tabs>
            <za-tabs theme='warning' v-model="activeName4" @change="handleClick">
              <za-tab-pane label='用户管理' name='first' />
              <za-tab-pane label='配置管理' name='second' />
              <za-tab-pane label='角色管理' name='third' />
            </za-tabs>
            <za-tabs theme='error' v-model="activeName5" @change="handleClick">
              <za-tab-pane label='用户管理' name='first' />
              <za-tab-pane label='配置管理' name='second' />
              <za-tab-pane label='角色管理' name='third' />
            </za-tabs>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>联动</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-tabs v-model="activeName6" @change="handleClick2">
              <za-tab-pane label='用户管理' name='first'>
                <div class='content'>用户管理</div>
              </za-tab-pane>
              <za-tab-pane label='配置管理' name='second'>
                <div class='content'>配置管理</div>
              </za-tab-pane>
              <za-tab-pane label='角色管理' name='third'>
                <div class='content'>角色管理</div>
              </za-tab-pane>
            </za-tabs>
            <za-tabs v-model="activeName7" @change="handleClick">
              <za-tab-pane label='用户管理' name='first'>
                <div class='content'>用户管理</div>
              </za-tab-pane>
              <za-tab-pane label='配置管理' name='second'>
                <div class='content'>配置管理</div>
              </za-tab-pane>
              <za-tab-pane label='角色管理' name='third'>
                <div class='content'>角色管理</div>
              </za-tab-pane>
            </za-tabs>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>指定默认选项</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-tabs v-model="activeName8" @change="handleClick">
              <za-tab-pane label='用户管理' name='first'>
                <div class='content'>用户管理</div>
              </za-tab-pane>
              <za-tab-pane label='配置管理' name='second'>
                <div class='content'>配置管理</div>
              </za-tab-pane>
              <za-tab-pane label='角色管理' name='third'>
                <div class='content'>角色管理</div>
              </za-tab-pane>
            </za-tabs>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>指定线条宽度</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-tabs v-model="activeName9" @change="handleClick" :lineWidth='60'>
              <za-tab-pane label='用户管理' name='first'>
                <div class='content'>用户管理</div>
              </za-tab-pane>
              <za-tab-pane label='配置管理' name='second'>
                <div class='content'>配置管理</div>
              </za-tab-pane>
              <za-tab-pane label='角色管理' name='third'>
                <div class='content'>角色管理</div>
              </za-tab-pane>
            </za-tabs>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>禁用指定选项</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-tabs v-model="activeName0" @change="handleClick">
              <za-tab-pane label='用户管理' name='first'>
                <div class='content'>用户管理</div>
              </za-tab-pane>
              <za-tab-pane label='配置管理' name='second' disabled>
                <div class='content'>配置管理</div>
              </za-tab-pane>
              <za-tab-pane label='角色管理' name='third'>
                <div class='content'>角色管理</div>
              </za-tab-pane>
            </za-tabs>
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
import '../styles/pages/TabPage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      activeName: 'first',
      activeName2: 'first',
      activeName3: 'first',
      activeName4: 'first',
      activeName5: 'first',
      activeName6: 'first',
      activeName7: 'first',
      activeName8: 'second',
      activeName9: 'first',
      activeName0: 'first',
      activeNameSwipe: 'first',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClick2(tab, event){
      this.activeName7 = this.activeName6;
    }
  },
};
</script>
