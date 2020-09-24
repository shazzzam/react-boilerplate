import React from "react";
import { render } from "react-dom";

import { TextComponent } from "./TextComponent";

render(
  <div>
    <TextComponent text="world" />
  </div>,
  document.getElementById("root")
);
