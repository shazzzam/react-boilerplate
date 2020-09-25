import React from "react";

interface Prop {
  /*
   * text param
   */
  text: string;
}

export const HelloWorld: React.FC<Prop> = ({ text = "world" }) => (
  <p>Hello {text}</p>
);
