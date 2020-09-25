import React from "react";
import { render } from "react-dom";

import { HelloWorld } from "./components";

render(<HelloWorld text="world" />, document.getElementById("root"));
