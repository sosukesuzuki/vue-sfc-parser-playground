import h from "~/h";
import { defineComponent, inject, ref, watchEffect } from "vue";
import { WorkerStoreKey } from "~/lib/Store/WorkerStore";

const ASTViewer = defineComponent({
  name: "ASTViewer",
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
      if (!WorkerAPI) {
        return;
      }
      const { descriptor } = await WorkerAPI.parseVueSFC(props.value);
      astString.value = JSON.stringify(descriptor, null, 2);
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
          overflow: "scroll",
          padding: "10px",
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
