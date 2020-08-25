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
      this.msg = {
        text: text,
        variant: 'info',
        title: 'Information',
        iconClass: 'cil-info',
        textClass: 'text-info'
      }
      this.$bvToast.show('toast-msg')
      this.$store.commit('addMessage', this.msg)
    })
    eventBus.$on('success', (text) => {
      this.msg = {
        text: text,
        variant: 'success',
        title: 'Success',
        iconClass: 'cil-check-circle',
        textClass: 'text-success'
      }
      this.$bvToast.show('toast-msg')
      this.$store.commit('addMessage', this.msg)
    })
    eventBus.$on('warning', (text) => {
      this.msg = {
        text: text,
        variant: 'warning',
        title: 'Warning',
        iconClass: 'cil-warning',
        textClass: 'text-warning'
      }
      this.$bvToast.show('toast-msg')
      this.$store.commit('addMessage', this.msg)
    })
    eventBus.$on('error', (text) => {
      this.msg = {
        text: text,
        variant: 'danger',
        title: 'Error',
        iconClass: 'cil-x-circle',
        textClass: 'text-danger'
      }
      this.$bvToast.show('toast-msg')
      this.$store.commit('addMessage', this.msg)
    })
  }
}
</script>