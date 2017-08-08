<template>
<div class="home">
  <span>
    <b
      v-for="(font ,index) of fontMap"
      v-show="font.show">
      {{font.value}}
    </b>
  </span>

  <transition name="show-next">
    <div v-show="showNext" class="next">
      <p>↓</p>
    </div>
  </transition>
</div>
</template>

<script>
const DEFAULT_SHOW_INFO_TIME = 100

export default {
  name: 'homePage',
  data () {
    return {
      countent: `我是一名有 6 年开发经验的前端开发工程师，我的名字叫做 ${this.$store.state.author}，目前我正在找工作`,
      fontMap: null,
      showNext: false
    }
  },
  computed: {
  },
  created () {
    this.fontMap = this.countent.split('').map(item => {
      return {
        value: item,
        show: false
      }
    })

    this.timeShowFont(this.fontMap)
  },
  mounted () {
  },
  methods: {
    timeShowFont (dataBase, outTime) {
      let _index = 0
      const itemShow = setInterval(() => {
        if (this.$route.name !== 'homePage') {
          clearInterval(itemShow)
          return false
        }
        if (_index === dataBase.length) {
          clearInterval(itemShow)
          this.showMyInto()
          this.$store.state.showSysMenu = 1
          return false
        }
        dataBase[_index].show = true
        _index++
      }, outTime || DEFAULT_SHOW_INFO_TIME)
    },
    showMyInto () {
      this.showNext = true
    },
    showMyCodeStyle () {
      console.log('go in code')
    }
  }
}
</script>

<style lang="scss">
.home{
  padding: 32px 16px 0;
  .next{
    margin: 24px auto;
  }
  .show-next{
    &-enter-active,
    &-leave-active{
      transition: all 2.4s ease
    }
    &-enter,
    &-leave-active{
      opacity: 0
    }
  }
}
</style>
