import { createApp } from "vue";
import App from "./App.vue";
import InputComponent from "./components/InputComponent.vue";
import TipButton from "./components/TipButton.vue";

const app = createApp(App);

app.component("input-component", InputComponent);
app.component("tip-button", TipButton);

app.mount("#app");
