<template lang="html">
  <Container class='cell-page'>
    <PageHeader title="图标 Icon" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>普通列表项</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell title='标题文字'></za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>带描述的列表项</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell title='标题文字'>
              <div slot='description'>描述文字</div>
            </za-cell>
            <za-cell title='标题文字'>
              <za-icon slot='description' type='right'/>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>带图标、描述的列表项</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell title='标题文字'>
              <za-icon type='right' slot='icon'/>
              <div slot='description'>描述文字</div>
            </za-cell>
            <za-cell title='标题文字'>
              <img src="https://avatars2.githubusercontent.com/u/499550?v=4&s=72" alt="" slot='icon'>
              <div slot='description'>描述文字</div>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>带跳转的列表项</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell isLink @click='() => {}'>标题文字</za-cell>
            <za-cell isLink @click='() => {}'>标题文字</za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>带描述、箭头、跳转的列表项</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell isLink title='标题文字' hasArrow @click='() => {}'>
              <div slot='description'>描述文字</div>
            </za-cell>
            <za-cell isLink title='标题文字' hasArrow @click='() => {}'>
              <div slot='description'>描述文字</div>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>带图标、描述、箭头、跳转的列表项</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell isLink title='标题文字' hasArrow @click='() => {}'>
              <div slot='description'>描述文字</div>
              <za-icon type='right' slot='icon'/>
            </za-cell>
            <za-cell isLink title='标题文字' hasArrow @click='() => {}'>
              <div slot='description'>描述文字</div>
              <img src="https://avatars2.githubusercontent.com/u/499550?v=4&s=72" alt="" slot='icon'>
            </za-cell>
            <za-cell isLink hasArrow @click='() => {}'>
              <div slot='description'>描述文字</div>
              <div class='box' slot='title'>
                <div class='box-title'>标题文字</div>
                <div class='box-description'>描述文字</div>
              </div>
              <img src="https://avatars2.githubusercontent.com/u/499550?v=4&s=72" alt="" slot='icon'>
            </za-cell>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>提示信息</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <za-cell title='标题'>
              <za-message theme='error' slot='help'>
                <za-icon type="info-round" />
                <span style='marginLeft: 5px'>标题不能为空</span>
              </za-message>
              <za-input type="text" placeholder="请输入标题" />
            </za-cell>
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
import '../styles/pages/CellPage.scss';

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

<style lang="css">
</style>
