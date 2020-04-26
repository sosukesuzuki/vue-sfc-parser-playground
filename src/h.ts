import { h as render } from "vue";

export default function h(c: any, o: any, ...args: any): any {
  const arg = [...args] as any[];
  return render(c, o, arg);
}
