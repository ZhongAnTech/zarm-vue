<template>
  <div class="documents-page">
      <Header/>
      <SlideNav/>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header';
import SlideNav from './SlideNav';

export default {
  data() {
    return {
      path: null
    }
  },
  components: {
    Header,
    SlideNav
  },
  watch: {
    '$route'(val) {
      this.path = val.path.replace('/documents/', '');
    }
  }
};
</script>

<style scoped lang="scss">
.documents-page {
  header {
    box-shadow: 0 2px 8px #f0f1f2;
  }
}

.scroll-to-top {
  position: fixed;
  right: 30px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #999;
  font-size: 20px;
  border-radius: 30px;
  opacity: .8;
  box-shadow:0px 2px 10px 0px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #12C287;
    color: #fff;
    box-shadow:0px 2px 10px 0px rgba(18, 194, 135, 0.3);
  }
}

@media only screen and (max-width: 767.99px) {
  .side-bar {
    display: none;
  }

  .documents-page {
    main {
      min-width: 100%;

      .main-container {
        padding: 0 20px;
      }
    }
  }
}
</style>
