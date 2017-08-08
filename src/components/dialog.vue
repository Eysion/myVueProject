<template>
<transition name="dialog">
  <div class="component-dialog"
    v-show="show"
    :class="{'is-modal': isModal}"
    @click="dialogMaskHandle">
    <div class="dialog-wrap">

      <div class="dialog-container" :style="{'width': `${width}px`}">
        <div class="dialog-actions">
          <slot name="actions">
            <a class="cancel"
              @click="closeHandle">
              <span>x</span>
            </a>
            <h5 class="dialog-title" v-if="title" :title="title">{{title}}</h5>
          </slot>
        </div>
        <div class="dialog-content">
          <slot name="content"></slot>
        </div>

      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'MD-dialog',
  props: {
    width: Number,
    title: String,
    show: {
      type: [Boolean, Number],
      required: true
    },
    isModal: {
      type: Boolean,
      default: false
    },
    modalClose: {
      type: Boolean,
      default: true
    },
    onClose: Function
  },
  methods: {
    dialogMaskHandle (event) {
      if (event.target.classList.contains('dialog-wrap') && this.modalClose) {
        this.onClose()
      }
    },
    closeHandle () {
      this.onClose()
    }
  }
}
</script>

<style lang="scss">
.component-dialog {
  position: fixed;
  display: table;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transition: opacity .3s ease;
  &.is-modal {
    background-color: rgba(0, 0, 0, .15);
  }
  .dialog-wrap {
    display: table-cell;
    vertical-align: middle;
    .dialog-container {
      padding: 14px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 9px 46px 8px rgba(0, 0, 0, .14), 0 11px 15px -7px rgba(0, 0, 0, .12), 0 24px 38px 3px rgba(0, 0, 0, .2);
      transition: all .3s ease;

      justify-content: center;
      align-items: center;
      .dialog-title {
        padding: 0 20px 10px 20px;
        margin: 0 -14px;
        min-width: 1em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .dialog-content {
        padding: 20px 24px 24px 24px;
        color: rgba(0,0,0, .54);
      }
      .dialog-actions {
        display: flex;
        flex-wrap: wrap;
        .component-button {
          margin: 0 6px;
        }
      }
    }
  }
  &.dialog-enter,
  &.dialog-leave {
    opacity: 0;
    .dialog-container {
      transform: scale(1.1);
    }
  }
}
</style>
