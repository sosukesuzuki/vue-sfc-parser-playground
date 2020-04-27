import { wrap } from "comlink";

export default wrap(
  new Worker("./lib/worker/WorkerAPI.ts", { type: "module" })
);
