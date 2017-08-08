<template>
  <div id="app">
    <project-header></project-header>
    <div class="main">
      <transition name="route-jump">
        <router-view></router-view>
      </transition>
    </div>
    <project-footer></project-footer>
  </div>
</template>

<script>
import projectHeader from './project/header'
import projectFooter from './project/footer'

export default {
  name: 'app',
  components: {
    projectHeader,
    projectFooter
  },
  watch: {
    '$route' (path) {
      this.$store.state.showSysMenu = 0
    }
  }
}
</script>

<style lang="scss">
html,
body{
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}
#app {
  position: relative;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 16px;
  overflow: auto;
  a{
    border: none;
    text-decoration: none;
  }
  ul, ol{
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  .main{
    position: relative;
    height: 85%;
    overflow: hidden;
  }
  .route-jump{
    &-enter-active,
    &-leave-active{
      transition: all .3s ease;
    }
    &-enter,
    &-leave-active{
      opacity: 0;
    }
  }
  .light-tool{
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    padding: 4px 8px;
    background: #333;
    color: #eee;
    outline: none;
    &.icon-day{
      background: #eee;
      color: #333;
    }
  }
  .tips{
    position: relative;
    .tips-title{
      min-width: 4em;
      display: none;
      position: absolute;
      padding: 8px;
      background: #000;
      color: #fefefe;
    }
    .top {
      bottom: 100%;
      margin-left: -50%;
      left: 50%;
    }
    .bottom {
      top: 120%;
      margin-left: -50%;
      left: 50%;
    }
    .left {
      top: 0;
      right: 100%;
      margin-right: 10px;
    }
    .right {
      top: 0;
      left: 100%;
      margin-left: 10px;
    }
    &:hover{
      .tips-title{
        display: block;
      }
    }
  }
}
</style>
