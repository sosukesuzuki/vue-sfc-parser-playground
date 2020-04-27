export let vueSFCParser:
  | typeof import("../../../vue-sfc-compiler-parser")
  | null = null;

export function parseVueSFC(value: string) {
  return new Promise((resolve, reject) => {
    if (!vueSFCParser) {
      reject("vueSFCParser  is not imported yet.");
      return;
    }
    const parsed = vueSFCParser.parse(value);
    resolve(parsed);
  });
}

async function importVueSFCParser(): Promise<void> {
  const _p = await import("../../../vue-sfc-compiler-parser");
  vueSFCParser = _p;
}

importVueSFCParser();
