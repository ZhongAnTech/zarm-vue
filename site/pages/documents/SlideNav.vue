<template>
  <div class="slide-bar">
    <el-menu
      :default-active="activeName"
      :default-openeds="['2']"
      class="el-menu-vertical-demo">
      <el-menu-item :index="Format.camel2Dash(doc.name)" v-for="(doc, index) in docNav" :key="index" @click="handleOpen(doc)">
        <span slot="title">{{doc.description}}</span>
        <a style="display:none" :href="getLinkPath(doc)"></a>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <span>组件</span>
        </template>
        <el-menu-item-group title="数据录入">
          <el-menu-item :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.form" :key="index" @click="handleOpen(component)">
            <p slot="title">{{component.name}}  <span class="chinese">{{component.description}}</span></p>
            <a style="display:none" :href="getLinkPath(component)"></a>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="操作反馈">
          <el-menu-item :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.feedback" :key="index" @click="handleOpen(component)">
            <p slot="title">{{component.name}}  <span class="chinese">{{component.description}}</span></p>
            <a style="display:none" :href="getLinkPath(component)"></a>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="数据展示">
          <el-menu-item :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.view" :key="index" @click="handleOpen(component)">
            <p slot="title">{{component.name}}  <span class="chinese">{{component.description}}</span></p>
            <a style="display:none" :href="getLinkPath(component)"></a>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="导航">
          <el-menu-item :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.navigation" :key="index" @click="handleOpen(component)">
            <p slot="title">{{component.name}}  <span class="chinese">{{component.description}}</span></p>
            <a style="display:none" :href="getLinkPath(component)"></a>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="其他">
          <el-menu-item :index="Format.camel2Dash(component.name)" v-for="(component, index) in componentNav.other" :key="index" @click="handleOpen(component)">
            <p slot="title">{{component.name}}  <span class="chinese">{{component.description}}</span></p>
            <a style="display:none" :href="getLinkPath(component)"></a>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Format from '../../utils/format';
import Demo from '../../demos';
import Utils from 'site/utils';
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
    this.activeName = path.replace('/documents/', '')
    this.docNav = documents;
    this.componentNav = components;
  },
  watch: {
    "$route"(val) {
      const { path } = this.$route;
      this.activeName = path.replace('/documents/', '')
    }
  },
  methods: {
    getLinkPath(node) {
      return `#/documents/${Format.camel2Dash(node.name)}`
    },
    handleOpen(node) {
      console.log(node);
      const v = this.$store.state.version;
      this.$router.push({
        path: `${Format.camel2Dash(node.name)}`
      });
    }
  }
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
  .el-menu {
    border-right-width: 0;

    p {
      margin: 0;
    }
  }
  .chinese {
    opacity: .6;
  }
}

.el-menu-item {
  color: #666;
}
</style>
