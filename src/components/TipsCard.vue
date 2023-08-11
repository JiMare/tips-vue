<template>
  <div class="wrapper">
    <label>Select Tip %</label>
    <div class="tips">
      <tip-button
        v-for="tip in tips"
        :key="tip.percent"
        :isSelected="tip.selected"
        :percent="tip.percent"
        @toggle-selected="onSelected"
      ></tip-button>
      <CustomTip
        @input="(value) => (this.customTip = Number(value))"
        :value="customTip"
      />
    </div>
  </div>
</template>

<script>
import CustomTip from "./CustomTip.vue";

export default {
  component: { CustomTip },
  data() {
    return {
      tips: [
        { percent: 5, selected: false },
        { percent: 10, selected: false },
        { percent: 15, selected: false },
        { percent: 25, selected: false },
        { percent: 50, selected: false },
      ],
      customTip: null,
    };
  },
  watch: {
    customTip(custom) {
      if (custom && custom > 0) {
        this.tips.forEach((tip) => (tip.selected = false));
        this.$emit("selected-tip", custom);
      }
    },
  },
  methods: {
    onSelected(percent) {
      this.tips.forEach((tip) =>
        tip.percent === percent ? (tip.selected = true) : (tip.selected = false)
      );
      if (this.tips.some((tip) => tip.selected)) {
        this.customTip = null;
      }
      this.$emit("selected-tip", percent);
    },
    resetAllTips() {
      this.tips.forEach((tip) => {
        tip.selected = false;
      });
      this.customTip = null;
    },
  },
  components: { CustomTip },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 311px;
}

label {
  font-size: 16px;
  color: #5e7a7d;
  text-align: left;
}

.tips {
  display: grid;
  gap: 16.6px;
  grid-template-columns: 1fr 1fr;
}
</style>
