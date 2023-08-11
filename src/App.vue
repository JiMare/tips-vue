<template>
  <img src="./assets/images/logo.svg" class="logo" />
  <SplitterCard>
    <input-component
      label="Bill"
      :value="bill"
      :url="require('./assets/images/icon-dollar.svg')"
      @input="(value) => (this.bill = Number(value))"
    ></input-component>
    <TipsCard @selected-tip="setSelectedTip" ref="tipsCard" />
    <input-component
      label="Number of People"
      :value="people"
      :url="require('./assets/images/icon-person.svg')"
      @input="(value) => (this.people = Number(value))"
    ></input-component>
    <ResultCard :tipAmount="tipAmount" :total="total" @onReset="onReset" />
  </SplitterCard>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";
import ResultCard from "./components/ResultCard.vue";
import SplitterCard from "./components/SplitterCard.vue";
import TipsCard from "./components/TipsCard.vue";

export default {
  name: "App",
  components: {
    SplitterCard,
    InputComponent,
    TipsCard,
    ResultCard,
  },
  data() {
    return {
      bill: null,
      people: null,
      selectedTip: 0,
    };
  },
  computed: {
    tipAmount() {
      const tip = (this.bill / 100) * this.selectedTip;
      const tipPerPerson = tip / this.people;
      return tip && this.people ? tipPerPerson.toFixed(2) : "0.00";
    },
    total() {
      const billWithTip = (this.bill / 100) * (100 + this.selectedTip);
      const totalPerPerson = billWithTip / this.people;
      return billWithTip && this.people ? totalPerPerson.toFixed(2) : "0.00";
    },
  },
  methods: {
    setSelectedTip(tip) {
      this.selectedTip = tip;
    },
    onReset() {
      this.bill = null;
      this.people = null;
      this.selectedTip = 0;
      this.$refs.tipsCard.resetAllTips();
    },
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Space Mono", monospace;
  font-weight: 700;
}
#app {
  height: 100vh;
  background-color: #c5e4e7;
}

.logo {
  display: block;
  margin-inline: auto;
  padding-top: 50px;
  padding-bottom: 41px;
}
</style>
