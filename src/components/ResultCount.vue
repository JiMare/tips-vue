<template>
  <div class="result">
    <div>
      <h3>{{ title }}</h3>
      <h4>/ person</h4>
    </div>
    <h2>${{ amount }}</h2>
  </div>
</template>

<script>
export default {
  props: ["title", "amount"],
};
</script>

<style scoped>
h3 {
  color: #fff;
  font-size: 16px;
}

h4 {
  color: #7f9d9f;
  font-size: 13px;
}
.result {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

h2 {
  color: #26c2ae;
  font-size: 32px;
}
</style>
