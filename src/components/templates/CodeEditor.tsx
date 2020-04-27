import h from "~/h";
import { defineComponent } from "vue";

const CodeEditor = defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    onChange: {
      type: (Function as any) as () => (value: string) => void,
      required: true,
    },
  },
  render() {
    return (
      <textarea
        style={{ width: "50%" }}
        value={this.value}
        onInput={(e) => {
          this.onChange((e.target as any).value);
        }}
      />
    );
  },
});

export default CodeEditor;
