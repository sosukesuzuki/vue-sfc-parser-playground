import h from "~/h";
import { createApp, provide } from "vue";
import App from "~/components/App";
import WorkerAPI from "~/lib/worker/WorkerAPI";
import WorkerProxy from "./WorkerProxy";
import { WorkerStoreKey } from "./lib/Store/WorkerStore";

async function main(): Promise<void> {
  const proxy = (await new (WorkerProxy as any)()) as WorkerAPI;
  createApp({
    setup() {
      provide(WorkerStoreKey, proxy);
      return () => <App />;
    },
  }).mount("#root");
}

main();
