<template>
  <div class="card-deck">
    <div class="card">
      <div class="card-header">Table</div>
      <div class="card-body">
        <div class="card-text">
          Table Component
          <br />
          <button class="btn btn-primary" @click="showToast('Send Test Message')">Show Toast</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Table',
  methods: {
    showToast(msg) {
      this.$bvToast.toast(msg, {
        toaster: 'b-toaster-bottom-center',
        variant: 'success',
        solid: true,
        noCloseButton: true
      });
    }
  }
};
</script>