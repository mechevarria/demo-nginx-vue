<template>
  <b-toast id="toast-msg" :variant="msg.variant" toaster="b-toaster-bottom-center mb-2" solid>
    <template v-slot:toast-title>
      <i :class="msg.iconClass"></i>
      <strong class="ml-2 mr-auto">{{msg.title}}</strong>
    </template>
    {{ msg.text }}
  </b-toast>
</template>

<script>
import eventBus from '../event-bus'

export default {
  name: 'AppToast',
  data() {
    return {
      msg: {
        text: null,
        title: null,
        variant: null,
        iconClass: null,
        textClass: null
      }
    }
  },
  created() {
    eventBus.$on('info', (text) => {
      this.msg.text = text
      this.msg.variant = 'info'
      this.msg.title = 'Information'
      this.msg.iconClass = 'cil-info'
      this.msg.textClass = 'text-info'
      this.$bvToast.show('toast-msg')
    })
    eventBus.$on('success', (text) => {
      this.msg.text = text
      this.msg.variant = 'success'
      this.msg.title = 'Success'
      this.msg.iconClass = 'cil-check-circle'
      this.msg.textClass = 'text-success'
      this.$bvToast.show('toast-msg')
    })
    eventBus.$on('warning', (text) => {
      this.msg.text = text
      this.msg.variant = 'warning'
      this.msg.title = 'Warning'
      this.msg.iconClass = 'cil-warning'
      this.msg.textClass = 'text-warning'
      this.$bvToast.show('toast-msg')
    })
    eventBus.$on('error', (text) => {
      this.msg.text = text
      this.msg.variant = 'danger'
      this.msg.title = 'Error'
      this.msg.iconClass = 'cil-x-circle'
      this.msg.textClass = 'text-danger'
      this.$bvToast.show('toast-msg')
    })
  }
}
</script>