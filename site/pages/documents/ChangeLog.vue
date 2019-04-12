<template lang="html">
  <Container class="document-quick-start">
    <div v-for="(item,index) in changeLogs" :key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{item['tag_name']}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">{{getFormatDate(item['published_at'])}}</el-button>
        </div>
        <div v-html="marked(item.body)" class="text item">
        </div>
      </el-card>
    </div>
  </Container>
</template>

<script>
import Ajax from 'axios';
import dayjs from 'dayjs';
import marked from 'marked';
import Container from '../../components/Container';

export default {
  components: {
    Container
  },
  data() {
    return {
      marked,
      changeLogs: []
    }
  },
  created() {
    const self = this;
    Ajax.get('https://api.github.com/repos/ZhonganTechENG/zarm-vue/releases')
     .then(function (response) {
       console.log(response);
       self.changeLogs = response.data;
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .then(function () {
       // always executed
     });
  },
  methods: {
    getFormatDate(date) {
      return dayjs(date).format('YYYY-MM-DD');
    }
  }
};
</script>

<style scoped lang='scss'>
 .box-card {
   margin-bottom: 20px;
 }
</style>
