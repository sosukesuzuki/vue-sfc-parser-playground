import { h as render, createApp, defineComponent } from "vue";

export function h(c: any, o: any, ...args: any): any {
  const arg = [...args] as any[];
  return render(c, o, arg);
}

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
