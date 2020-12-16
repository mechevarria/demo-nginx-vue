<template>
  <div class="card-deck mb-3">
    <div class="card">
      <div class="card-header"><i class="spinner-border spinner-border-sm mr-1" v-if="isBusy"></i> Table</div>
      <div class="card-body">
        <div class="card-text">
          <p>
            Displaying {{start}} to {{start + perPage}} of
            <strong>{{count}}</strong>
            total comments
          </p>
          <b-table striped :items="data" responsive bordered ref="table" @row-clicked="onRowClick" :tbody-tr-class="'app-pointer'"></b-table>
          <div class="d-flex">
            <b-pagination
              v-model="currentPage"
              :total-rows="count"
              :per-page="perPage"
              v-on:input="getData"
              :disabled="isBusy"
            ></b-pagination>
          </div>
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
      count: 0,
      perPage: 10,
      currentPage: 1,
      start: 0,
      data: [],
      isBusy: false
    }
  },
  methods: {
    onRowClick(row) {
      this.$router.push({path: `/home/table/${row.id}`})
    },
    getData() {
      this.isBusy = true
      this.start = (this.currentPage - 1) * this.perPage
      const options = {
        params: {
          _limit: this.perPage,
          _start: this.start
        }
      }
      const url = '/jsonplaceholder/comments'
      axios
        .get(url, options)
        .then((res) => {
          this.data = res.data
          this.count = res.headers['x-total-count']
        })
        .catch((err) => {
          console.error(err)
          this.errorMsg(err.message)
        })
        .finally(() => {
          this.isBusy = false
        })
    }
  },
  created() {
    this.getData()
  }
}
</script>
<style scoped>
.app-pointer {
  cursor: pointer;
}
</style>