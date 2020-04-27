import WorkerAPI from "~/lib/worker/WorkerAPI";
import { InjectionKey } from "vue";

export const WorkerStoreKey: InjectionKey<WorkerAPI> = Symbol("WorkerStore");
