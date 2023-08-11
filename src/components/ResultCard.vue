<template>
  <div class="card">
    <div class="counts">
      <ResultCount title="Tip Amount" :amount="tipAmount" />
      <ResultCount title="Total" :amount="total" />
    </div>
    <button @click="onReset">Reset</button>
  </div>
</template>

<script>
import ResultCount from "./ResultCount.vue";

export default {
  emits: ["onReset"],
  props: ["tipAmount", "total"],
  components: {
    ResultCount,
  },
  methods: {
    onReset() {
      this.$emit("onReset");
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #00474b;
  border-radius: 15px;
  width: 100%;
  max-width: 327px;
  padding: 24px;
}

.counts {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 15px;
}

button {
  text-transform: uppercase;
  font-size: 20px;
  background-color: #26c2ae;
  color: #00474b;
  width: 100%;
  border-radius: 5px;
  border: none;
  height: 48px;
  cursor: pointer;
  margin-top: 35px;
}

button:hover {
  background-color: #9fe8df;
}
</style>
