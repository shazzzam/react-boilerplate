import React from "react";
import { shallow } from "enzyme";

import { HelloWorld } from "./HelloWorld";

describe("HelloWorld", () => {
  it("hello world", () => {
    expect(
      shallow(<HelloWorld text="world" />).matchesElement(<p>Hello world</p>)
    ).toBe(true);
  });
});
