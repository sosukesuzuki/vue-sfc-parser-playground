import h from "~/h";
import { defineComponent, inject, ref, watchEffect } from "vue";
import { WorkerStoreKey } from "~/lib/Store/WorkerStore";

const ASTViewer = defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const WorkerAPI = inject(WorkerStoreKey);
    const astString = ref("");
    watchEffect(async () => {
      const ast = await WorkerAPI?.parseVueSFC(props.value);
      astString.value = JSON.stringify(ast, null, 2);
    });
    return {
      astString,
    };
  },
  render() {
    return (
      <div
        style={{
          width: "50%",
          height: "calc(100vh - 40px)",
          overflow: "scroll",
        }}
      >
        <pre>
          <code>{this.astString}</code>
        </pre>
      </div>
    );
  },
});

export default ASTViewer;
