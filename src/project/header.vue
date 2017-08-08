<template>
<button class="light-tool iconfont" type="button"
  :class="[$store.state.templateStyle ? 'icon-night' : 'icon-day']"
  @click.stop="changeTemplateType">
  {{$store.state.templateStyle ? '黑夜' : '日光'}}
</button>
</template>

<script>
const BG_COLOR = [
  {
    bg: '#333',
    font: '#fefefe'
  }, {
    bg: '#fefefe',
    font: '#333'
  }
]
export default{
  methods: {
    changeTemplateType () {
      this.$store.state.templateStyle = Number(!this.$store.state.templateStyle)
      this.$root.$el.style.backgroundColor = BG_COLOR[this.$store.state.templateStyle].bg
      this.$root.$el.style.color = BG_COLOR[this.$store.state.templateStyle].font
    }
  }
}
</script>
