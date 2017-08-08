<template>
<div class="launchpad-dialog">
  <xm-dialog
    :show="$store.state.showSysMenu"
    :on-close="handleColse"
    :is-modal="true">
    <div slot="actions"></div>
    <ul class="launchpad-main" slot="content">
      <li class="launchpad-main-item"
        v-for="item of launchpads">
        <router-link class="launchpad-main-item-link"
          v-if="item.router"
          :to="{ name: item.router }">
          <i class="iconfont"
            :class="`icon-${item.icon}`"></i>
          <span>{{item.name}}</span>
        </router-link>

        <a class="launchpad-main-item-link"
          v-if="!item.router"
          @click.stop="handleEvent(item.name)">
          <i class="iconfont"
            :class="`icon-${item.icon}`"></i>
          <span>{{item.name}}</span>
        </a>
      </li>
    </ul>
  </xm-dialog>
</div>
</template>

<script>
import xmDialog from '@/components/dialog'

const LAUNCHPAD_LIST = [
  {
    name: 'HomePage',
    icon: 'like',
    router: 'homePage'
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
    name: '简历',
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
    xmDialog
  },
  data () {
    return {
      launchpads: _.clone(LAUNCHPAD_LIST)
    }
  },
  created () {

  },
  methods: {
    handleColse () {
      if (this.$route.name === 'homePage') {
        return false
      }
      this.$store.state.showSysMenu = 0
    },
    handleEvent (eventName) {
      this.handleColse()
      if (eventName) {
        this[`handle${eventName}`]()
      }
    },
    handleTerminals () {
      this.$store.state.showTerminals = 1
    }
  }
}
</script>

<style lang="scss">
.launchpad{
  &-dialog{
    .dialog-container{
      max-width: 600px + 28px + 48px;
    }
  }
  &-main{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    &-item{
      width: 120px;
      margin-bottom: 16px;
      &-link{
        display: block;
        width: 100%;
        margin: 0 auto;
        color: #666;
        padding-bottom: 8px;
        cursor: pointer;
        border-radius: 5%;
        >.iconfont{
          font-size: 72px;
          display: block;
          margin-bottom: 8px;
        }
        &.router-link-active{
          background: #333;
          color: #eee;
          >.iconfont{
            color: #eee;
          }
        }
      }
    }
    @media screen and (max-width: 959px) {
      &-item{
        width: 90px;
        &-link{
          color: #999;
          >.iconfont{
            font-size: 36px;
          }
        }
      }
    }
  }
}
</style>
