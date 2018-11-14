<template>
  <main>
    <div class="main-container">
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  components: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
main {
  min-width: 1200px;
  margin: 80px auto 15px;
  padding-top: 40px;
  background-color: #fff;
  overflow: hidden;

  .main-container {
    border-left: 1px solid #ebedf0;
    font-size: 16px;
    margin-left: -1px;
    min-height: 500px;
    overflow: hidden;
    padding: 0 560px 140px 340px;
    position: relative;
  }

  .simulator {
    position: fixed;
    top: 105px;
    right: 0;
    width: 500px;
    
    iframe {
      border: 1px solid #eaeefb;
    }
  }
}
</style>
