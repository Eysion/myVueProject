<template>
<div class="skill-tree"
  :class="`active${colorCount}`">
  <iscroll-view
    class="skill-tree-box"
    v-if="skillTree"
    @pullUp="toggleSkill()"
    @pullDown="toggleSkill()"
    :options="{mouseWheel: true}">
    <transition-group name="show-next">
      <dl class="skill-tree-main"
        v-for="skill of skillTree"
        :key="skill.title">
        <dt class="skill-tree-main-title">
          <i class="iconfont" :class="`icon-${skill.icon}`"></i>
          {{skill.title}}
        </dt>
        <dd class="skill-tree-item"
          v-if="skill.subList">
          <span class="skill-tree-item-btn"
            v-for="subSkill of skill.subList"
            @click.stop="changeTargetBg">
            <i class="iconfont"
              :class="`icon-${subSkill.icon || subSkill.name}`"></i>
            {{subSkill.name}}
          </span>
        </dd>
      </dl>
    </transition-group>
  </iscroll-view>
</div>
</template>

<script>
import SKILL_MAP from '@/dataBase/mySkillTree'

const COLOR_LIST = ['006699', '009933', '336633', '009933', '660099', '996666', '99CC33', 'CC3366', '666699']

export default {
  data () {
    return {
      skillTree: _.cloneDeep(SKILL_MAP),
      colorCount: 0,
      skillActive: false
    }
  },
  methods: {
    changeTargetBg (item) {
      const style = event.target.style
      style.backgroundColor = style.backgroundColor ? '' : `#${COLOR_LIST[_.random(0, 8)]}`
    },
    toggleSkill (type) {
      this.colorCount = this.colorCount === 4 ? 0 : this.colorCount + 1
      this.skillActive = !this.skillActive
    }
  }
}
</script>

<style lang="scss">
$color-list: #006699 #009933 #336633 #009933 #660099 #996666 #99CC33 #CC3366 #666699;

@mixin bg-color() {
  $random-color: random(length($color-list));
  background: nth($color-list, $random-color);
}
.skill-tree{
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  @for $a from 1 through 4 {
    &.active#{$a}{
      @for $i from 1 through 12 {
        .skill-tree-item-btn:nth-child(#{$i}) {
          @include bg-color
          &:hover{
            opacity: .8
          }
          &.active{
            @include bg-color
          }
        }
      }
    }
  }
  &-box{
    position: absolute;
    padding: 0 16px;
    text-align: left;
    height: 100%;
  }
  &-main{
    &-title{
      line-height: 48px;
      border-bottom: 1px solid #ccc;
    }
  }
  &-item{
    display: flex;
    flex-wrap: wrap;
    margin-left: -16px;
    &-btn{
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: default;
      padding: 8px 16px;
      margin: 16px;
      border-radius: 120px / 2 + 16px;
      color: #FFFFCC;
      .iconfont {
        font-size: 24px;
        margin-right: 8px;
      }
    }
    @for $i from 1 through 12 {
      .skill-tree-item-btn:nth-child(#{$i}) {
        @include bg-color
        &:hover{
          opacity: .8
        }
        &.active{
          @include bg-color
        }
      }
    }
  }
}
</style>
