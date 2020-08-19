<template>
  <span>
    <div class="card-deck">
      <div class="card">
        <div class="card-header">Home</div>
        <div class="card-body">
          <div class="card-text">Home Component</div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </span>
</template>

<script>
export default {
  name: "Home",
};
</script>