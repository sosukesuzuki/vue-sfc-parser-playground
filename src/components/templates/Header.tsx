import h from "~/h";
import { defineComponent } from "vue";

const Header = defineComponent({
  render() {
    return (
      <header style={{ height: "40px" }}>
        <h1>Vue SFC Parser Playground</h1>
      </header>
    );
  },
});

export default Header;
