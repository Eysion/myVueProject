<template>
<div class="footer"
  :class="{'night': !$store.state.templateStyle}">
  <div class="footer-warp"
    v-show="$route.name !== 'homePage'">
    <div class="sys-button-tools">
      <p class="sys-button"
        v-for="btn of buttons">

        <router-link
          v-if="btn.router"
          :to="{ name: btn.router }">
          <i class="iconfont"
            :title="btn.name"
            :class="[`icon-${btn.icon}`]">
          </i>
        </router-link>

        <a href="javascript:void(0)"
          v-if="!btn.router"
          @click.stop="handleBtn(btn.name)">
          <i class="iconfont"
            :title="btn.name"
            :class="[`icon-${btn.icon}`]">
          </i>
        </a>
      </p>
    </div>
  </div>

  <launchpad></launchpad>
  <terminals></terminals>
</div>
</template>

<script>
import terminals from '@/views/terminals'
import launchpad from '@/views/launchpad'

const BUTTONS = [
  {
    name: 'Launchpad',
    icon: 'launchpad'
  }, {
    name: 'Terminals',
    icon: 'terminals'
  }, {
    name: '技能树',
    icon: 'tree',
    router: 'skillTree'
  }, {
    name: '我的经历',
    icon: 'skill',
    router: 'experience'
  }, {
    name: '文字简历',
    icon: 'jianli',
    router: 'pdfResume'
  }, {
    name: '联系我',
    icon: 'dianhua',
    router: 'contactMe'
  }
]

export default {
  components: {
    terminals,
    launchpad
  },
  data () {
    return {
      buttons: _.clone(BUTTONS),
      currentState: null
    }
  },
  methods: {
    handleBtn (eventName) {
      this[`handle${eventName}`]()
    },
    handleLaunchpad () {
      const _state = this.$store.state.showSysMenu
      this.$store.state.showSysMenu = Number(!_state)
    },
    handleTerminals () {
      const _state = this.$store.state.showTerminals
      this.$store.state.showTerminals = Number(!_state)
    }
  }
}
</script>

<style lang="scss">
.footer{
  width: 100%;
  height: 48px;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  &.night{
    .sys-button-tools{
      background: #ddd;
      color: #333;
      >.sys-button{
        >a{
          color: #333;
          background: #ddd;
          font-size: 32px;
          &.router-link-active{
            background: #333;
            color: #ddd
          }
        }
      }
    }
  }
  .sys-button-tools{
    display: flex;
    background: #333;
    padding: 8px;
    height: 100%;
    >.sys-button{
      cursor: pointer;
      margin: 0 8px;
      >a{
        transition: all .1s ease;
        display: block;
        background: #333;
        color: #ddd;
        padding: 2px 8px;
        &.router-link-active{
          background: #ddd;
          color: #333
        }
      }
      .iconfont{
        font-size: 32px;
      }
    }
  }
}
</style>
