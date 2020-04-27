export default {
  input: "./index.ts",
  output: {
    file: "./build/index.js",
    globals: {
      postcss: "postcss",
    },
    format: "umd",
    name: "VueSFCCompiler",
  },
  plugins: [
    require("@rollup/plugin-json")(),
    require("@rollup/plugin-node-resolve")({
      preferBuiltins: true,
    }),
    require("@rollup/plugin-commonjs")(),
    require("rollup-plugin-node-globals")(),
    require("rollup-plugin-node-builtins")(),
    require("./rollup-consolidate-plugin")(),
    require("rollup-plugin-terser").terser(),
  ],
  external: ["postcss"],
};
