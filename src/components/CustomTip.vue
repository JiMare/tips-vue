<template>
  <input placeholder="Custom" type="number" :value="value" @input="updateValue" />
</template>

<script>
export default {
  emits: ["input"],
  props: ["value"],
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  border-radius: 5px;
  background-color: #f3f9fa;
  width: 100%;
  height: 48px;
  color: #00474b;
  font-size: 24px;
  text-align: right;
  padding: 6px 17.5px;
  border: none;
  outline: none;
  cursor: pointer;
}

input:focus {
  border: 2px solid #26c2ae;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
}
</style>
