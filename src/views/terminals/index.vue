<template>
<div class="terminals">
  <xm-dialog
    title="控制台"
    :show="$store.state.showTerminals"
    :on-close="handleColse"
    :is-modal="true">
    <div slot="content">
      <div class="terminals-box"
        @click="fouceInput">
        <dl>
          <dt>
            控制台，输入 help 获取帮助
          </dt>

          <dd v-for="msg of msgList">
            <p>
              this.$root <= {{msg.user}}
            </p>
            <p>
              this.$root => {{msg.callback}}
            </p>
          </dd>

          <dd>
            this.$root  =>  <input @keyup.stop="subEval" v-model="evalValue"/>
          </dd>
        </dl>
      </div>
    </div>
  </xm-dialog>
</div>
</template>

<script>
import unit from '@/units/unit'
import xmDialog from '@/components/dialog'

const ENTER_KEYCODE = 13

export default {
  components: {
    xmDialog
  },
  data () {
    return {
      msgList: [],
      evalValue: ''
    }
  },
  methods: {
    fouceInput () {
      this.$el.querySelector('input').focus()
    },
    formatEvent (eventName) {
      const rootEvent = ['route 路由名称', 'routeMap']
      for (let key in unit) {
        rootEvent.push(key)
      }

      return rootEvent
    },
    goPageDown () {
      this.$nextTick(() => {
        const _el = this.$el.querySelector('.terminals-box')
        this.$el.querySelector('.terminals-box').scrollTop = _el.scrollHeight
      })
    },
    subEval () {
      if (event.keyCode === ENTER_KEYCODE && this.evalValue === 'clear()') {
        this.msgList = []
      }
      if (event.keyCode === ENTER_KEYCODE && this.evalValue.substring(0, 6) === 'route ') {
        this.msgList.push({
          user: this.evalValue,
          callback: `页面跳转到了 => ${this.evalValue.split('route ')[1]}`
        })
        this.$router.push(this.evalValue.split('route ')[1])

        this.goPageDown()
        this.evalValue = ''
        return false
      }

      if (event.keyCode === ENTER_KEYCODE && this.evalValue === 'routeMap') {
        this.msgList.push({
          user: this.evalValue,
          callback: 'routeMap => "/", "pdf_resume", "skill_tree", "experience"'
        })
        this.goPageDown()
        this.evalValue = ''
        return false
      }

      if (event.keyCode === ENTER_KEYCODE && this.evalValue !== 'help') {
        const eventname = this.evalValue.split('(')[0]
        const eventKey = this.evalValue.split('(')[1] ? this.evalValue.split('(')[1].split(')')[0] : ''

        if (unit[eventname]) {
          this.msgList.push({
            user: this.evalValue,
            callback: unit[eventname](eventKey)
          })
        } else {
          this.msgList.push({
            user: this.evalValue,
            callback: `Error: // => Not Find ${this.evalValue}`
          })
        }

        this.goPageDown()
        this.evalValue = ''
        return false
      }

      if (event.keyCode === ENTER_KEYCODE && this.evalValue === 'help') {
        this.msgList.push({
          user: this.evalValue,
          callback: `可用的方法：${this.formatEvent().join('、')}`
        })

        this.goPageDown()
        this.evalValue = ''
        return false
      }
    },
    handleColse () {
      this.$store.state.showTerminals = 0
    }
  }
}
</script>

<style lang="scss">
.terminals{
  position: relative;
  z-index: 1;
  .component-dialog{
    z-index: 2;
  }
  .component-dialog .dialog-wrap .dialog-container{
    max-width: 480px;
    margin: 0 auto;
    background-color: #000;
    color: #eee;
    .dialog-content{
      padding: 0
    }
  }
  .dialog-actions{
    background: #000;
    color: #eee;
  }
  &-box{
    border: 3px groove #cecece;
    padding: 0 16px;
    background: #000;
    color: #fefefe;
    text-align: left;
    height: 320px;
    overflow: auto;
    dd{
      width: 100%;
      margin: 0;
      line-height: 32px;
      display: flex;
      flex-wrap: wrap;
      P {
        margin: 8px 0;
        width: 100%;
      }
      >input{
        flex: 1;
        padding-left: 16px;
        border: none;
        outline: none;
        background: none;
        color: #eee;
      }
    }
  }
}
</style>
