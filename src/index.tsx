import h from "./h";
import { createApp, defineComponent } from "vue";

const App = defineComponent({
  render() {
    return (
      <div>
        <h1>Vue SFC Playground</h1>
      </div>
    );
  },
});

createApp(App).mount("#root");
