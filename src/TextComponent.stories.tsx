import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { TextComponent } from "./TextComponent";

export default {
  title: "TextComponent",
  decorators: [withKnobs],
};

export const TextComponentStory: React.FC<{}> = () => {
  const param = text("Text", "world");

  return <TextComponent text={param} />;
};
