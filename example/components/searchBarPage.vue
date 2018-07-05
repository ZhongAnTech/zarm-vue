<template lang="html">
  <Container class="noticebar-page">
    <PageHeader title="搜索栏 SearchBar" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-search-bar placeholder="搜索" 
                cancelText="取消" 
                :showCancel="false" 
                @change="handleChange"
                @submit="handleSubmit"
                @blur="handleBlur"
                @focus="handleFocus"
                @clear="handleClear"
                @cancel="handleCancel"
            />
          </za-panel-body>
        </za-panel>
        <za-panel>
          <za-panel-header title="始终展示取消按钮"/>
          <za-panel-body>
            <za-search-bar placeholder="搜索" 
                shape="round"
                cancelText="取消" 
                :showCancel="true" 
                value="默认搜索关键字"
            />
          </za-panel-body>
        </za-panel>
        <za-panel>
          <za-panel-header title="手动获取焦点"/>
          <za-panel-body>
            <za-search-bar ref="searchRef" placeholder="搜索" shape="radius"
                cancelText="取消"  />
            <za-button theme='primary' @click="handleClick">点击获取焦点</za-button>
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

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      value: "",
    }
  },
  methods: {
    handleClick(){
      this.$refs.searchRef.focus();
    },
    handleChange(val){
      this.value = val
    },
    handleSubmit(val){
      console.log(`搜索内容为${val}`);
    },
    handleChange(val){
      console.log(`搜索内容为${val}`);
    },
    handleFocus(){
      console.log('获取焦点');
    },
    handleBlur(){
      console.log('失去焦点');
    },
    handleClear(){
      console.log('点击了清除');
    },
    handleCancel(){
      console.log('点击了取消');
    }
  },
};
</script>
