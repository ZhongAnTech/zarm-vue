<template>
  <div class="slide-bar">
    <router-link
      v-for="(doc, index) in docNav"
      :key="index"
      replace
      :to="getLinkPath(doc)"
    >
      <p class="slide-bar-item">{{doc.description}}</p>
    </router-link>

    <p class="slide-bar-title">数据录入</p>
    <router-link
      v-for="(component, index) in componentNav.form"
      :key="index"
      :to="getLinkPath(component)"
    >
      <p class="slide-bar-item">{{component.name}} <span class="chinese">{{component.description}}</span></p>
    </router-link>

    <p class="slide-bar-title">操作反馈</p>
    <router-link
      v-for="(component, index) in componentNav.feedback"
      :key="index"
      :to="getLinkPath(component)"
    >
      <p class="slide-bar-item">{{component.name}} <span class="chinese">{{component.description}}</span></p>
    </router-link>

    <p class="slide-bar-title">数据展示</p>
    <router-link
      v-for="(component, index) in componentNav.view"
      :key="index"
      :to="getLinkPath(component)"
    >
      <p class="slide-bar-item">{{component.name}} <span class="chinese">{{component.description}}</span></p>
    </router-link>

    <p class="slide-bar-title">导航</p>
    <router-link
      v-for="(component, index) in componentNav.navigation"
      :key="index"
      :to="getLinkPath(component)"
    >
      <p class="slide-bar-item">{{component.name}} <span class="chinese">{{component.description}}</span></p>
    </router-link>

    <p class="slide-bar-title">其他</p>
    <router-link
      v-for="(component, index) in componentNav.other"
      :key="index"
      :to="getLinkPath(component)"
    >
      <p class="slide-bar-item">{{component.name}} <span class="chinese">{{component.description}}</span></p>
    </router-link>
  </div>
</template>

<script>
import Format from '../../utils/format';
import Demo from '../../demos';

export default {
  data() {
    return {
      Demo,
      Format,
      activeName: 'quick-start',
      docNav: [],
      componentNav: {}
    };
  },
  created() {
    const { documents, components } = this.Demo;
    const { path } = this.$route;
    this.activeName = path.replace('/documents/', '');
    this.docNav = documents;
    this.componentNav = components;
  },
  watch: {
    $route() {
      const { path } = this.$route;
      this.activeName = path.replace('/documents/', '');
    },
  },
  methods: {
    getLinkPath(node) {
      return `/documents/${Format.camel2Dash(node.name)}`;
    },
    handleOpen(node) {
      this.$router.push({
        path: `${Format.camel2Dash(node.name)}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.slide-bar {
  position: fixed;
  top: 65px;
  bottom: 0;
  width: 280px;
  border-right: 1px solid #ebedf0;
  margin-right: -1px;
  padding: 30px 0 50px 4px;
  overflow-y: scroll;
  z-index: 1;

  > a {
    color: #464646;
  }

  .slide-bar-item {
    padding: 0 30px;
  }

  .slide-bar-title {
    color: #bdb2b2;
    font-size: 12px;
    margin: 0 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e6e6e6;
  }

  .chinese {
    font-size:12px;
    opacity: 0.6;
  }

  .router-link-active {
    color: #12C287;
  }
}
</style>
