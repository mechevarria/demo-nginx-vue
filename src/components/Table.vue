<template>
  <div class="card-deck">
    <div class="card">
      <div class="card-header">Table</div>
      <div class="card-body">
        <div class="card-text">
          <b-table striped :items="json" responsive bordered></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import msgMixin from '../mixins/msg-mixin'

export default {
  name: 'AppTable',
  mixins: [msgMixin],
  data() {
    return {
      json: []
    }
  },
  methods: {
    getComments() {
      const url = '/jsonplaceholder/posts'
      axios
        .get(url)
        .then((res) => {
          this.json = res.data
        })
        .catch((err) => {
          this.json = []
          console.error(err)
          this.errorMsg(url, err.message)
        })
    }
  },
  created() {
    this.getComments()
  }
}
</script>