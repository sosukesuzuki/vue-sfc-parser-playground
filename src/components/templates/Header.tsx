import h from "~/h";
import { defineComponent } from "vue";

const Header = defineComponent({
  render() {
    return (
      <header
        style={{
          height: "40px",
          padding: "0 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>Vue SFC Parser Playground</h1>
        <a href="https://github.com/sosukesuzuki/vue-sfc-parser-playground">
          GitHub
        </a>
      </header>
    );
  },
});

export default Header;
