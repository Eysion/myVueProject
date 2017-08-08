<template>
<div class="sys-menu-dialog">
  <iframe seamless
    v-if="!this.$store.state.isPhone"
    :src="pdfSrc"></iframe>
  <a class="showPdf" target="_blank" :href="pdfSrc">在新窗口预览</a>
</div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      pdfSrc: '/static/pdfFile/中级前端开发-6年工作经验-李广远简历.pdf'
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.sys-menu-dialog{
  position: relative;
  max-width: 100%;
  height: 100%;
  -webkit-overflow-scroll: touch;
  .showPdf{
    text-decoration: none;
  }
  iframe{
    width: 100%;
    height: 100%;
  }
}
</style>
