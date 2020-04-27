import h from "~/h";
import { defineComponent } from "vue";
import { grey } from "~/lib/colors";

const CodeEditor = defineComponent({
  name: "CodeEditor",
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
        style={{
          width: "50%",
          fontSize: "20px",
          backgroundColor: grey[7],
          color: grey[1],
          padding: "10px",
        }}
        value={this.value}
        onInput={(e) => {
          this.onChange((e.target as any).value);
        }}
      />
    );
  },
});

export default CodeEditor;
