<template>
  <button
    :class="{ selected: isSelected }"
    @click="$emit('toggle-selected', this.percent)"
  >
    {{ percent }}%
  </button>
</template>

<script>
export default {
  emits: ["toggle-selected"],
  props: ["percent", "isSelected"],
};
</script>

<style scoped>
button {
  background-color: #00474b;
  color: #fff;
  min-width: 100%;
  max-width: 146px;
  border-radius: 5px;
  height: 48px;
  font-size: 24px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #9fe8df;
  color: #00474b;
}

.selected {
  color: #00474b;
  background-color: #26c2ae;
}
</style>
