const EMPTY = "export default {};";
const PREFIX = "\0shim:";

module.exports = function () {
  return {
    name: "consolidate",
    resolveId(importee) {
      if (importee.startsWith(PREFIX)) {
        return importee;
      }
      return PREFIX + importee;
    },
    load(id) {
      if (id.startsWith(PREFIX)) {
        return EMPTY;
      }
    },
  };
};
