import { expose } from "comlink";
import { parseVueSFC } from "./parse";

export default class WorkerAPI {
  parseVueSFC(value: string) {
    return parseVueSFC(value);
  }
}

expose(WorkerAPI);
