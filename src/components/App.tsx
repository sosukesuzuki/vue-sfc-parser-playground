import h from "~/h";
import { defineComponent, ref } from "vue";
import Header from "~/components/templates/Header";
import CodeEditor from "~/components/templates/CodeEditor";
import ASTViewer from "~/components/templates/ASTViewer";

const initialValue = `<template>
<h1>Vue SFC</h1>
</template>

<style>
h1 {
color: red;
}
</style>`;

const App = defineComponent({
  name: "App",
  setup() {
    const input = ref(initialValue);
    const update = (value: string) => {
      input.value = value;
    };
    return {
      input,
      update,
    };
  },
  render() {
    return (
      <main>
        <Header />
        <div style={{ display: "flex", height: "calc(100vh - 40px)" }}>
          <CodeEditor value={this.input} onChange={this.update} />
          <ASTViewer value={this.input} />
        </div>
      </main>
    );
  },
});

export default App;
