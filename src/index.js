import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import useStateInCustomProperties from "https://cdn.skypack.dev/use-state-in-custom-properties";

const App = () => {
  const [activeColor, setActiveColor] = useState("red");
  const CustomPropertiesWrapper = useStateInCustomProperties("box", {
    activeColor
  });
  return (
    <CustomPropertiesWrapper>
      <h1 class="is-size-4">Active Color: {activeColor}</h1>
      <button onClick={() => setActiveColor("red")}>Change to red</button>{" "}
      <button onClick={() => setActiveColor("blue")}>Change to blue</button>
    </CustomPropertiesWrapper>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));