<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <!-- <a v-link="{path: '/goods'}">商品</a> 老写法 -->
  
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
  
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {urlParse} from '@/common/js/util';
  import header from './components/header/header.vue';
  
  const ERR_OK = 0;
  
  export default {
    data() {
      return {
        seller: {},
        id: (() => {
            let queryParam = urlParse();
            console.log(queryParam);
            return queryParam.id;
          })()
      };
    },
    created() {
      // this.$http.get('/api/seller').then((response) => {
      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
          // this.seller = Object.assign({}, this.seller, response.data);
          this.$set(this.seller, 'id', this.id);
          console.log(this.seller.id);
        }
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"

  #app .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7,17,27,0.1))
  .tab-item
    flex: 1
    text-align: center
    & > a 
     display: block
     font-size: 14px
     color: rgb(77,85,93)
    & .active
      color: rgb(240,20,20)



  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
