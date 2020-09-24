import React from "react";
import { shallow } from "enzyme";

import { TextComponent } from "./TextComponent";

describe("TextComponent", () => {
  it("hello world", () => {
    expect(
      shallow(<TextComponent text="world" />).matchesElement(<p>Hello world</p>)
    ).toBe(true);
  });
});
