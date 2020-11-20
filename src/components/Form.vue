<template>
  <div class="card-deck">
    <div class="card">
      <div class="card-header">Form</div>
      <form class="card-text" @submit.prevent="handleSubmit">
        <div class="card-body">
          <div class="form-group">
            <label>Message</label>
            <input v-model="text" type="text" class="form-control" />
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" value="success" v-model="type" />
            <label class="form-check-label mt-1">Success</label>
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" value="info" v-model="type" />
            <label class="form-check-label mt-1">Info</label>
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" value="warning" v-model="type" />
            <label class="form-check-label mt-1">Warning</label>
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" value="error" v-model="type" />
            <label class="form-check-label mt-1">Error</label>
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-sm btn-primary mr-1" :disabled="isBusy">
            <i class="cil-check-circle btn-icon mr-1" v-if="!isBusy"></i>
            <i class="spinner-border spinner-border-sm mr-1" v-if="isBusy"></i>Submit
          </button>
          <button type="button" class="btn btn-sm btn-secondary" @click="clear" :disabled="isBusy">
            <i class="cil-x-circle btn-icon mr-1"></i>Clear
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import msgMixin from '../mixins/msg-mixin'

export default {
  name: 'AppForm',
  mixins: [msgMixin],
  data() {
    return {
      text: null,
      type: 'success',
      isBusy: false
    }
  },
  methods: {
    handleSubmit() {
      this.isBusy = true
      setTimeout(() => {
        switch (this.type) {
          case 'info':
            this.infoMsg(this.text)
            break
          case 'success':
            this.successMsg(this.text)
            break
          case 'warning':
            this.warningMsg(this.text)
            break
          case 'error':
            this.errorMsg(this.text)
            break
        }
        this.isBusy = false
      }, 500)
    },
    clear() {
      this.text = null
    }
  }
}
</script>