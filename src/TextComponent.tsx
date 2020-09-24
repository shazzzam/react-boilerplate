import React from "react";

interface Prop {
  text: string;
}

export const TextComponent: React.FC<Prop> = ({ text = "hello" }) => (
  <p>Hello {text}</p>
);
