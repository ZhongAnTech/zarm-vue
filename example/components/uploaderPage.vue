<template lang="html">
  <Container class="uploader-page">
    <PageHeader title="上传组件 Uploader" />
    <main>
      <div>
        <za-panel>
          <za-panel-header>
            <za-panel-title>点击一次选择单张</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <div class="uploader-wrapper">
              <za-badge sup v-for= '(i, index) in files' class="uploader-item" shape='circle' :key='index' @click='remove(index)'>
                <za-icon type='wrong' slot='text' />
                <div class='uploader-item-img'>
                  <a :href="i.thumbnail" target="_blank"><img :src="i.thumbnail" alt=""></a>
                </div>
              </za-badge>
              <div class="uploader-wrapper">
                <za-uploader
                  class="uploader-btn"
                  accept="image/jpg, image/jpeg, image/gif, image/png"
                  @change='handleChange'>
                  <za-icon type="add" />
                </za-uploader>
              </div>
            </div>
          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header>
            <za-panel-title>点击一次选择多张</za-panel-title>
          </za-panel-header>
          <za-panel-body>
            <div class="uploader-wrapper">
              <za-badge sup v-for= '(i, index) in fileList' class="uploader-item" shape='circle' :key='index' @click='remove2(index)'>
                <za-icon type='wrong' slot='text' />
                <div class='uploader-item-img'>
                  <a :href="i.thumbnail" target="_blank"><img :src="i.thumbnail" alt=""></a>
                </div>
              </za-badge>
              <div class="uploader-wrapper">
                <za-uploader
                  v-if='fileList.length < 5'
                  multiple
                  class="uploader-btn"
                  :before-change='beforeChange'
                  accept="image/jpg, image/jpeg, image/gif, image/png"
                  @change='handleChangeMulti'>
                  <za-icon type="add" />
                </za-uploader>
              </div>
            </div>
          </za-panel-body>
        </za-panel>

      </div>
      <za-toast :visible.sync='visible' :duration='1000'>删除成功</za-toast>
    </main>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/UploaderPage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      files: [],
      fileList: [],
      visible: false,
    }
  },
  methods: {
    handleChange(data){
      console.log(data);
      this.files.push(data)
    },
    handleChangeMulti(dataList){
      if(dataList.length + this.fileList.length > 5){
        alert('超过5张')
        this.fileList = this.fileList.concat(...(dataList.slice(0, 5 - this.fileList.length)));
      }else{
        this.fileList = this.fileList.concat(...dataList);
      }
    },
    remove(index){
      this.files.splice(index, 1);
      this.visible = true
    },
    remove2(index){
      this.fileList.splice(index, 1);
      this.visible = true
    },
    beforeChange(){
      if(this.fileList.length > 5){
        alert('超过5张')
        return false
      }else{
        alert('before change')
      }
    }
  },
};
</script>
