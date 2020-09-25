import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { HelloWorld } from "./HelloWorld";

export default {
  title: "HelloWorld",
  decorators: [withKnobs],
};

export const HelloWorldStory: React.FC<{}> = () => {
  const param = text("Text", "world");

  return <HelloWorld text={param} />;
};
